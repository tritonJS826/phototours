package repository

import (
	"pt-general-go/internal/config"
	db "pt-general-go/internal/db/sqlc"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	UserRepository         *UserRepository
	UploadRepository       *UploadRepository
	ResetRepository        *ResetRepository
	PageMetadataRepository *PageMetadataRepository
}

func NewRepository(cfg *config.Config, dbPool *pgxpool.Pool, cld *cloudinary.Cloudinary) *Repository {
	queries := db.New(dbPool)
	return &Repository{
		UserRepository:         NewUserRepository(queries),
		UploadRepository:       NewUploadRepository(cld, cfg.CloudinaryConfig.UploadFolder),
		ResetRepository:        NewResetRepository(queries, dbPool),
		PageMetadataRepository: NewPageMetadataRepository(queries),
	}
}
