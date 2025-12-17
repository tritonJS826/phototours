package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type TourDateRepository struct {
	db db.Querier
}

func NewTourDateRepository(db db.Querier) *TourDateRepository {
	return &TourDateRepository{db}
}

func (r *TourDateRepository) GetTourDatesByTourID(ctx context.Context, tourID int32) ([]domain.TourDate, error) {
	dbTourDates, err := r.db.GetTourDatesByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourDates(dbTourDates), nil
}

func (r *TourDateRepository) GetTourDatesByTourIDs(ctx context.Context, tourIDs []int32) (map[int32][]domain.TourDate, error) {
	dbTourDates, err := r.db.GetTourDatesByTourIDs(ctx, tourIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourDatesByTourIDs(dbTourDates), nil
}
