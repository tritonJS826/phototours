package dto

type ContactMeRequest struct {
	Name            string `json:"name" validate:"required" example:"John Doe"`
	Phone           string `json:"phone" validate:"required" example:"+1234567890"`
	Language        string `json:"language,omitempty"`
	Timezone        string `json:"timezone,omitempty"`
	City            string `json:"city,omitempty"`
	Country         string `json:"country,omitempty"`
	LastContactPage string `json:"lastContactPage,omitempty"`
}

type ContactMeResponse struct {
	Message string `json:"message" example:"Contact request submitted successfully"`
}
