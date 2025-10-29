package domain

import "errors"

var (
	ErrInternal      = errors.New("internal server error")
	ErrAlreadyExists = errors.New("entity already exists")
	ErrNotFound      = errors.New("entity not found")

	ErrUnauthorized  = errors.New("unauthorized")
	ErrInvalidClaims = errors.New("invalid user claims")
)

// Authentication errors
var (
	ErrInvalidCredentials = errors.New("invalid credentials")
	ErrInvalidPassword    = errors.New("invalid password")
	ErrWeakPassword       = errors.New("password is too weak")
)

// Validation errors
var (
	ErrInvalidEmail  = errors.New("invalid email format")
	ErrInvalidPhone  = errors.New("invalid phone format")
	ErrFieldTooLong  = errors.New("field exceeds maximum length")
	ErrFieldRequired = errors.New("required field is missing")
	ErrInvalidInput  = errors.New("invalid input data")
)
