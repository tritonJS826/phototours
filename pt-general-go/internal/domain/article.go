package domain

import "time"

type Article struct {
	PublishedAt time.Time
	Alt         *string
	Author      *string
	Slug        string
	Title       string
	Excerpt     string
	Content     string
	CoverURL    string
	ID          int32
	Featured    bool
}
