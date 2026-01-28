package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TourIncludedRepository struct {
	db db.Querier
}

func NewTourIncludedRepository(db db.Querier) *TourIncludedRepository {
	return &TourIncludedRepository{db}
}

func (r *TourIncludedRepository) CreateTourIncluded(ctx context.Context, tourID uuid.UUID, included string) (*domain.TourIncluded, error) {
	dbIncluded, err := r.db.CreateTourIncluded(ctx, db.CreateTourIncludedParams{
		TourID:   mapper.UUIDToPgUUID(tourID),
		Included: included,
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	result := mapper.MapToDomainTourIncluded([]db.TourIncluded{dbIncluded})
	return &result[0], nil
}

func (r *TourIncludedRepository) DeleteTourIncluded(ctx context.Context, id uuid.UUID) error {
	err := r.db.DeleteTourIncluded(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourIncludedRepository) DeleteTourIncludedByTourID(ctx context.Context, tourID uuid.UUID) error {
	err := r.db.DeleteTourIncludedByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourIncludedRepository) GetTourIncludedByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.TourIncluded, error) {
	dbIncluded, err := r.db.GetTourIncludedByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourIncluded(dbIncluded), nil
}

func (r *TourIncludedRepository) GetTourIncludedByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.TourIncluded, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbIncluded, err := r.db.GetTourIncludedByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourIncludedByTourIDs(dbIncluded), nil
}

func (r *TourIncludedRepository) GetTourIncludedStringsByTourID(ctx context.Context, tourID uuid.UUID) ([]string, error) {
	dbIncluded, err := r.db.GetTourIncludedByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourIncludedToStrings(dbIncluded), nil
}

func (r *TourIncludedRepository) GetTourIncludedStringsByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]string, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbIncluded, err := r.db.GetTourIncludedByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourIncludedToStringsByTourIDs(dbIncluded), nil
}
