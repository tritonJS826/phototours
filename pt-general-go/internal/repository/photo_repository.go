package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type PhotoRepository struct {
	db db.Querier
}

func NewPhotoRepository(db db.Querier) *PhotoRepository {
	return &PhotoRepository{db}
}

func (r *PhotoRepository) GetPhotosByTourID(ctx context.Context, tourID int32) ([]domain.Photo, error) {
	dbPhotos, err := r.db.GetPhotosByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainPhotos(dbPhotos), nil
}

func (r *PhotoRepository) GetPhotosByTourIDs(ctx context.Context, tourIDs []int32) (map[int32][]domain.Photo, error) {
	dbPhotos, err := r.db.GetPhotosByTourIDs(ctx, tourIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainPhotosByTourIDs(dbPhotos), nil
}
