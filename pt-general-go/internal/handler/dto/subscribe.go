package dto

type SubscribeRequest struct {
	Email           string `json:"email" validate:"required,email" example:"user@example.com"`
	Language        string `json:"language,omitempty"`
	Timezone        string `json:"timezone,omitempty"`
	City            string `json:"city,omitempty"`
	Country         string `json:"country,omitempty"`
	LastContactPage string `json:"lastContactPage,omitempty"`
}

type SubscribeResponse struct {
	Message string `json:"message" example:"Successfully subscribed to newsletter"`
}
