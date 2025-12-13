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
	TourService         *TourService
	UserService         *UserService
}

func NewService(repo *repository.Repository, cfg *config.Config, logger *zap.Logger) *Service {
	return &Service{
		ArticleService:      NewArticleService(repo.ArticleRepository, logger),
		AuthService:         NewAuthService(repo.UserRepository, repo.UploadRepository, cfg, logger),
		DevService:          NewDevService(repo.ResetRepository),
		PageMetadataService: NewPageMetadataService(repo.PageMetadataRepository),
		TourService: NewTourService(
			repo.CategoryRepository,
			repo.GuideRepository,
			repo.PhotoRepository,
			repo.TagRepository,
			repo.TourRepository,
			repo.TourDateRepository,
			repo.TourMaterialRepository,
			repo.VideoRepository,
			logger,
		),
		UserService: NewUserService(repo.UserRepository, logger),
	}
}
