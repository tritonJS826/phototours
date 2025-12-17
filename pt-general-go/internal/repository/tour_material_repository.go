package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type TourMaterialRepository struct {
	db db.Querier
}

func NewTourMaterialRepository(db db.Querier) *TourMaterialRepository {
	return &TourMaterialRepository{db}
}

func (r *TourMaterialRepository) GetTourMaterialsByTourID(ctx context.Context, tourID int32) ([]domain.TourMaterial, error) {
	dbTourMaterials, err := r.db.GetTourMaterialsByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourMaterials(dbTourMaterials), nil
}

func (r *TourMaterialRepository) GetTourMaterialsByTourIDs(ctx context.Context, tourIDs []int32) (map[int32][]domain.TourMaterial, error) {
	dbTourMaterials, err := r.db.GetTourMaterialsByTourIDs(ctx, tourIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourMaterialsByTourIDs(dbTourMaterials), nil
}
