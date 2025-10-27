package service

import (
	"pt-general-go/internal/config"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type Service struct {
	AuthService  *AuthService
	ResetService *DevService
}

func NewService(repo *repository.Repository, cfg *config.Config, logger *zap.Logger) *Service {
	return &Service{
		AuthService:  NewAuthService(repo.UserRepository, repo.UploadRepository, cfg, logger),
		ResetService: NewResetService(repo.ResetRepository),
	}
}
