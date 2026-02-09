package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type BookingService struct {
	bookingRequestRepository *repository.BookingRequestRepository
	zohoRepository           *repository.ZohoRepository
	logger                   *zap.Logger
}

func NewBookingService(
	bookingRequestRepository *repository.BookingRequestRepository,
	zohoRepository *repository.ZohoRepository,
	logger *zap.Logger,
) *BookingService {
	return &BookingService{
		bookingRequestRepository: bookingRequestRepository,
		zohoRepository:           zohoRepository,
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
