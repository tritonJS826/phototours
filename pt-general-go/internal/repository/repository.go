package repository

import (
	db "pt-general-go/internal/db/sqlc"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Repository struct {
	UserRepository  *UserRepository
	ResetRepository *ResetRepository
}

func NewRepository(db db.Querier, pool *pgxpool.Pool) *Repository {
	return &Repository{
		UserRepository:  NewUserRepository(db),
		ResetRepository: NewResetRepository(db, pool),
	}
}
