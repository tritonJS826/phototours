package service

import (
	"context"
	"pt-general-go/internal/repository"
)

type DevService struct {
	resetRepository *repository.ResetRepository
}

func NewResetService(resetRepository *repository.ResetRepository) *DevService {
	return &DevService{
		resetRepository: resetRepository,
	}
}

func (s *DevService) ResetSchema(ctx context.Context) error {
	return s.resetRepository.ResetSchema(ctx)
}
