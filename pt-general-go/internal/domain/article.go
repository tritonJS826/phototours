package domain

import (
	"time"

	"github.com/google/uuid"
)

type Article struct {
	PublishedAt time.Time
	Alt         *string
	Author      *string
	Slug        string
	Title       string
	Excerpt     string
	Content     string
	CoverURL    string
	ID          uuid.UUID
	Featured    bool
}
