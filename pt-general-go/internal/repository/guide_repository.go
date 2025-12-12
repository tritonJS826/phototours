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
