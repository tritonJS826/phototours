package service

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"pt-general-go/internal/config"
	"time"

	"go.uber.org/zap"
)

type PayPalProvider struct {
	config     *config.PayPalConfig
	logger     *zap.Logger
	httpClient *http.Client
}

func NewPayPalProvider(cfg *config.Config, logger *zap.Logger) *PayPalProvider {
	return &PayPalProvider{
		config:     &cfg.PayPalConfig,
		logger:     logger,
		httpClient: &http.Client{Timeout: 30 * time.Second},
	}
}

func (p *PayPalProvider) apiBase() string {
	if p.config.Sandbox {
		return "https://api-m.sandbox.paypal.com"
	}
	return "https://api-m.paypal.com"
}

func (p *PayPalProvider) getAccessToken() (string, error) {
	payload := "grant_type=client_credentials"
	req, err := http.NewRequest("POST", p.apiBase()+"/v1/oauth2/token", bytes.NewReader([]byte(payload)))
	if err != nil {
		return "", err
	}
	req.SetBasicAuth(p.config.ClientID, p.config.ClientSecret)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	req.Header.Set("Accept", "application/json")

	resp, err := p.httpClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}
	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("paypal auth failed: %s", string(respBody))
	}

	var tokenResponse struct {
		AccessToken string `json:"access_token"`
	}
	if err := json.Unmarshal(respBody, &tokenResponse); err != nil {
		return "", err
	}
	return tokenResponse.AccessToken, nil
}

func (p *PayPalProvider) CreateOrder(ctx context.Context, dealID string, amount float64, tourTitle string, customerName string) (string, error) {
	accessToken, err := p.getAccessToken()
	if err != nil {
		p.logger.Error("Failed to get PayPal access token", zap.Error(err))
		return "", err
	}

	amountValue := fmt.Sprintf("%.2f", amount)

	orderReq := map[string]interface{}{
		"intent": "CAPTURE",
		"purchase_units": []map[string]interface{}{
			{
				"reference_id": dealID,
				"custom_id":    dealID,
				"amount": map[string]string{
					"currency_code": "USD",
					"value":         amountValue,
				},
				"description": fmt.Sprintf("Deposit for %s - %s", tourTitle, customerName),
			},
		},
		"payment_source": map[string]interface{}{
			"paypal": map[string]interface{}{
				"experience_context": map[string]interface{}{
					"payment_method_preference": "IMMEDIATE_PAYMENT_REQUIRED",
					"landing_page":              "BILLING",
					"user_action":               "PAY_NOW",
					"return_url":                "https://tuscany-photo-tours.com/thank-you",
					"cancel_url":                "https://tuscany-photo-tours.com/tours",
				},
			},
		},
	}

	body, err := json.Marshal(orderReq)
	if err != nil {
		p.logger.Error("Failed to marshal PayPal order request", zap.Error(err))
		return "", err
	}

	req, err := http.NewRequest("POST", p.apiBase()+"/v2/checkout/orders", bytes.NewReader(body))
	if err != nil {
		p.logger.Error("Failed to create PayPal order request", zap.Error(err))
		return "", err
	}

	req.Header.Set("Authorization", "Bearer "+accessToken)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("PayPal-Request-Id", fmt.Sprintf("deal-%s-%d", dealID, time.Now().UnixNano()))

	resp, err := p.httpClient.Do(req)
	if err != nil {
		p.logger.Error("Failed to create PayPal order", zap.Error(err))
		return "", err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		p.logger.Error("Failed to read PayPal order response", zap.Error(err))
		return "", err
	}

	if resp.StatusCode != http.StatusCreated && resp.StatusCode != http.StatusOK {
		p.logger.Error("PayPal order creation failed",
			zap.Int("statusCode", resp.StatusCode),
			zap.String("response", string(respBody)),
		)
		return "", fmt.Errorf("paypal order creation failed: %s", string(respBody))
	}

	var orderResponse struct {
		ID     string `json:"id"`
		Status string `json:"status"`
		Links  []struct {
			Href   string `json:"href"`
			Rel    string `json:"rel"`
			Method string `json:"method"`
		} `json:"links"`
	}

	if err := json.Unmarshal(respBody, &orderResponse); err != nil {
		p.logger.Error("Failed to parse PayPal order response", zap.Error(err))
		return "", err
	}

	var approvalURL string
	for _, link := range orderResponse.Links {
		if link.Rel == "payer-action" || link.Rel == "approve" {
			approvalURL = link.Href
			break
		}
	}

	if approvalURL == "" {
		p.logger.Error("No approval URL in PayPal order response", zap.String("response", string(respBody)))
		return "", fmt.Errorf("no approval URL in PayPal order response")
	}

	p.logger.Info("PayPal order created", zap.String("orderID", orderResponse.ID), zap.String("approvalURL", approvalURL))
	return approvalURL, nil
}

func (p *PayPalProvider) VerifyWebhook(ctx context.Context, body []byte, headers map[string]string) (string, error) {
	verifyPayload := map[string]interface{}{
		"auth_algo":         headers["Paypal-Auth-Algo"],
		"cert_url":          headers["Paypal-Cert-Url"],
		"transmission_id":   headers["Paypal-Transmission-Id"],
		"transmission_sig":  headers["Paypal-Transmission-Sig"],
		"transmission_time": headers["Paypal-Transmission-Time"],
		"webhook_id":        p.config.WebhookID,
		"webhook_event":     json.RawMessage(body),
	}

	verifyBody, err := json.Marshal(verifyPayload)
	if err != nil {
		p.logger.Error("Failed to marshal webhook verification payload", zap.Error(err))
		return "", err
	}

	req, err := http.NewRequest("POST", p.apiBase()+"/v1/notifications/verify-webhook-signature", bytes.NewReader(verifyBody))
	if err != nil {
		p.logger.Error("Failed to create webhook verification request", zap.Error(err))
		return "", err
	}

	accessToken, err := p.getAccessToken()
	if err != nil {
		p.logger.Error("Failed to get PayPal access token for webhook verification", zap.Error(err))
		return "", err
	}

	req.Header.Set("Authorization", "Bearer "+accessToken)
	req.Header.Set("Content-Type", "application/json")

	resp, err := p.httpClient.Do(req)
	if err != nil {
		p.logger.Error("Failed to verify PayPal webhook signature", zap.Error(err))
		return "", err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		p.logger.Error("Failed to read webhook verification response", zap.Error(err))
		return "", err
	}

	var verificationResponse struct {
		VerificationStatus string `json:"verification_status"`
	}

	if err := json.Unmarshal(respBody, &verificationResponse); err != nil {
		p.logger.Error("Failed to parse webhook verification response", zap.Error(err))
		return "", err
	}

	if verificationResponse.VerificationStatus != "SUCCESS" {
		p.logger.Error("PayPal webhook verification failed", zap.String("status", verificationResponse.VerificationStatus))
		return "", fmt.Errorf("paypal webhook verification failed: %s", verificationResponse.VerificationStatus)
	}

	var event struct {
		EventType string `json:"event_type"`
		Resource  struct {
			CustomID string `json:"custom_id"`
		} `json:"resource"`
	}

	if err := json.Unmarshal(body, &event); err != nil {
		p.logger.Error("Failed to parse PayPal webhook event", zap.Error(err))
		return "", err
	}

	if event.EventType != "PAYMENT.CAPTURE.COMPLETED" {
		p.logger.Info("Unhandled PayPal webhook event type", zap.String("type", event.EventType))
		return "", nil
	}

	if event.Resource.CustomID == "" {
		p.logger.Error("No custom_id found in PayPal webhook resource")
		return "", fmt.Errorf("no custom_id in webhook resource")
	}

	p.logger.Info("PayPal webhook verified", zap.String("dealID", event.Resource.CustomID))
	return event.Resource.CustomID, nil
}