package service

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"
	"time"

	"github.com/google/uuid"
	"go.uber.org/zap"
)

type BookingService struct {
	bookingRequestRepository *repository.BookingRequestRepository
	tourRepository           *repository.TourRepository
	zohoRepository           *repository.ZohoRepository
	config                   *config.Config
	logger                   *zap.Logger
	httpClient               *http.Client
}

func NewBookingService(
	bookingRequestRepository *repository.BookingRequestRepository,
	tourRepository *repository.TourRepository,
	zohoRepository *repository.ZohoRepository,
	config *config.Config,
	logger *zap.Logger,
) *BookingService {
	return &BookingService{
		bookingRequestRepository: bookingRequestRepository,
		tourRepository:           tourRepository,
		zohoRepository:           zohoRepository,
		config:                   config,
		logger:                   logger,
		httpClient:               &http.Client{Timeout: 30 * time.Second},
	}
}

func (s *BookingService) CreateBookingRequest(ctx context.Context, bookingRequest *domain.BookingRequest) (string, error) {
	_, err := s.saveBookingRequest(ctx, bookingRequest)
	if err != nil {

		return "", err
	}

	tourTitle, tourPrice, err := s.getTourDetails(ctx, bookingRequest.TourID)
	if err != nil {
		return "", err
	}

	contactID, err := s.resolveOrCreateContact(ctx, bookingRequest)
	if err != nil {
		return "", err
	}

	dealID, err := s.createZohoDeal(ctx, bookingRequest, tourPrice, tourTitle, contactID)
	if err != nil {
		return "", err
	}

	// for now it is just deposit: 1000$ instead of tour price
	totalAmount := 1000 * float64(bookingRequest.Travelers)
	approvalURL, err := s.createPayPalOrder(ctx, dealID, totalAmount, tourTitle, bookingRequest.Name)
	if err != nil {
		return "", err
	}

	return approvalURL, nil
}

func (s *BookingService) saveBookingRequest(ctx context.Context, bookingRequest *domain.BookingRequest) (*domain.BookingRequest, error) {
	saved, err := s.bookingRequestRepository.CreateBookingRequest(ctx, bookingRequest)
	if err != nil {
		s.logger.Error("Failed to save booking request to database", zap.Error(err), zap.Any("bookingRequest", bookingRequest))
		return nil, err
	}
	s.logger.Info("Booking request saved to database", zap.Any("savedBookingRequest", saved))
	return saved, nil
}

func (s *BookingService) getTourDetails(ctx context.Context, tourID uuid.UUID) (string, float64, error) {
	tour, err := s.tourRepository.GetTourByID(ctx, tourID)
	if err != nil {
		s.logger.Error("Failed to get tour from database", zap.Error(err), zap.Any("tourId", tourID))
		return "", 0, err
	}

	tourDates, err := s.tourRepository.GetTourDatesByTourID(ctx, tourID)
	if err != nil {
		s.logger.Error("Failed to get tour dates from database", zap.Error(err), zap.Any("tourId", tourID))
		return "", 0, err
	}

	var tourPrice float64
	if len(tourDates) > 0 && tourDates[0].Price != nil {
		tourPrice = *tourDates[0].Price
	}

	return tour.Title, tourPrice, nil
}

func (s *BookingService) resolveOrCreateContact(ctx context.Context, bookingRequest *domain.BookingRequest) (string, error) {
	var contactID string
	contactSearch, err := s.zohoRepository.GetContactByEmail(ctx, bookingRequest.Email)
	if err != nil {
		s.logger.Warn("Failed to search for existing contact", zap.Error(err))
	}

	if contactSearch != nil && len(contactSearch.Data) > 0 {
		contactID = contactSearch.Data[0].ID
		s.logger.Info("Found existing contact", zap.String("contactID", contactID))

		if bookingRequest.SubscriptionType != "" && bookingRequest.SubscriptionType != "None" {
			updateContact := &domain.ContactZoho{
				SubscriptionType: []string{bookingRequest.SubscriptionType},
			}
			err = s.zohoRepository.UpdateContact(ctx, contactID, updateContact)
			if err != nil {
				s.logger.Warn("Failed to update contact subscription type in Zoho", zap.Error(err))
			}
		}
	} else {
		// Create new contact
		contact := &domain.ContactZoho{
			Email:            bookingRequest.Email,
			LastName:         bookingRequest.Name,
			Phone:            bookingRequest.Phone,
			Language:         bookingRequest.Language,
			Timezone:         bookingRequest.Timezone,
			City:             bookingRequest.City,
			Country:          bookingRequest.Country,
			LastContactPage:  bookingRequest.LastContactPage,
			SubscriptionType: []string{bookingRequest.SubscriptionType},
		}
		err = s.zohoRepository.CreateContact(ctx, contact)
		if err != nil {
			s.logger.Error("Failed to create contact in Zoho", zap.Error(err))
			return "", err
		}
		// For new contacts, we can't get the ID easily from the response, so we'll use "stub"
		contactID = "stub"
		s.logger.Info("Created new contact in Zoho")
	}

	return contactID, nil
}

func (s *BookingService) createZohoDeal(ctx context.Context, bookingRequest *domain.BookingRequest, tourPrice float64, tourTitle string, contactID string) (string, error) {
	deal := &domain.DealZoho{
		DealName:             bookingRequest.Name,
		ClientEmail:          bookingRequest.Email,
		ClientPhone:          bookingRequest.Phone,
		TravelDates:          bookingRequest.TravelDate,
		Travelers:            bookingRequest.Travelers,
		SingleRoomSupplement: bookingRequest.Rooms,
		Amount:               tourPrice,
		TourName:             tourTitle,
		Stage:                "In Progress",
		Pipeline:             "Photo Tours",
		AccountID:            "stub",
		ContactID:            contactID,
		LeadID:               "stub",
		Source:               "Website",
		Language:             bookingRequest.Language,
		Timezone:             bookingRequest.Timezone,
		City:                 bookingRequest.City,
		Country:              bookingRequest.Country,
		LastContactPage:      bookingRequest.LastContactPage,
		DepositPaymentDate:   time.Now().Format("2006-01-02"),
	}

	if bookingRequest.SubscriptionType != "" && bookingRequest.SubscriptionType != "None" {
		deal.SubscriptionType = []string{bookingRequest.SubscriptionType}
	} else {
		deal.SubscriptionType = []string{"None"}
	}

	dealResp, err := s.zohoRepository.CreateDeal(ctx, deal)
	if err != nil {
		s.logger.Error("Failed to create deal in Zoho", zap.Error(err), zap.Any("deal", deal))
		return "", err
	}
	// Check for deal ID from response
	if len(dealResp.Data) == 0 || dealResp.Data[0].Details.ID == "" {
		s.logger.Error("No deal ID returned from Zoho")
		return "", fmt.Errorf("no deal ID returned from Zoho")
	}

	return dealResp.Data[0].Details.ID, nil
}

func (s *BookingService) createPayPalOrder(ctx context.Context, dealID string, amount float64, tourTitle string, customerName string) (string, error) {
	paypalBaseURL := s.getPayPalAPIBase()
	accessToken, err := s.getPayPalAccessToken()
	if err != nil {
		s.logger.Error("Failed to get PayPal access token", zap.Error(err))
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
					"landing_page":              "LOGIN",
					"user_action":               "PAY_NOW",
					"return_url":                "https://tuscany-photo-tours.com/thank-you",
					"cancel_url":                "https://tuscany-photo-tours.com/tours",
				},
			},
		},
	}

	body, err := json.Marshal(orderReq)
	if err != nil {
		s.logger.Error("Failed to marshal PayPal order request", zap.Error(err))
		return "", err
	}

	req, err := http.NewRequest("POST", paypalBaseURL+"/v2/checkout/orders", bytes.NewReader(body))
	if err != nil {
		s.logger.Error("Failed to create PayPal order request", zap.Error(err))
		return "", err
	}

	req.Header.Set("Authorization", "Bearer "+accessToken)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("PayPal-Request-Id", fmt.Sprintf("deal-%s-%d", dealID, time.Now().UnixNano()))

	resp, err := s.httpClient.Do(req)
	if err != nil {
		s.logger.Error("Failed to create PayPal order", zap.Error(err))
		return "", err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		s.logger.Error("Failed to read PayPal order response", zap.Error(err))
		return "", err
	}

	if resp.StatusCode != http.StatusCreated && resp.StatusCode != http.StatusOK {
		s.logger.Error("PayPal order creation failed",
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
		s.logger.Error("Failed to parse PayPal order response", zap.Error(err))
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
		s.logger.Error("No approval URL in PayPal order response", zap.String("response", string(respBody)))
		return "", fmt.Errorf("no approval URL in PayPal order response")
	}

	s.logger.Info("PayPal order created", zap.String("orderID", orderResponse.ID), zap.String("approvalURL", approvalURL))
	return approvalURL, nil
}

func (s *BookingService) CreateDeal(ctx context.Context, lead *domain.DealZoho) error {
	_, err := s.zohoRepository.CreateDeal(ctx, lead)
	if err != nil {
		s.logger.Error("Failed to create lead in Zoho", zap.Error(err), zap.Any("lead", lead))
		return err
	}

	s.logger.Info("Created deal in Zoho")

	return nil
}

func (s *BookingService) CreateContact(ctx context.Context, contact *domain.ContactZoho) error {
	err := s.zohoRepository.CreateContact(ctx, contact)
	if err != nil {
		s.logger.Error("Failed to create contact in Zoho", zap.Error(err), zap.Any("contact", contact))
		return err
	}

	s.logger.Info("Created contact in Zoho")

	return nil
}

func (s *BookingService) GetContactByEmail(ctx context.Context, email string) (*repository.ContactSearchResponse, error) {
	resp, err := s.zohoRepository.GetContactByEmail(ctx, email)
	if err != nil {
		s.logger.Error("Failed to search contact by email in Zoho", zap.Error(err), zap.String("email", email))
		return nil, err
	}

	return resp, nil
}

func (s *BookingService) HandleDepositSucceededWebhook(ctx context.Context, body []byte, headers map[string]string) error {
	paypalBaseURL := s.getPayPalAPIBase()

	verifyPayload := map[string]interface{}{
		"auth_algo":         headers["Paypal-Auth-Algo"],
		"cert_url":          headers["Paypal-Cert-Url"],
		"transmission_id":   headers["Paypal-Transmission-Id"],
		"transmission_sig":  headers["Paypal-Transmission-Sig"],
		"transmission_time": headers["Paypal-Transmission-Time"],
		"webhook_id":        s.config.PayPalConfig.WebhookID,
		"webhook_event":     json.RawMessage(body),
	}

	verifyBody, err := json.Marshal(verifyPayload)
	if err != nil {
		s.logger.Error("Failed to marshal webhook verification payload", zap.Error(err))
		return err
	}

	req, err := http.NewRequest("POST", paypalBaseURL+"/v1/notifications/verify-webhook-signature", bytes.NewReader(verifyBody))
	if err != nil {
		s.logger.Error("Failed to create webhook verification request", zap.Error(err))
		return err
	}

	accessToken, err := s.getPayPalAccessToken()
	if err != nil {
		s.logger.Error("Failed to get PayPal access token for webhook verification", zap.Error(err))
		return err
	}

	req.Header.Set("Authorization", "Bearer "+accessToken)
	req.Header.Set("Content-Type", "application/json")

	resp, err := s.httpClient.Do(req)
	if err != nil {
		s.logger.Error("Failed to verify PayPal webhook signature", zap.Error(err))
		return err
	}
	defer resp.Body.Close()

	respBody, err := io.ReadAll(resp.Body)
	if err != nil {
		s.logger.Error("Failed to read webhook verification response", zap.Error(err))
		return err
	}

	var verificationResponse struct {
		VerificationStatus string `json:"verification_status"`
	}

	if err := json.Unmarshal(respBody, &verificationResponse); err != nil {
		s.logger.Error("Failed to parse webhook verification response", zap.Error(err))
		return err
	}

	if verificationResponse.VerificationStatus != "SUCCESS" {
		s.logger.Error("PayPal webhook verification failed", zap.String("status", verificationResponse.VerificationStatus))
		return fmt.Errorf("paypal webhook verification failed: %s", verificationResponse.VerificationStatus)
	}

	var event struct {
		EventType string `json:"event_type"`
		Resource  struct {
			CustomID string `json:"custom_id"`
		} `json:"resource"`
	}

	if err := json.Unmarshal(body, &event); err != nil {
		s.logger.Error("Failed to parse PayPal webhook event", zap.Error(err))
		return err
	}

	switch event.EventType {
	case "PAYMENT.CAPTURE.COMPLETED":
		if event.Resource.CustomID == "" {
			s.logger.Error("No custom_id found in PayPal webhook resource")
			return fmt.Errorf("no custom_id in webhook resource")
		}

		dealID := event.Resource.CustomID

		err = s.zohoRepository.UpdateDealStage(ctx, dealID, "Deposit Paid")
		if err != nil {
			s.logger.Error("Failed to update deal stage in Zoho", zap.Error(err), zap.String("dealID", dealID))
			return err
		}

		s.logger.Info("Successfully updated deal stage to Deposit Paid", zap.String("dealID", dealID))
		return nil

	default:
		s.logger.Info("Unhandled PayPal webhook event type", zap.String("type", event.EventType))
		return nil
	}
}

func (s *BookingService) getPayPalAPIBase() string {
	if s.config.PayPalConfig.Sandbox {
		return "https://api-m.sandbox.paypal.com"
	}
	return "https://api-m.paypal.com"
}

func (s *BookingService) getPayPalAccessToken() (string, error) {
	paypalBaseURL := s.getPayPalAPIBase()
	payload := "grant_type=client_credentials"

	req, err := http.NewRequest("POST", paypalBaseURL+"/v1/oauth2/token", bytes.NewReader([]byte(payload)))
	if err != nil {
		return "", err
	}

	req.SetBasicAuth(s.config.PayPalConfig.ClientID, s.config.PayPalConfig.ClientSecret)
	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
	req.Header.Set("Accept", "application/json")

	resp, err := s.httpClient.Do(req)
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
