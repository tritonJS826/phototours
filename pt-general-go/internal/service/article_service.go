package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type ArticleService struct {
	articleRepository *repository.ArticleRepository
	logger            *zap.Logger
}

func NewArticleService(
	articleRepository *repository.ArticleRepository,
	logger *zap.Logger,
) *ArticleService {
	return &ArticleService{
		articleRepository: articleRepository,
		logger:            logger,
	}
}

func (s *ArticleService) GetArticles(ctx context.Context, limit, offset int32) ([]domain.Article, error) {
	return s.articleRepository.GetArticles(ctx, limit, offset)
}

func (s *ArticleService) GetArticleBySlug(ctx context.Context, slug string) (*domain.Article, error) {
	return s.articleRepository.GetArticlesBySlug(ctx, slug)
}
