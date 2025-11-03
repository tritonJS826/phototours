package service

import (
	"pt-general-go/internal/config"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type Service struct {
	ArticleService      *ArticleService
	AuthService         *AuthService
	DevService          *DevService
	PageMetadataService *PageMetadataService
	UserService         *UserService
}

func NewService(repo *repository.Repository, cfg *config.Config, logger *zap.Logger) *Service {
	return &Service{
		ArticleService:      NewArticleService(repo.ArticleRepository, logger),
		AuthService:         NewAuthService(repo.UserRepository, repo.UploadRepository, cfg, logger),
		DevService:          NewDevService(repo.ResetRepository),
		PageMetadataService: NewPageMetadataService(repo.PageMetadataRepository),
		UserService:         NewUserService(repo.UserRepository, logger),
	}
}
