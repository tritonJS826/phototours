package domain

import (
	"fmt"
	"strings"
)

type PageMetadata struct {
	URL  string `json:"url"`
	Tags string `json:"tags"`
}

func (p *PageMetadata) Validate() error {
	if p.URL == "" {
		return fmt.Errorf("%w: url is required", ErrValidation)
	}
	if p.Tags == "" {
		return fmt.Errorf("%w: url is required", ErrValidation)
	}
	return nil
}

type UpdatePageMetadata struct {
	URL    string  `json:"url"`
	NewURL *string `json:"new_url"`
	Tags   *string `json:"tags"`
}

func (u *UpdatePageMetadata) Validate() error {
	if u.URL == "" {
		return fmt.Errorf("%w: url is required", ErrValidation)
	}

	if u.NewURL == nil && u.Tags == nil {
		return fmt.Errorf("%w: no fields to update", ErrValidation)
	}

	if u.NewURL != nil {
		if *u.NewURL == "" {
			return fmt.Errorf("%w: new_url cannot be empty", ErrValidation)
		}
		if u.URL == *u.NewURL {
			return fmt.Errorf("%w: new_url must differ from url", ErrValidation)
		}
	}

	if u.Tags != nil {
		if strings.TrimSpace(*u.Tags) == "" {
			return fmt.Errorf("%w: tags cannot be empty", ErrValidation)
		}
	}

	return nil
}
