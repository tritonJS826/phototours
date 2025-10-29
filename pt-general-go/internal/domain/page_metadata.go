package domain

type PageMetadata struct {
	URL  string `json:"url"`
	Tags string `json:"tags"`
}

type UpdatePageMetadata struct {
	URL    string
	NewURL *string
	Tags   *string
}
