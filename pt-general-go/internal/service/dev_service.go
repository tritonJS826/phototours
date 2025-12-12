package service

import (
	"context"
	"pt-general-go/internal/repository"
)

type DevService struct {
	resetRepository *repository.ResetRepository
}

func NewDevService(resetRepository *repository.ResetRepository) *DevService {
	return &DevService{
		resetRepository: resetRepository,
	}
}

func (s *DevService) ResetSchema(ctx context.Context) error {
	err := s.resetRepository.ResetSchema(ctx)
	if err != nil {
		return err
	}
	return s.resetRepository.PopulateDB(ctx)
}
