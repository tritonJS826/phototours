package domain

import (
	"encoding/json"
	"errors"

	"github.com/google/uuid"
)

// ParseUUID parses a string into a UUID
func ParseUUID(id string) (uuid.UUID, error) {
	return uuid.Parse(id)
}

// ErrInvalidID is returned when an ID is invalid
var ErrInvalidID = errors.New("invalid ID")

// NullStringPtr returns a pointer to a string if it's not empty, otherwise nil
func NullStringPtr(s string) *string {
	if s != "" {
		return &s
	}
	return nil
}

// JSONB converts a slice to a JSONB byte array for database storage
func JSONB(v interface{}) []byte {
	data, err := json.Marshal(v)
	if err != nil {
		return []byte("[]")
	}
	return data
}
