package repository

import (
	"context"
	"os"
	"pt-general-go/internal/config"
	db "pt-general-go/internal/db/sqlc"

	"github.com/jackc/pgx/v5/pgxpool"
)

type ResetRepository struct {
	db   db.Querier
	pool *pgxpool.Pool
	cfg  *config.Config
}

func NewResetRepository(db db.Querier, pool *pgxpool.Pool, cfg *config.Config) *ResetRepository {
	return &ResetRepository{db, pool, cfg}
}

func (r *ResetRepository) ResetSchema(ctx context.Context) error {
	migration, err := os.ReadFile(r.cfg.DBSchemaPath)
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

func (r *ResetRepository) PopulateDB(ctx context.Context) error {
	testData, err := os.ReadFile(r.cfg.TestDataPath)
	if err != nil {
		return err
	}
	_, err = r.pool.Exec(ctx, string(testData))
	if err != nil {
		return err
	}
	return nil
}
