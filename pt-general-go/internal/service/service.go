package service

import (
	"pt-general-go/internal/config"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type Service struct {
	ArticleService      *ArticleService
	AuthService         *AuthService
	BookingService      *BookingService
	DevService          *DevService
	PageMetadataService *PageMetadataService
	TourService         *TourService
	UserService         *UserService
}

func NewService(repo *repository.Repository, cfg *config.Config, logger *zap.Logger) *Service {
	return &Service{
		ArticleService:      NewArticleService(repo.ArticleRepository, logger),
		AuthService:         NewAuthService(repo.UserRepository, repo.UploadRepository, repo.ZohoRepository, cfg, logger),
		BookingService:      NewBookingService(repo.BookingRequestRepository, repo.ZohoRepository, logger),
		DevService:          NewDevService(repo.ResetRepository),
		PageMetadataService: NewPageMetadataService(repo.PageMetadataRepository),
		TourService: NewTourService(
			repo.CategoryRepository,
			repo.GuideRepository,
			repo.PhotoRepository,
			repo.ReviewRepository,
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
