package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TourMaterialRepository struct {
	db db.Querier
}

func NewTourMaterialRepository(db db.Querier) *TourMaterialRepository {
	return &TourMaterialRepository{db}
}

func (r *TourMaterialRepository) GetTourMaterialsByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.TourMaterial, error) {
	dbTourMaterials, err := r.db.GetTourMaterialsByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourMaterials(dbTourMaterials), nil
}

func (r *TourMaterialRepository) GetTourMaterialsByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.TourMaterial, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbTourMaterials, err := r.db.GetTourMaterialsByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourMaterialsByTourIDs(dbTourMaterials), nil
}
