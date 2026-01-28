package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TourActivityRepository struct {
	db db.Querier
}

func NewTourActivityRepository(db db.Querier) *TourActivityRepository {
	return &TourActivityRepository{db}
}

func (r *TourActivityRepository) CreateTourActivity(ctx context.Context, tourID uuid.UUID, activity string) (*domain.TourActivity, error) {
	dbActivity, err := r.db.CreateTourActivity(ctx, db.CreateTourActivityParams{
		TourID:   mapper.UUIDToPgUUID(tourID),
		Activity: activity,
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	result := mapper.MapToDomainTourActivities([]db.TourActivity{dbActivity})
	return &result[0], nil
}

func (r *TourActivityRepository) DeleteTourActivity(ctx context.Context, id uuid.UUID) error {
	err := r.db.DeleteTourActivity(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourActivityRepository) DeleteTourActivitiesByTourID(ctx context.Context, tourID uuid.UUID) error {
	err := r.db.DeleteTourActivitiesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *TourActivityRepository) GetTourActivitiesByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.TourActivity, error) {
	dbActivities, err := r.db.GetTourActivitiesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourActivities(dbActivities), nil
}

func (r *TourActivityRepository) GetTourActivitiesByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.TourActivity, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbActivities, err := r.db.GetTourActivitiesByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourActivitiesByTourIDs(dbActivities), nil
}

func (r *TourActivityRepository) GetTourActivityStringsByTourID(ctx context.Context, tourID uuid.UUID) ([]string, error) {
	dbActivities, err := r.db.GetTourActivitiesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourActivitiesToStrings(dbActivities), nil
}

func (r *TourActivityRepository) GetTourActivityStringsByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]string, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbActivities, err := r.db.GetTourActivitiesByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourActivitiesToStringsByTourIDs(dbActivities), nil
}
