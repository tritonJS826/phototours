package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type ReviewService struct {
	reviewRepository *repository.ReviewRepository
	logger           *zap.Logger
}

func NewReviewService(reviewRepository *repository.ReviewRepository, logger *zap.Logger) *ReviewService {
	return &ReviewService{
		reviewRepository: reviewRepository,
		logger:           logger,
	}
}

func (s *ReviewService) GetRandomReviews(ctx context.Context) ([]domain.Review, error) {
	reviews, err := s.reviewRepository.GetRandomReviews(ctx)
	if err != nil {
		s.logger.Error("failed to get random reviews", zap.Error(err))
		return nil, err
	}
	return reviews, nil
}
