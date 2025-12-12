package domain

import "time"

type Role string

const (
	RoleAdmin  Role = "ADMIN"
	RoleClient Role = "CLIENT"
	RoleGuide  Role = "GUIDE"
)

func IsValidRole(r string) bool {
	switch Role(r) {
	case RoleAdmin, RoleClient, RoleGuide:
		return true
	default:
		return false
	}
}

type User struct {
	CreatedAt     time.Time `json:"createdAt"`
	UpdatedAt     time.Time `json:"updatedAt"`
	Phone         *string   `json:"phone,omitempty"`
	ProfilePicURL *string   `json:"profilePicUrl,omitempty"`
	Bio           *string   `json:"bio,omitempty"`
	FirstName     string    `json:"firstName"`
	LastName      string    `json:"lastName"`
	Email         string    `json:"email"`
	Password      string    `json:"-"`
	Role          Role      `json:"role"`
	ID            int32     `json:"id"`
}
