package domain

import (
	"time"

	"github.com/google/uuid"
)

type ArticleBlock struct {
	Type    string `json:"type"`
	Content string `json:"content,omitempty"`
	Src     string `json:"src,omitempty"`
	Alt     string `json:"alt,omitempty"`
}

type Article struct {
	CreatedAt time.Time
	Alt       *string
	Author    *string
	Slug      string
	Title     string
	Excerpt   string
	Content   string
	CoverURL  string
	ID        uuid.UUID
	Featured  bool
	Blocks    []ArticleBlock
}
