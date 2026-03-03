package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
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

	id, err := dbBookingRequest.ID.Value()
	if err != nil {
		return nil, handleDBError(err)
	}

	uuidID, ok := id.(uuid.UUID)
	if !ok {
		return nil, handleDBError(err)
	}

	return &domain.BookingRequest{
		ID:    uuidID,
		Name:  dbBookingRequest.Name,
		Phone: dbBookingRequest.Phone,
	}, nil
}
