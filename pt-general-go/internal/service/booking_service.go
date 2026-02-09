package service

import (
	"context"
	"encoding/json"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	stripeWebhook "github.com/stripe/stripe-go/v76/webhook"
	"go.uber.org/zap"
)

type BookingService struct {
	bookingRequestRepository *repository.BookingRequestRepository
	tourRepository           *repository.TourRepository
	zohoRepository           *repository.ZohoRepository
	stripeConfig             *config.StripeConfig
	logger                   *zap.Logger
}

func NewBookingService(
	bookingRequestRepository *repository.BookingRequestRepository,
	tourRepository *repository.TourRepository,
	zohoRepository *repository.ZohoRepository,
	stripeConfig *config.StripeConfig,
	logger *zap.Logger,
) *BookingService {
	return &BookingService{
		bookingRequestRepository: bookingRequestRepository,
		tourRepository:           tourRepository,
		zohoRepository:           zohoRepository,
		stripeConfig:             stripeConfig,
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

	deal := &domain.DealZoho{
		DealName:             bookingRequest.Name,
		ClientEmail:          bookingRequest.Email,
		ClientPhone:          bookingRequest.Phone,
		TourDate:             bookingRequest.TravelDate,
		Travelers:            bookingRequest.Travelers,
		SingleRoomSupplement: float64(bookingRequest.Rooms),
		Amount:               *tour.Price,
		TourName:             tour.Title,
		Stage:                "In Progress",
		Pipeline:             "Photo Tours",
		AccountID:            "stub",
		ContactID:            "stub",
		LeadID:               "stub",
	}

	err = s.zohoRepository.CreateDeal(ctx, deal)
	if err != nil {
		s.logger.Error("Failed to create deal in Zoho", zap.Error(err), zap.Any("deal", deal))
	}

	go func() {
		result, err := s.zohoRepository.CreateBookingRequest(context.Background(), bookingRequest)
		if err != nil {
			s.logger.Error("Failed to create booking request in Zoho", zap.Error(err), zap.Any("bookingRequest", bookingRequest))
			return
		}
		s.logger.Debug("Created booking request in Zoho", zap.Any("result", *result))
	}()

	testStripeRedirectURL := "https://buy.stripe.com/cNidR86ir4mh3OVeYob3q08"

	return testStripeRedirectURL, nil
}

func (s *BookingService) CreateDeal(ctx context.Context, lead *domain.DealZoho) error {
	err := s.zohoRepository.CreateDeal(ctx, lead)
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

func (s *BookingService) HandleDepositSucceededWebhook(ctx context.Context, body []byte, signature string) error {
	// Verify Stripe webhook signature
	event, err := stripeWebhook.ConstructEvent(body, signature, s.stripeConfig.WebhookSecret)
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
