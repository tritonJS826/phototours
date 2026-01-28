package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TourSummaryRepository struct {
	db db.Querier
}

func NewTourSummaryRepository(db db.Querier) *TourSummaryRepository {
	return &TourSummaryRepository{db}
}

func (r *TourSummaryRepository) CreateTourSummary(ctx context.Context, tourID uuid.UUID, name string, value string) (*domain.TourSummary, error) {
	dbSummary, err := r.db.CreateTourSummary(ctx, db.CreateTourSummaryParams{
		TourID: mapper.UUIDToPgUUID(tourID),
		Name:   name,
		Value:  value,
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	result := mapper.MapToDomainTourSummary([]db.TourSummary{dbSummary})
	return &result[0], nil
}

func (r *TourSummaryRepository) DeleteTourSummary(ctx context.Context, id uuid.UUID) error {
	err := r.db.DeleteTourSummary(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourSummaryRepository) DeleteTourSummaryByTourID(ctx context.Context, tourID uuid.UUID) error {
	err := r.db.DeleteTourSummaryByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourSummaryRepository) GetTourSummaryByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.TourSummary, error) {
	dbSummary, err := r.db.GetTourSummaryByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourSummary(dbSummary), nil
}

func (r *TourSummaryRepository) GetTourSummaryByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.TourSummary, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbSummary, err := r.db.GetTourSummaryByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourSummaryByTourIDs(dbSummary), nil
}

func (r *TourSummaryRepository) GetTourSummaryStringsByTourID(ctx context.Context, tourID uuid.UUID) ([]string, error) {
	dbSummary, err := r.db.GetTourSummaryByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourSummaryToStrings(dbSummary), nil
}

func (r *TourSummaryRepository) GetTourSummaryStringsByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]string, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbSummary, err := r.db.GetTourSummaryByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourSummaryToStringsByTourIDs(dbSummary), nil
}
