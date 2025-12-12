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
