package domain

import "time"

type Article struct {
	ID          int32
	Slug        string
	Title       string
	Excerpt     string
	Content     string
	CoverURL    string
	Alt         string
	Author      string
	Featured    bool
	PublishedAt time.Time
}
