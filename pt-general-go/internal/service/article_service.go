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
	s.logger.Debug("GetArticleBySlug called", zap.String("slug", slug))
	article, err := s.articleRepository.GetArticlesBySlug(ctx, slug)
	s.logger.Debug("GetArticleBySlug result", zap.Any("article", article), zap.Error(err))
	return article, err
}

func (s *ArticleService) GetArticleByID(ctx context.Context, id string) (*domain.Article, error) {
	return s.articleRepository.GetArticleByID(ctx, id)
}

func (s *ArticleService) CreateArticle(ctx context.Context, article *domain.Article) (*domain.Article, error) {
	return s.articleRepository.CreateArticle(ctx, article)
}

func (s *ArticleService) UpdateArticle(ctx context.Context, id string, article *domain.Article) (*domain.Article, error) {
	return s.articleRepository.UpdateArticle(ctx, id, article)
}

func (s *ArticleService) DeleteArticle(ctx context.Context, id string) error {
	return s.articleRepository.DeleteArticle(ctx, id)
}
