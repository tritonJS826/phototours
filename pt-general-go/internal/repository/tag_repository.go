package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TagRepository struct {
	db db.Querier
}

func NewTagRepository(db db.Querier) *TagRepository {
	return &TagRepository{db}
}

func (r *TagRepository) GetTagsByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Tag, error) {
	dbTags, err := r.db.GetTagsByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTags(dbTags), nil
}

func (r *TagRepository) GetTagsByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.Tag, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbTags, err := r.db.GetTagsByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTagsByTourIDs(dbTags), nil
}
