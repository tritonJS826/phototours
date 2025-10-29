package domain

import (
	"errors"
	"mime/multipart"
	"regexp"
	"strings"
)

var emailRegex = regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)

type Register struct {
	FirstName string  `json:"firstName" binding:"required"`
	LastName  string  `json:"lastName" binding:"required"`
	Email     string  `json:"email" binding:"required,email"`
	Password  string  `json:"password" binding:"required,min=6"`
	Phone     *string `json:"phone"`
}

func (r *Register) Validate() error {
	if strings.TrimSpace(r.Email) == "" {
		return ErrFieldRequired
	}
	if !emailRegex.MatchString(r.Email) {
		return ErrInvalidEmail
	}

	if len(r.Password) < 8 {
		return ErrWeakPassword
	}
	if len(r.Password) > 128 {
		return ErrFieldTooLong
	}

	if strings.TrimSpace(r.FirstName) == "" {
		return ErrFieldRequired
	}
	if len(r.FirstName) > 50 {
		return ErrFieldTooLong
	}

	if strings.TrimSpace(r.LastName) == "" {
		return ErrFieldRequired
	}
	if len(r.LastName) > 50 {
		return ErrFieldTooLong
	}

	return nil
}

type AuthResult struct {
	User  *User
	Token string
}

type ChangePassword struct {
	ID              int32
	CurrentPassword string `json:"currentPassword" binding:"required"`
	NewPassword     string `json:"newPassword" binding:"required,min=6"`
}

type Login struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

func (l *Login) Validate() error {
	if strings.TrimSpace(l.Email) == "" {
		return ErrFieldRequired
	}
	if !emailRegex.MatchString(l.Email) {
		return ErrInvalidEmail
	}

	if strings.TrimSpace(l.Password) == "" {
		return ErrFieldRequired
	}

	return nil
}

type UpdateProfile struct {
	ID           int32
	FirstName    *string
	LastName     *string
	Phone        *string
	Bio          *string
	UploadedPath *string
}

type UpdateProfileInput struct {
	ID        int32
	FirstName *string
	LastName  *string
	Phone     *string
	Bio       *string
	File      *multipart.FileHeader
}

func (d *UpdateProfileInput) Validate() error {
	if d.FirstName == nil &&
		d.LastName == nil &&
		d.Phone == nil &&
		d.Bio == nil &&
		d.File == nil {
		return errors.New("no fields to update")
	}
	return nil
}
