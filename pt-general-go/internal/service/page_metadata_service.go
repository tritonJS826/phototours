package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"
)

type PageMetadataService struct {
	pageMetadataRepository *repository.PageMetadataRepository
}

func NewPageMetadataService(pageMetadataRepository *repository.PageMetadataRepository) *PageMetadataService {
	return &PageMetadataService{pageMetadataRepository}
}

func (r *PageMetadataService) CreatePageMetadata(ctx context.Context, pageMetadata *domain.PageMetadata) (*domain.PageMetadata, error) {
	return r.pageMetadataRepository.CreatePageMetadata(ctx, pageMetadata)
}

func (r *PageMetadataService) GetPageMetadata(ctx context.Context, url string) (*domain.PageMetadata, error) {
	return r.pageMetadataRepository.GetPageMetadata(ctx, url)
}

func (r *PageMetadataService) UpdatePageMetadata(ctx context.Context, update *domain.UpdatePageMetadata) (*domain.PageMetadata, error) {
	if err := update.Validate(); err != nil {
		return nil, err
	}
	return r.pageMetadataRepository.UpdatePageMetadata(ctx, update)
}

func (r *PageMetadataService) DeletePageMetadata(ctx context.Context, url string) error {
	return r.pageMetadataRepository.DeletePageMetadata(ctx, url)
}
