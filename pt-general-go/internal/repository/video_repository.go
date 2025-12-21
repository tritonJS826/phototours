package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type VideoRepository struct {
	db db.Querier
}

func NewVideoRepository(db db.Querier) *VideoRepository {
	return &VideoRepository{db}
}

func (r *VideoRepository) GetVideosByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Video, error) {
	dbVideos, err := r.db.GetVideosByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainVideos(dbVideos), nil
}

func (r *VideoRepository) GetVideosByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.Video, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbVideos, err := r.db.GetVideosByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainVideosByTourIDs(dbVideos), nil
}
