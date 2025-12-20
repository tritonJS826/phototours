package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type GuideRepository struct {
	db db.Querier
}

func NewGuideRepository(db db.Querier) *GuideRepository {
	return &GuideRepository{db}
}

func (r *GuideRepository) GetGuidesByTourID(ctx context.Context, guideID int32) (*domain.Guide, error) {
	dbGuideWithUserID, err := r.db.GetGuideWithUserByID(ctx, guideID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainGuide(&dbGuideWithUserID), nil
}

func (r *GuideRepository) GetGuidesByIDs(ctx context.Context, guideIDs []int32) (map[int32]*domain.Guide, error) {
	dbGuides, err := r.db.GetGuidesWithUserByIDs(ctx, guideIDs)
	if err != nil {
		return nil, handleDBError(err)
	}

	result := make(map[int32]*domain.Guide)
	for _, dbGuide := range dbGuides {
		result[dbGuide.GuideID] = mapper.MapToDomainGuideFromBatch(&dbGuide)
	}
	return result, nil
}
