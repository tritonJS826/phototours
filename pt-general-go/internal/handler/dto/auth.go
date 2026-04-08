package dto

import (
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

type AuthResponse struct {
	Token string  `json:"token"`
	User  UserDTO `json:"user"`
}

type ChangePasswordDTO struct {
	CurrentPassword string `json:"currentPassword" binding:"required"`
	NewPassword     string `json:"newPassword" binding:"required,min=6"`
}

func (dto *ChangePasswordDTO) ToDomain(userID uuid.UUID) *domain.ChangePassword {
	return &domain.ChangePassword{
		ID:              userID,
		CurrentPassword: dto.CurrentPassword,
		NewPassword:     dto.NewPassword,
	}
}

type CreateUserRequest struct {
	Email     string  `json:"email" binding:"required,email"`
	Password  string  `json:"password" binding:"required,min=6"`
	FirstName string  `json:"firstName" binding:"required"`
	LastName  string  `json:"lastName" binding:"required"`
	Phone     *string `json:"phone,omitempty"`
}

func (dto *CreateUserRequest) ToDomain() *domain.Register {
	return &domain.Register{
		Email:     dto.Email,
		Password:  dto.Password,
		FirstName: dto.FirstName,
		LastName:  dto.LastName,
		Phone:     dto.Phone,
	}
}
