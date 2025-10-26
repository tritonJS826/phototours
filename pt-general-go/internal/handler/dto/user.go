package dto

import (
	"errors"
	"pt-general-go/internal/domain"
	"pt-general-go/pkg/utils"
	"time"
)

type ChangePasswordDTO struct {
	ID              int32
	CurrentPassword string `json:"currentPassword" binding:"required"`
	NewPassword     string `json:"newPassword" binding:"required,min=6"`
}

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

type UpdateProfileDTO struct {
	ID           int32
	FirstName    *string `json:"firstName"`
	LastName     *string `json:"lastName"`
	Phone        *string `json:"phone"`
	Bio          *string `json:"bio"`
	UploadedPath *string
}

func (d *UpdateProfileDTO) Validate() error {
	if d.FirstName == nil &&
		d.LastName == nil &&
		d.Phone == nil &&
		d.Bio == nil &&
		d.UploadedPath == nil {
		return errors.New("no fields to update")
	}
	return nil
}
