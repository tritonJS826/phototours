package dto

import (
	"pt-general-go/internal/domain"
)

type AuthResponse struct {
	User  *SafeUser `json:"user"`
	Token string    `json:"token"`
}

type ChangePasswordDTO struct {
	CurrentPassword string `json:"currentPassword" binding:"required"`
	NewPassword     string `json:"newPassword" binding:"required,min=6"`
}

func (dto *ChangePasswordDTO) ToDomain(userID int32) *domain.ChangePassword {
	return &domain.ChangePassword{
		ID:              userID,
		CurrentPassword: dto.CurrentPassword,
		NewPassword:     dto.NewPassword,
	}
}
