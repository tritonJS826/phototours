package service

import (
	"context"
	"fmt"
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
	providers                map[string]PaymentProvider
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
		providers:                make(map[string]PaymentProvider),
	}
}

func (s *BookingService) RegisterProvider(name string, provider PaymentProvider) {
	s.providers[name] = provider
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
	// 0.5$ is a test price
	totalAmount := 0.1 * float64(bookingRequest.Travelers)

	provider, ok := s.providers[string(bookingRequest.Provider)]
	if !ok {
		s.logger.Error("Unknown payment provider", zap.String("provider", string(bookingRequest.Provider)))
		return "", fmt.Errorf("unknown payment provider: %s", bookingRequest.Provider)
	}

	approvalURL, err := provider.CreateOrder(ctx, dealID, totalAmount, tourTitle, bookingRequest.Name)
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

func (s *BookingService) HandleDepositSucceededWebhook(ctx context.Context, body []byte, headers map[string]string, provider string) error {
	prov, ok := s.providers[provider]
	if !ok {
		s.logger.Error("Unknown payment provider for webhook", zap.String("provider", provider))
		return fmt.Errorf("unknown payment provider: %s", provider)
	}

	dealID, err := prov.VerifyWebhook(ctx, body, headers)
	if err != nil {
		s.logger.Error("Webhook verification failed", zap.String("provider", provider), zap.Error(err))
		return err
	}

	if dealID == "" {
		s.logger.Info("Webhook verified but no action needed", zap.String("provider", provider))
		return nil
	}

	err = s.zohoRepository.UpdateDealStage(ctx, dealID, "Deposit Paid")
	if err != nil {
		s.logger.Error("Failed to update deal stage in Zoho", zap.Error(err), zap.String("dealID", dealID))
		return err
	}

	s.logger.Info("Successfully updated deal stage to Deposit Paid", zap.String("dealID", dealID), zap.String("provider", provider))
	return nil
}
