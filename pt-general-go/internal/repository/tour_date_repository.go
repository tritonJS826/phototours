package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
	"time"

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

func (r *TourDateRepository) CreateTourDate(ctx context.Context, id, tourID uuid.UUID, dateFrom, dateTo time.Time, groupSize int32, isAvailable bool, price *float64, description string) (*domain.TourDate, error) {
	dbTourDate, err := r.db.CreateTourDate(ctx, db.CreateTourDateParams{
		ID:          mapper.UUIDToPgUUID(id),
		TourID:      mapper.UUIDToPgUUID(tourID),
		DateFrom:    pgtype.Timestamp{Time: dateFrom, Valid: true},
		DateTo:      pgtype.Timestamp{Time: dateTo, Valid: true},
		GroupSize:   groupSize,
		IsAvailable: isAvailable,
		Price:       pgtypeFloat8(price),
		Description: description,
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	result := mapper.MapToDomainTourDates([]db.TourDate{dbTourDate})
	return &result[0], nil
}

func (r *TourDateRepository) UpdateTourDate(ctx context.Context, id uuid.UUID, dateFrom, dateTo time.Time, groupSize int32, isAvailable bool, price *float64, description string) (*domain.TourDate, error) {
	dbTourDate, err := r.db.UpdateTourDate(ctx, db.UpdateTourDateParams{
		ID:          mapper.UUIDToPgUUID(id),
		DateFrom:    pgtype.Timestamp{Time: dateFrom, Valid: true},
		DateTo:      pgtype.Timestamp{Time: dateTo, Valid: true},
		GroupSize:   groupSize,
		IsAvailable: isAvailable,
		Price:       pgtypeFloat8(price),
		Description: description,
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	result := mapper.MapToDomainTourDates([]db.TourDate{dbTourDate})
	return &result[0], nil
}

func (r *TourDateRepository) DeleteTourDate(ctx context.Context, id uuid.UUID) error {
	err := r.db.DeleteTourDate(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourDateRepository) DeleteTourDatesByTourID(ctx context.Context, tourID uuid.UUID) error {
	err := r.db.DeleteTourDatesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func pgtypeFloat8(value *float64) pgtype.Float8 {
	if value == nil {
		return pgtype.Float8{}
	}
	return pgtype.Float8{Float64: *value, Valid: true}
}
