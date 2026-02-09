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
	ReviewService       *ReviewService
	TourService         *TourService
	UserService         *UserService
}

func NewService(repo *repository.Repository, cfg *config.Config, logger *zap.Logger) *Service {
	return &Service{
		ArticleService:      NewArticleService(repo.ArticleRepository, logger),
		AuthService:         NewAuthService(repo.UserRepository, repo.UploadRepository, repo.ZohoRepository, cfg, logger),
		BookingService:      NewBookingService(repo.BookingRequestRepository, repo.TourRepository, repo.ZohoRepository, cfg, logger),
		DevService:          NewDevService(repo.ResetRepository),
		PageMetadataService: NewPageMetadataService(repo.PageMetadataRepository),
		ReviewService:       NewReviewService(repo.ReviewRepository, logger),
		TourService: NewTourService(
			repo.CategoryRepository,
			repo.GuideRepository,
			repo.PhotoRepository,
			repo.ReviewRepository,
			repo.TagRepository,
			repo.TourRepository,
			repo.TourActivityRepository,
			repo.TourDateRepository,
			repo.TourIncludedRepository,
			repo.TourMaterialRepository,
			repo.TourSummaryRepository,
			repo.VideoRepository,
			logger,
		),
		UserService: NewUserService(repo.UserRepository, logger),
	}
}
