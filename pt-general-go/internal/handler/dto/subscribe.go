package dto

type SubscribeRequest struct {
	Email string `json:"email" validate:"required,email" example:"user@example.com"`
}

type SubscribeResponse struct {
	Message string `json:"message" example:"Successfully subscribed to newsletter"`
}
