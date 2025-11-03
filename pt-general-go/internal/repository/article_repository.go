package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
)

type ArticleRepository struct {
	db db.Querier
}

func NewArticleRepository(db db.Querier) *ArticleRepository {
	return &ArticleRepository{db}
}

func (r *ArticleRepository) GetArticles(ctx context.Context, limit int, offset int) ([]domain.Article, error) {
	dbArticles, err := r.db.GetArticles(ctx, db.GetArticlesParams{
		Limit:  int32(limit),
		Offset: int32(offset),
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	articles := make([]domain.Article, 0, len(dbArticles))
	for _, dbArticle := range dbArticles {
		articles = append(articles, *mapper.MapToDomainArticle(&dbArticle))
	}
	return articles, nil
}

func (r *ArticleRepository) GetArticlesBySlug(ctx context.Context, slug string) (*domain.Article, error) {
	dbArticle, err := r.db.GetArticleBySlug(ctx, slug)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainArticle(&dbArticle), nil
}
