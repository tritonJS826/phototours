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

func (r *PhotoRepository) UpdatePhoto(ctx context.Context, id uuid.UUID, url string, description *string) (*domain.Photo, error) {
	var descPtr *string = description
	var pgDesc pgtype.Text
	if descPtr != nil {
		pgDesc = pgtype.Text{String: *descPtr, Valid: true}
	}

	photo, err := r.db.UpdatePhoto(ctx, db.UpdatePhotoParams{
		Url:         url,
		Description: pgDesc,
		ID:          mapper.UUIDToPgUUID(id),
	})
	if err != nil {
		return nil, handleDBError(err)
	}
	return &domain.Photo{
		ID:          mapper.PgUUIDToUUID(photo.ID),
		TourID:      mapper.PgUUIDToUUID(photo.TourID),
		URL:         photo.Url,
		Description: description,
		CreatedAt:   photo.CreatedAt.Time,
	}, nil
}

func (r *PhotoRepository) CreatePhoto(ctx context.Context, id, tourID uuid.UUID, url string, description *string) (*domain.Photo, error) {
	var pgDesc pgtype.Text
	if description != nil {
		pgDesc = pgtype.Text{String: *description, Valid: true}
	}

	photo, err := r.db.CreatePhoto(ctx, db.CreatePhotoParams{
		ID:          mapper.UUIDToPgUUID(id),
		TourID:      mapper.UUIDToPgUUID(tourID),
		Url:         url,
		Description: pgDesc,
	})
	if err != nil {
		return nil, handleDBError(err)
	}
	return &domain.Photo{
		ID:          mapper.PgUUIDToUUID(photo.ID),
		TourID:      mapper.PgUUIDToUUID(photo.TourID),
		URL:         photo.Url,
		Description: description,
		CreatedAt:   photo.CreatedAt.Time,
	}, nil
}

func (r *PhotoRepository) DeletePhoto(ctx context.Context, id uuid.UUID) error {
	err := r.db.DeletePhoto(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}

func (r *PhotoRepository) DeletePhotosByTourID(ctx context.Context, tourID uuid.UUID) error {
	err := r.db.DeletePhotosByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}
