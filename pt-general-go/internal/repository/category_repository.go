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
