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
	ArticleRepository      *ArticleRepository
	CategoryRepository     *CategoryRepository
	GuideRepository        *GuideRepository
	PageMetadataRepository *PageMetadataRepository
	PhotoRepository        *PhotoRepository
	ResetRepository        *ResetRepository
	TagRepository          *TagRepository
	TourRepository         *TourRepository
	TourDateRepository     *TourDateRepository
	TourMaterialRepository *TourMaterialRepository
	UploadRepository       *UploadRepository
	UserRepository         *UserRepository
	VideoRepository        *VideoRepository
}

func NewRepository(cfg *config.Config, dbPool *pgxpool.Pool, cld *cloudinary.Cloudinary) *Repository {
	queries := db.New(dbPool)
	return &Repository{
		ArticleRepository:      NewArticleRepository(queries),
		CategoryRepository:     NewCategoryRepository(queries),
		GuideRepository:        NewGuideRepository(queries),
		PageMetadataRepository: NewPageMetadataRepository(queries),
		PhotoRepository:        NewPhotoRepository(queries),
		ResetRepository:        NewResetRepository(queries, dbPool, cfg),
		TagRepository:          NewTagRepository(queries),
		TourRepository:         NewTourRepository(queries),
		TourDateRepository:     NewTourDateRepository(queries),
		TourMaterialRepository: NewTourMaterialRepository(queries),
		UserRepository:         NewUserRepository(queries),
		UploadRepository:       NewUploadRepository(cld, cfg.CloudinaryConfig.UploadFolder),
		VideoRepository:        NewVideoRepository(queries),
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
