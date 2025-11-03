package repository

import (
	"errors"

	"pt-general-go/internal/config"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/jackc/pgerrcode"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	ArticleRepository      *ArticleRepository
	UserRepository         *UserRepository
	UploadRepository       *UploadRepository
	ResetRepository        *ResetRepository
	PageMetadataRepository *PageMetadataRepository
}

func NewRepository(cfg *config.Config, dbPool *pgxpool.Pool, cld *cloudinary.Cloudinary) *Repository {
	queries := db.New(dbPool)
	return &Repository{
		ArticleRepository:      NewArticleRepository(queries),
		UserRepository:         NewUserRepository(queries),
		UploadRepository:       NewUploadRepository(cld, cfg.CloudinaryConfig.UploadFolder),
		ResetRepository:        NewResetRepository(queries, dbPool),
		PageMetadataRepository: NewPageMetadataRepository(queries),
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
