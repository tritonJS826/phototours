package dto

import (
	"pt-general-go/internal/domain"
	"pt-general-go/pkg/utils"
	"time"
)

type UserDTO struct {
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

func MapToUserDTO(u *domain.User) UserDTO {
	return UserDTO{
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

func MapToUserDTOs(domainUsers []domain.User) []UserDTO {
	dtos := make([]UserDTO, 0, len(domainUsers))
	for _, dUser := range domainUsers {
		dtos = append(dtos, UserDTO{
			ID:            dUser.ID,
			FirstName:     dUser.FirstName,
			LastName:      dUser.LastName,
			Email:         dUser.Email,
			Phone:         utils.StringPtrToString(dUser.Phone),
			Role:          string(dUser.Role),
			ProfilePicURL: utils.StringPtrToString(dUser.ProfilePicURL),
			Bio:           utils.StringPtrToString(dUser.Bio),
			CreatedAt:     dUser.CreatedAt.Format(time.RFC3339),
		})
	}
	return dtos
}

type PublicProfileDTO struct {
	ID            int32  `json:"id"`
	FirstName     string `json:"firstName"`
	LastName      string `json:"lastName"`
	ProfilePicURL string `json:"profilePicUrl"`
	Bio           string `json:"bio"`
}

func MapToPublicProfileDTO(dUser *domain.User) PublicProfileDTO {
	return PublicProfileDTO{
		ID:            dUser.ID,
		FirstName:     dUser.FirstName,
		LastName:      dUser.LastName,
		ProfilePicURL: utils.StringPtrToString(dUser.ProfilePicURL),
		Bio:           utils.StringPtrToString(dUser.Bio),
	}
}
