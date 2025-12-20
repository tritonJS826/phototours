package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type CategoryRepository struct {
	db db.Querier
}

func NewCategoryRepository(db db.Querier) *CategoryRepository {
	return &CategoryRepository{db}
}

func (r *CategoryRepository) GetCategoriesByTourID(ctx context.Context, tourID int32) ([]domain.Category, error) {
	dbCategories, err := r.db.GetCategoriesByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainCategories(dbCategories), nil
}

func (r *CategoryRepository) GetCategoriesByTourIDs(ctx context.Context, tourIDs []int32) (map[int32][]domain.Category, error) {
	dbCategories, err := r.db.GetCategoriesByTourIDs(ctx, tourIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainCategoriesByTourIDs(dbCategories), nil
}
