package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type CategoryRepository struct {
	db db.Querier
}

func NewCategoryRepository(db db.Querier) *CategoryRepository {
	return &CategoryRepository{db}
}

func (r *CategoryRepository) GetCategoriesByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Category, error) {
	dbCategories, err := r.db.GetCategoriesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainCategories(dbCategories), nil
}

func (r *CategoryRepository) GetCategoriesByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.Category, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbCategories, err := r.db.GetCategoriesByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainCategoriesByTourIDs(dbCategories), nil
}
