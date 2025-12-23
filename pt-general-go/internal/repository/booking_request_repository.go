package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

type BookingRequestRepository struct {
	db db.Querier
}

func NewBookingRequestRepository(db db.Querier) *BookingRequestRepository {
	return &BookingRequestRepository{db}
}

func (r *BookingRequestRepository) CreateBookingRequest(ctx context.Context, bookingRequest *domain.BookingRequest) (*domain.BookingRequest, error) {
	dbBookingRequest, err := r.db.CreateBookingRequest(ctx, db.CreateBookingRequestParams{
		Name:  bookingRequest.Name,
		Phone: bookingRequest.Phone,
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	return &domain.BookingRequest{
		Name:  dbBookingRequest.Name,
		Phone: dbBookingRequest.Phone,
	}, nil
}
