package dto

type CreateBookingResponse struct {
	RedirectUrl string `json:"redirectUrl" example:"https://stripe.com"`
}

type CreateBookingRequest struct {
	TourID          int    `json:"tourId" validate:"required"`
	Name            string `json:"name" validate:"required"`
	Email           string `json:"email" validate:"required,email"`
	Phone           string `json:"phone" validate:"required"`
	TravelDate      string `json:"travelDate"`
	Travelers       int    `json:"travelers"`
	Rooms           int    `json:"rooms"`
	Language        string `json:"language,omitempty"`
	Timezone        string `json:"timezone,omitempty"`
	City            string `json:"city,omitempty"`
	Country         string `json:"country,omitempty"`
	LastContactPage string `json:"lastContactPage,omitempty"`
}
