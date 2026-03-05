package service

import (
	"context"
	"encoding/json"
	"fmt"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	"github.com/stripe/stripe-go/v84"
	"github.com/stripe/stripe-go/v84/checkout/session"
	stripeWebhook "github.com/stripe/stripe-go/v84/webhook"
	"go.uber.org/zap"
)

type BookingService struct {
	bookingRequestRepository *repository.BookingRequestRepository
	tourRepository           *repository.TourRepository
	zohoRepository           *repository.ZohoRepository
	config                   *config.Config
	logger                   *zap.Logger
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
	}
}

func (s *BookingService) CreateBookingRequest(ctx context.Context, bookingRequest *domain.BookingRequest) (string, error) {
	savedBookingRequest, err := s.bookingRequestRepository.CreateBookingRequest(ctx, bookingRequest)
	if err != nil {
		s.logger.Error("Failed to save booking request to database", zap.Error(err), zap.Any("bookingRequest", bookingRequest))
		return "", err
	}

	s.logger.Info("Booking request saved to database", zap.Any("savedBookingRequest", savedBookingRequest))

	tour, err := s.tourRepository.GetTourByID(ctx, bookingRequest.TourID)
	if err != nil {
		s.logger.Error("Failed to get tour from database", zap.Error(err), zap.Any("tourId", bookingRequest.TourID))
	}

	// Check if contact exists, create if not
	var contactID string
	contactSearch, err := s.zohoRepository.GetContactByEmail(ctx, bookingRequest.Email)
	if err != nil {
		s.logger.Warn("Failed to search for existing contact", zap.Error(err))
	}

	if contactSearch != nil && len(contactSearch.Data) > 0 {
		contactID = contactSearch.Data[0].ID
		s.logger.Info("Found existing contact", zap.String("contactID", contactID))
	} else {
		// Create new contact
		contact := &domain.ContactZoho{
			Email:           bookingRequest.Email,
			LastName:        bookingRequest.Name,
			Phone:           bookingRequest.Phone,
			Language:        bookingRequest.Language,
			Timezone:        bookingRequest.Timezone,
			City:            bookingRequest.City,
			Country:         bookingRequest.Country,
			LastContactPage: bookingRequest.LastContactPage,
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

	deal := &domain.DealZoho{
		DealName:             bookingRequest.Name,
		ClientEmail:          bookingRequest.Email,
		ClientPhone:          bookingRequest.Phone,
		TravelDates:          bookingRequest.TravelDate,
		Travelers:            bookingRequest.Travelers,
		SingleRoomSupplement: bookingRequest.Rooms,
		Amount:               *tour.Price,
		TourName:             tour.Title,
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
	}

	dealResp, err := s.zohoRepository.CreateDeal(ctx, deal)
	if err != nil {
		s.logger.Error("Failed to create deal in Zoho", zap.Error(err), zap.Any("deal", deal))
		return "", err
	}

	// Extract deal ID from response
	var dealID string
	if len(dealResp.Data) > 0 && dealResp.Data[0].Details.ID != "" {
		dealID = dealResp.Data[0].Details.ID
	} else {
		s.logger.Error("No deal ID returned from Zoho")
		return "", fmt.Errorf("no deal ID returned from Zoho")
	}

	// Set Stripe API key
	stripe.Key = s.config.StripeConfig.SecretKey

	// Create Stripe checkout session with deal_id in metadata
	params := &stripe.CheckoutSessionParams{
		LineItems: []*stripe.CheckoutSessionLineItemParams{
			{
				// Price for Deposit for the photo tour
				Price:    stripe.String("price_1SpEugCEK28BRQMezxR9aJgn"),
				Quantity: stripe.Int64(1),
			},
		},

		Mode:       stripe.String(string(stripe.CheckoutSessionModePayment)),
		SuccessURL: stripe.String("https://tuscany-photo-tours.com/tours/thank-you"),
		CancelURL:  stripe.String("https://tuscany-photo-tours.com/tours"),
		Metadata: map[string]string{
			"zoho_deal_id": dealID,
		},
	}

	checkoutSession, err := session.New(params)
	if err != nil {
		s.logger.Error("Failed to create Stripe checkout session", zap.Error(err))
		return "", err
	}

	return checkoutSession.URL, nil
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

func (s *BookingService) HandleDepositSucceededWebhook(ctx context.Context, body []byte, signature string) error {
	// Verify Stripe webhook signature
	event, err := stripeWebhook.ConstructEvent(body, signature, s.config.StripeConfig.WebhookSecret)
	if err != nil {
		s.logger.Error("Failed to verify Stripe webhook signature", zap.Error(err))
		return err
	}

	// Handle the event
	switch event.Type {
	case "checkout.session.completed":
		var checkoutSession struct {
			ID       string `json:"id"`
			Metadata struct {
				ZohoDealID string `json:"zoho_deal_id"`
			} `json:"metadata"`
		}

		if err := json.Unmarshal(event.Data.Raw, &checkoutSession); err != nil {
			s.logger.Error("Failed to parse checkout session", zap.Error(err))
			return err
		}

		// Extract deal ID from metadata
		if checkoutSession.Metadata.ZohoDealID == "" {
			s.logger.Error("No Zoho deal ID found in checkout session metadata")
			return err
		}

		dealID := checkoutSession.Metadata.ZohoDealID

		// Update Zoho deal status from "In Progress" to "Deposit Paid"
		err = s.zohoRepository.UpdateDealStage(ctx, dealID, "Deposit Paid")
		if err != nil {
			s.logger.Error("Failed to update deal stage in Zoho", zap.Error(err), zap.String("dealID", dealID))
			return err
		}

		s.logger.Info("Successfully updated deal stage to Deposit Paid", zap.String("dealID", dealID))
		return nil

	default:
		s.logger.Info("Unhandled webhook event type", zap.String("type", string(event.Type)))
		return nil
	}
}
