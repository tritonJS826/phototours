package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type ReviewRepository struct {
	db db.Querier
}

func NewReviewRepository(db db.Querier) *ReviewRepository {
	return &ReviewRepository{db}
}

func (r *ReviewRepository) GetReviewsByTourID(ctx context.Context, tourID int32) ([]domain.Review, error) {
	dbReviews, err := r.db.GetReviewsByTourID(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainReviews(dbReviews), nil
}

func (r *ReviewRepository) GetReviewInfo(ctx context.Context, tourID int32) (*domain.ReviewInfo, error) {
	dbReviewInfo, err := r.db.GetReviewAmountAndStarAmount(ctx, tourID)
	if err != nil {
		return nil, handleDBError(err)
	}
	return &domain.ReviewInfo{
		ReviewAmount: dbReviewInfo.ReviewAmount,
		StarAmount:   dbReviewInfo.StarAmount,
	}, nil
}
