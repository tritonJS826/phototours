package dto

type CreateBookingResponse struct {
	// RedirectURL string `json:"redirect_url" example:"https://stripe.com"`
	RedirectUrl string `json:"redirectUrl" example:"https://stripe.com"`
}
