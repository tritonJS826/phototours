package storage

import (
	"context"
	"fmt"
	"pt-general-go/internal/config"

	"github.com/cloudinary/cloudinary-go/v2"
)

func NewCloudinaryClient(cfg *config.CloudinaryConfig) (*cloudinary.Cloudinary, error) {
	cld, err := cloudinary.NewFromParams(cfg.CloudName, cfg.APIKey, cfg.APISecret)
	if err != nil {
		return nil, fmt.Errorf("failed to initialize Cloudinary: %w", err)
	}

	ctx := context.Background()
	if _, err := cld.Admin.Ping(ctx); err != nil {
		return nil, fmt.Errorf("cloudinary ping failed: %w", err)
	}

	return cld, nil
}
