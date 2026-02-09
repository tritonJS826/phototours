package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type ReviewRepository struct {
	db db.Querier
}

func NewReviewRepository(db db.Querier) *ReviewRepository {
	return &ReviewRepository{db}
}

func (r *ReviewRepository) GetReviewsByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Review, error) {
	dbReviews, err := r.db.GetReviewsByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainReviews(dbReviews), nil
}

func (r *ReviewRepository) GetReviewInfo(ctx context.Context, tourID uuid.UUID) (*domain.ReviewInfo, error) {
	dbReviewInfo, err := r.db.GetReviewAmountAndStarAmount(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return &domain.ReviewInfo{
		ReviewAmount: dbReviewInfo.ReviewAmount,
		StarAmount:   dbReviewInfo.StarAmount,
	}, nil
}

func (r *ReviewRepository) GetReviewsByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID][]domain.Review, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbReviews, err := r.db.GetReviewsByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainReviewsByTourIDs(dbReviews), nil
}

func (r *ReviewRepository) GetReviewInfoByTourIDs(ctx context.Context, tourIDs []uuid.UUID) (map[uuid.UUID]*domain.ReviewInfo, error) {
	pgUUIDs := make([]pgtype.UUID, len(tourIDs))
	for i, id := range tourIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbReviewInfos, err := r.db.GetReviewAmountAndStarAmountByTourIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}

	result := make(map[uuid.UUID]*domain.ReviewInfo)
	for _, dbReviewInfo := range dbReviewInfos {
		result[mapper.PgUUIDToUUID(dbReviewInfo.TourID)] = &domain.ReviewInfo{
			ReviewAmount: dbReviewInfo.ReviewAmount,
			StarAmount:   dbReviewInfo.StarAmount,
		}
	}
	return result, nil
}

func (r *ReviewRepository) GetRandomReviews(ctx context.Context) ([]domain.Review, error) {
	dbReviews, err := r.db.GetRandomReviews(ctx)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainRandomReviews(dbReviews), nil
}
