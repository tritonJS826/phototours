package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type VideoRepository struct {
	db db.Querier
}

func NewVideoRepository(db db.Querier) *VideoRepository {
	return &VideoRepository{db}
}

func (r *VideoRepository) GetVideosByTourID(ctx context.Context, tourID int32) ([]domain.Video, error) {
	dbVideos, err := r.db.GetVideosByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainVideos(dbVideos), nil
}

func (r *VideoRepository) GetVideosByTourIDs(ctx context.Context, tourIDs []int32) (map[int32][]domain.Video, error) {
	dbVideos, err := r.db.GetVideosByTourIDs(ctx, tourIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainVideosByTourIDs(dbVideos), nil
}
