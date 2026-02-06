package dto

type ContactMeRequest struct {
	Name  string `json:"name" validate:"required" example:"John Doe"`
	Phone string `json:"phone" validate:"required" example:"+1234567890"`
}

type ContactMeResponse struct {
	Message string `json:"message" example:"Contact request submitted successfully"`
}
