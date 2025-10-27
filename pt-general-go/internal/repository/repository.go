package repository

import (
	"pt-general-go/internal/config"
	db "pt-general-go/internal/db/sqlc"

	"github.com/cloudinary/cloudinary-go/v2"
	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	UserRepository   *UserRepository
	UploadRepository *UploadRepository
	ResetRepository  *ResetRepository
}

func NewRepository(cfg *config.Config, db db.Querier, pool *pgxpool.Pool, cld *cloudinary.Cloudinary) *Repository {
	return &Repository{
		UserRepository:   NewUserRepository(db),
		UploadRepository: NewUploadRepository(cld, cfg.CloudinaryConfig.UploadFolder),
		ResetRepository:  NewResetRepository(db, pool),
	}
}
