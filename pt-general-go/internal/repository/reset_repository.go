package repository

import (
	"context"
	"os"
	db "pt-general-go/internal/db/sqlc"

	"github.com/jackc/pgx/v5/pgxpool"
)

type ResetRepository struct {
	db   db.Querier
	pool *pgxpool.Pool
}

func NewResetRepository(db db.Querier, pool *pgxpool.Pool) *ResetRepository {
	return &ResetRepository{db, pool}
}

func (r *ResetRepository) ResetSchema(ctx context.Context) error {
	// TODO: move path to config
	migration, err := os.ReadFile("../internal/db/migration/000001_init_schema.up.sql")
	if err != nil {
		return err
	}

	err = r.db.ResetSchema(ctx)
	if err != nil {
		return err
	}

	// migrate schemas according to migrations file
	_, err = r.pool.Exec(ctx, string(migration))
	if err != nil {
		return err
	}

	r.pool.Reset()

	return nil
}
