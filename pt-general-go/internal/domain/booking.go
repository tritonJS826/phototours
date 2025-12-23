package domain

import (
	"time"

	"github.com/google/uuid"
)

type BookingStatus string

const (
	BookingStatusPending   BookingStatus = "PENDING"
	BookingStatusConfirmed BookingStatus = "CONFIRMED"
	BookingStatusCancelled BookingStatus = "CANCELLED"
)

type Booking struct {
	CreatedAt    time.Time     `json:"createdAt"`
	UpdatedAt    time.Time     `json:"updatedAt"`
	Status       BookingStatus `json:"status"`
	TotalPrice   float64       `json:"totalPrice"`
	ID           uuid.UUID     `json:"id"`
	TourID       uuid.UUID     `json:"tourId"`
	UserID       uuid.UUID     `json:"userId"`
	Participants int32         `json:"participants"`
}

type BookingRequest struct {
	Name  string `json:"name" binding:"required,min=1"`
	Phone string `json:"phone" binding:"required,min=1"`
}
