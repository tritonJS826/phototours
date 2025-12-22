package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TourDateRepository struct {
	db db.Querier
}

func NewTourDateRepository(db db.Querier) *TourDateRepository {
	return &TourDateRepository{db}
}

func (r *TourDateRepository) GetTourDatesByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.TourDate, error) {
	dbTourDates, err := r.db.GetTourDatesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourDates(dbTourDates), nil
}

func (r *TourDateRepository) GetTourDatesByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.TourDate, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbTourDates, err := r.db.GetTourDatesByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourDatesByTourIDs(dbTourDates), nil
}
