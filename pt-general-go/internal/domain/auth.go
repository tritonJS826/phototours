package domain

import (
	"fmt"
	"mime/multipart"
	"regexp"
	"strings"
)

const MinimalPasswordLength = 6

var emailRegex = regexp.MustCompile(`^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$`)

type Register struct {
	Phone     *string `json:"phone"`
	FirstName string  `json:"firstName" binding:"required,min=1"`
	LastName  string  `json:"lastName" binding:"required,min=1"`
	Email     string  `json:"email" binding:"required,email"`
	Password  string  `json:"password" binding:"required,min=6"`
}

func (r *Register) Validate() error {
	if strings.TrimSpace(r.Email) == "" {
		return fmt.Errorf("%w: email required", ErrValidation)
	}
	if !emailRegex.MatchString(r.Email) {
		return fmt.Errorf("%w: invalid email", ErrValidation)
	}

	if len(r.Password) < MinimalPasswordLength {
		return fmt.Errorf("%w: weak password", ErrValidation)
	}
	if len(r.Password) > 255 {
		return fmt.Errorf("%w: password too long", ErrValidation)
	}

	if strings.TrimSpace(r.FirstName) == "" {
		return fmt.Errorf("%w: first name required", ErrValidation)
	}
	if len(r.FirstName) > 50 {
		return fmt.Errorf("%w: first name too long", ErrValidation)
	}

	if strings.TrimSpace(r.LastName) == "" {
		return fmt.Errorf("%w: last name required", ErrValidation)
	}
	if len(r.LastName) > 50 {
		return fmt.Errorf("%w: last name too long", ErrValidation)
	}

	return nil
}

type AuthResult struct {
	User  *User
	Token string
}

type ChangePassword struct {
	CurrentPassword string
	NewPassword     string
	ID              int32
}

func (cp *ChangePassword) Validate() error {
	if strings.TrimSpace(cp.CurrentPassword) == "" {
		return fmt.Errorf("%w: current password required", ErrValidation)
	}
	if strings.TrimSpace(cp.NewPassword) == "" {
		return fmt.Errorf("%w: new password required", ErrValidation)
	}
	if cp.NewPassword == cp.CurrentPassword {
		return fmt.Errorf("%w: new password must differ from current", ErrValidation)
	}
	if len(cp.NewPassword) < MinimalPasswordLength {
		return fmt.Errorf("%w: new password too short", ErrValidation)
	}
	return nil
}

type Login struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

func (l *Login) Validate() error {
	if strings.TrimSpace(l.Email) == "" {
		return fmt.Errorf("%w: email required", ErrValidation)
	}
	if !emailRegex.MatchString(l.Email) {
		return fmt.Errorf("%w: invalid email", ErrValidation)
	}

	if strings.TrimSpace(l.Password) == "" {
		return fmt.Errorf("%w: password required", ErrValidation)
	}

	return nil
}

type UpdateProfile struct {
	FirstName    *string
	LastName     *string
	Phone        *string
	Bio          *string
	UploadedPath *string
	ID           int32
}

type UpdateProfileParams struct {
	FirstName *string
	LastName  *string
	Phone     *string
	Bio       *string
	File      *multipart.FileHeader
	ID        int32
}

func (d *UpdateProfileParams) Validate() error {
	if d.FirstName == nil &&
		d.LastName == nil &&
		d.Phone == nil &&
		d.Bio == nil &&
		d.File == nil {
		return fmt.Errorf("%w: no fields to update", ErrValidation)
	}
	return nil
}
