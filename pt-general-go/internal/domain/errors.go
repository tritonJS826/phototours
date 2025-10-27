package domain

import "errors"

// Authentication errors
var (
	ErrUserAlreadyExists  = errors.New("user already exists")
	ErrUserNotFound       = errors.New("user not found")
	ErrInvalidCredentials = errors.New("invalid credentials")
	ErrInvalidPassword    = errors.New("invalid password")
	ErrWeakPassword       = errors.New("password is too weak")
)

// Token errors
var (
	ErrTokenGeneration = errors.New("failed to generate token")
	ErrTokenInvalid    = errors.New("invalid token")
	ErrTokenExpired    = errors.New("token has expired")
)

// Upload errors
var (
	ErrFileUpload      = errors.New("failed to upload file")
	ErrFileInvalid     = errors.New("invalid file")
	ErrFileTooLarge    = errors.New("file is too large")
	ErrFileTypeInvalid = errors.New("invalid file type")
)

// Validation errors
var (
	ErrInvalidEmail  = errors.New("invalid email format")
	ErrInvalidPhone  = errors.New("invalid phone format")
	ErrFieldTooLong  = errors.New("field exceeds maximum length")
	ErrFieldRequired = errors.New("required field is missing")
	ErrInvalidInput  = errors.New("invalid input data")
)

// Database/Internal errors
var (
	ErrInternal         = errors.New("internal server error")
	ErrDatabaseQuery    = errors.New("database query failed")
	ErrDatabaseNotFound = errors.New("record not found")
	ErrDatabaseConflict = errors.New("database conflict")
)

// Helper functions for error checking
func IsNotFoundError(err error) bool {
	return errors.Is(err, ErrUserNotFound) ||
		errors.Is(err, ErrDatabaseNotFound)
}

func IsAuthenticationError(err error) bool {
	return errors.Is(err, ErrInvalidCredentials) ||
		errors.Is(err, ErrInvalidPassword) ||
		errors.Is(err, ErrUserNotFound)
}

func IsValidationError(err error) bool {
	return errors.Is(err, ErrInvalidEmail) ||
		errors.Is(err, ErrInvalidPhone) ||
		errors.Is(err, ErrFieldTooLong) ||
		errors.Is(err, ErrFieldRequired) ||
		errors.Is(err, ErrInvalidInput)
}
