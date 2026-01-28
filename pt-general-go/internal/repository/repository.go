package repository

import (
	"errors"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"

	db "pt-general-go/internal/db/sqlc"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/jackc/pgerrcode"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	ArticleRepository        *ArticleRepository
	BookingRequestRepository *BookingRequestRepository
	CategoryRepository       *CategoryRepository
	GuideRepository          *GuideRepository
	PageMetadataRepository   *PageMetadataRepository
	PhotoRepository          *PhotoRepository
	ResetRepository          *ResetRepository
	ReviewRepository         *ReviewRepository
	TagRepository            *TagRepository
	TourRepository           *TourRepository
	TourActivityRepository   *TourActivityRepository
	TourDateRepository       *TourDateRepository
	TourIncludedRepository   *TourIncludedRepository
	TourMaterialRepository   *TourMaterialRepository
	TourSummaryRepository    *TourSummaryRepository
	UploadRepository         *UploadRepository
	UserRepository           *UserRepository
	VideoRepository          *VideoRepository
	ZohoRepository           *ZohoRepository
}

func NewRepository(cfg *config.Config, dbPool *pgxpool.Pool, cld *cloudinary.Cloudinary) *Repository {
	queries := db.New(dbPool)
	return &Repository{
		ArticleRepository:        NewArticleRepository(queries),
		BookingRequestRepository: NewBookingRequestRepository(queries),
		CategoryRepository:       NewCategoryRepository(queries),
		GuideRepository:          NewGuideRepository(queries),
		PageMetadataRepository:   NewPageMetadataRepository(queries),
		PhotoRepository:          NewPhotoRepository(queries),
		ResetRepository:          NewResetRepository(queries, dbPool, cfg),
		ReviewRepository:         NewReviewRepository(queries),
		TagRepository:            NewTagRepository(queries),
		TourRepository:           NewTourRepository(queries),
		TourActivityRepository:   NewTourActivityRepository(queries),
		TourDateRepository:       NewTourDateRepository(queries),
		TourIncludedRepository:   NewTourIncludedRepository(queries),
		TourMaterialRepository:   NewTourMaterialRepository(queries),
		TourSummaryRepository:    NewTourSummaryRepository(queries),
		UserRepository:           NewUserRepository(queries),
		UploadRepository:         NewUploadRepository(cld, cfg.CloudinaryConfig.UploadFolder),
		VideoRepository:          NewVideoRepository(queries),
		ZohoRepository:           NewZohoRepository(&cfg.ZohoConfig),
	}
}

func handleDBError(err error) error {
	if errors.Is(err, pgx.ErrNoRows) {
		return domain.ErrNotFound
	}
	var pgErr *pgconn.PgError
	if errors.As(err, &pgErr) {
		if pgErr.Code == pgerrcode.UniqueViolation {
			return domain.ErrAlreadyExists
		}
	}
	return err
}
