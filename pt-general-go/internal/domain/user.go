package domain

import "time"

type Role string

const (
	RoleAdmin  Role = "ADMIN"
	RoleClient Role = "CLIENT"
)

func IsValidRole(r string) bool {
	switch Role(r) {
	case RoleAdmin, RoleClient:
		return true
	default:
		return false
	}
}

type User struct {
	ID            int32     `json:"id"`
	FirstName     string    `json:"firstName"`
	LastName      string    `json:"lastName"`
	Email         string    `json:"email"`
	Password      string    `json:"-"`
	Role          Role      `json:"role"`
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
	Phone         *string   `json:"phone,omitempty"`
	ProfilePicURL *string   `json:"profilePicUrl,omitempty"`
	Bio           *string   `json:"bio,omitempty"`
}
