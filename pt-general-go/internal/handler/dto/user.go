package dto

import (
	"pt-general-go/internal/domain"
	"pt-general-go/pkg/utils"
	"time"
)

type ChangePasswordDTO struct {
	CurrentPassword string `json:"currentPassword" binding:"required"`
	NewPassword     string `json:"newPassword" binding:"required,min=6"`
}

type UpdateProfileDTO struct {
	FirstName *string `json:"firstName"`
	LastName  *string `json:"lastName"`
	Phone     *string `json:"phone"`
	Bio       *string `json:"bio"`
}

// TODO:

type RegisterResponse struct {
	User  *SafeUser `json:"user"`
	Token string    `json:"token"`
}

type SafeUser struct {
	ID            int32  `json:"id"`
	FirstName     string `json:"firstName"`
	LastName      string `json:"lastName"`
	Email         string `json:"email"`
	Phone         string `json:"phone"`
	Role          string `json:"role"`
	ProfilePicURL string `json:"profilePicUrl"`
	Bio           string `json:"bio"`
	CreatedAt     string `json:"createdAt"`
}

func MapUserToSafeUser(u *domain.User) *SafeUser {
	return &SafeUser{
		ID:            u.ID,
		FirstName:     u.FirstName,
		LastName:      u.LastName,
		Email:         u.Email,
		Phone:         utils.StringPtrToString(u.Phone),
		Role:          string(u.Role),
		ProfilePicURL: utils.StringPtrToString(u.ProfilePicURL),
		Bio:           utils.StringPtrToString(u.Bio),
		CreatedAt:     u.CreatedAt.Format(time.RFC3339),
	}
}
