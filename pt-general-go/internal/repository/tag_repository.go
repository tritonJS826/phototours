package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type TagRepository struct {
	db db.Querier
}

func NewTagRepository(db db.Querier) *TagRepository {
	return &TagRepository{db}
}

func (r *TagRepository) GetTagsByTourID(ctx context.Context, tourID int32) ([]domain.Tag, error) {
	dbTags, err := r.db.GetTagsByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTags(dbTags), nil
}

func (r *TagRepository) GetTagsByTourIDs(ctx context.Context, tourIDs []int32) (map[int32][]domain.Tag, error) {
	dbTags, err := r.db.GetTagsByTourIDs(ctx, tourIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTagsByTourIDs(dbTags), nil
}
