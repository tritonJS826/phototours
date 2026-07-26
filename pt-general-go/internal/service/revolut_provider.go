package service

import (
	"bytes"
	"context"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"pt-general-go/internal/config"
	"time"

	"go.uber.org/zap"
)

type RevolutProvider struct {
	config     *config.RevolutConfig
	logger     *zap.Logger
	httpClient *http.Client
}

func NewRevolutProvider(cfg *config.Config, logger *zap.Logger) *RevolutProvider {
	return &RevolutProvider{
		config:     &cfg.RevolutConfig,
		logger:     logger,
		httpClient: &http.Client{Timeout: 30 * time.Second},
	}
}

func (p *RevolutProvider) apiBase() string {
	return "https://merchant.revolut.com/api"
}

type revolutOrderRequest struct {
	Amount               int    `json:"amount"`
	Currency             string `json:"currency"`
	CaptureMode          string `json:"capture_mode"`
	MerchantOrderExtRef  string `json:"merchant_order_ext_ref"`
	Description          string `json:"description"`
	ReturnURL            string `json:"return_url"`
	CancelURL            string `json:"cancel_url"`
}

type revolutOrderResponse struct {
	ID         string `json:"id"`
	PublicID   string `json:"public_id"`
	State      string `json:"state"`
	CheckoutURL string `json:"checkout_url"`
}

func (p *RevolutProvider) CreateOrder(ctx context.Context, dealID string, amount float64, tourTitle string, customerName string) (string, error) {
	// Revolut uses minor units (cents)
	amountMinor := int(amount * 100)
	if amountMinor <= 0 {
		amountMinor = 50 // default 0.50 USD in cents as test price
	}

	orderReq := revolutOrderRequest{
		Amount:              amountMinor,
		Currency:            "USD",
		CaptureMode:         "AUTOMATIC",
		MerchantOrderExtRef: dealID,
		Description:         fmt.Sprintf("Deposit for %s - %s", tourTitle, customerName),
		ReturnURL:           "https://tuscany-photo-tours.com/thank-you",
		CancelURL:           "https://tuscany-photo-tours.com/tours",
	}

	body, err := json.Marshal(orderReq)
	if err != nil {
		p.logger.Error("Failed to marshal Revolut order request", zap.Error(err))
		return "", err
	}

	req, err := http.NewRequest("POST", p.apiBase()+"/orders", bytes.NewReader(body))
	if err != nil {
		p.logger.Error("Failed to create Revolut order request", zap.Error(err))
		return "", err
	}

	req.Header.Set("Authorization", "Bearer "+p.config.APISecret)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Revolut-Request-Id", fmt.Sprintf("deal-%s-%d", dealID, time.Now().UnixNano()))
	req.Header.Set("Revolut-Api-Version", "2024-09-01")

	resp, err := p.httpClient.Do(req)
	if err != nil {
		p.logger.Error("Failed to create Revolut order", zap.Error(err))
		return "", err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		p.logger.Error("Failed to read Revolut order response", zap.Error(err))
		return "", err
	}

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		p.logger.Error("Revolut order creation failed",
			zap.Int("statusCode", resp.StatusCode),
			zap.String("response", string(respBody)),
		)
		return "", fmt.Errorf("revolut order creation failed: %s", string(respBody))
	}

	var orderResponse revolutOrderResponse
	if err := json.Unmarshal(respBody, &orderResponse); err != nil {
		p.logger.Error("Failed to parse Revolut order response", zap.Error(err))
		return "", err
	}

	if orderResponse.CheckoutURL == "" {
		orderResponse.CheckoutURL = fmt.Sprintf("https://checkout.revolut.com/%s", orderResponse.PublicID)
	}

	p.logger.Info("Revolut order created", zap.String("orderID", orderResponse.ID), zap.String("checkoutURL", orderResponse.CheckoutURL))
	return orderResponse.CheckoutURL, nil
}

func (p *RevolutProvider) VerifyWebhook(ctx context.Context, body []byte, headers map[string]string) (string, error) {
	signature := headers["Revolut-Signature"]
	if signature == "" {
		p.logger.Error("Missing Revolut-Signature header")
		return "", fmt.Errorf("missing Revolut-Signature header")
	}

	// Verify HMAC-SHA256 signature
	mac := hmac.New(sha256.New, []byte(p.config.PublicKey))
	mac.Write(body)
	expectedSig := hex.EncodeToString(mac.Sum(nil))

	if !hmac.Equal([]byte(signature), []byte(expectedSig)) {
		p.logger.Error("Revolut webhook signature mismatch")
		return "", fmt.Errorf("revolut webhook signature verification failed")
	}

	var event struct {
		EventType string `json:"event_type"`
		OrderID   string `json:"order_id"`
		Order     *struct {
			MerchantOrderExtRef string `json:"merchant_order_ext_ref"`
		} `json:"order"`
	}

	if err := json.Unmarshal(body, &event); err != nil {
		p.logger.Error("Failed to parse Revolut webhook event", zap.Error(err))
		return "", err
	}

	switch event.EventType {
	case "ORDER_COMPLETED", "ORDER_AUTHORISED":
		var dealID string
		if event.Order != nil && event.Order.MerchantOrderExtRef != "" {
			dealID = event.Order.MerchantOrderExtRef
		} else {
			// Fallback: try to extract from custom top-level field
			var raw map[string]interface{}
			if err := json.Unmarshal(body, &raw); err == nil {
				if order, ok := raw["order"].(map[string]interface{}); ok {
					if ref, ok := order["merchant_order_ext_ref"].(string); ok {
						dealID = ref
					}
				}
			}
		}

		if dealID == "" {
			p.logger.Error("No merchant_order_ext_ref found in Revolut webhook")
			return "", fmt.Errorf("no merchant_order_ext_ref in webhook")
		}

		p.logger.Info("Revolut webhook verified", zap.String("eventType", event.EventType), zap.String("dealID", dealID))
		return dealID, nil

	default:
		p.logger.Info("Unhandled Revolut webhook event type", zap.String("type", event.EventType))
		return "", nil
	}
}