package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type PhotoRepository struct {
	db db.Querier
}

func NewPhotoRepository(db db.Querier) *PhotoRepository {
	return &PhotoRepository{db}
}

func (r *PhotoRepository) GetPhotosByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Photo, error) {
	dbPhotos, err := r.db.GetPhotosByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainPhotos(dbPhotos), nil
}

func (r *PhotoRepository) GetPhotosByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.Photo, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbPhotos, err := r.db.GetPhotosByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainPhotosByTourIDs(dbPhotos), nil
}
