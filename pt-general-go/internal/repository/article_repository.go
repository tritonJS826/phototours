package repository

import (
	"context"

	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/jackc/pgx/v5/pgtype"
	"go.uber.org/zap"
)

type ArticleRepository struct {
	db     db.Querier
	logger *zap.Logger
}

func NewArticleRepository(db db.Querier, logger *zap.Logger) *ArticleRepository {
	return &ArticleRepository{db: db, logger: logger}
}

func (r *ArticleRepository) GetArticles(ctx context.Context, limit, offset int32) ([]domain.Article, error) {
	dbArticles, err := r.db.GetArticles(ctx, db.GetArticlesParams{
		OffsetCount: offset,
		LimitCount:  limit,
	})
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainArticles(dbArticles), nil
}

func (r *ArticleRepository) GetFeaturedArticles(ctx context.Context, limit, offset int32) ([]domain.Article, error) {
	dbArticles, err := r.db.GetFeaturedArticles(ctx, db.GetFeaturedArticlesParams{
		OffsetCount: offset,
		LimitCount:  limit,
	})
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainFeaturedArticles(dbArticles), nil
}

func (r *ArticleRepository) GetArticlesBySlug(ctx context.Context, slug string) (*domain.Article, error) {
	r.logger.Debug("GetArticlesBySlug repository", zap.String("slug", slug))
	dbArticle, err := r.db.GetArticleBySlug(ctx, slug)
	r.logger.Debug("GetArticleBySlug db result", zap.Any("dbArticle", dbArticle), zap.Error(err))
	if err != nil {
		return nil, handleDBError(err)
	}
	article := mapper.MapToDomainArticle(dbArticle)
	r.logger.Debug("GetArticleBySlug mapped", zap.Any("article", article))
	return article, nil
}

func (r *ArticleRepository) GetArticleByID(ctx context.Context, id string) (*domain.Article, error) {
	uuid, err := domain.ParseUUID(id)
	if err != nil {
		return nil, domain.ErrInvalidID
	}
	dbArticle, err := r.db.GetArticleByID(ctx, mapper.UUIDToPgUUID(uuid))
	if err != nil {
		return nil, handleDBError(err)
	}
	// Check if the UUID is empty (zero value)
	var zeroUUID [16]byte
	if dbArticle.ID.Bytes == zeroUUID {
		return nil, domain.ErrNotFound
	}
	return mapper.MapToDomainArticle(dbArticle), nil
}

func (r *ArticleRepository) CreateArticle(ctx context.Context, article *domain.Article) (*domain.Article, error) {
	var alt pgtype.Text
	if article.Alt != nil && *article.Alt != "" {
		alt.String = *article.Alt
		alt.Valid = true
	}

	var author pgtype.Text
	if article.Author != nil && *article.Author != "" {
		author.String = *article.Author
		author.Valid = true
	}

	dbArticle, err := r.db.CreateArticle(ctx, db.CreateArticleParams{
		Slug:     article.Slug,
		Title:    article.Title,
		Excerpt:  article.Excerpt,
		Content:  article.Content,
		CoverUrl: article.CoverURL,
		Alt:      alt,
		Author:   author,
		Featured: article.Featured,
		Blocks:   domain.JSONB(article.Blocks),
	})
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainArticle(dbArticle), nil
}

func (r *ArticleRepository) UpdateArticle(ctx context.Context, id string, article *domain.Article) (*domain.Article, error) {
	uuid, err := domain.ParseUUID(id)
	if err != nil {
		return nil, domain.ErrInvalidID
	}

	var alt pgtype.Text
	if article.Alt != nil && *article.Alt != "" {
		alt.String = *article.Alt
		alt.Valid = true
	}

	var author pgtype.Text
	if article.Author != nil && *article.Author != "" {
		author.String = *article.Author
		author.Valid = true
	}

	dbArticle, err := r.db.UpdateArticle(ctx, db.UpdateArticleParams{
		Slug:     article.Slug,
		Title:    article.Title,
		Excerpt:  article.Excerpt,
		Content:  article.Content,
		CoverUrl: article.CoverURL,
		Alt:      alt,
		Author:   author,
		Featured: article.Featured,
		Blocks:   domain.JSONB(article.Blocks),
		ID:       mapper.UUIDToPgUUID(uuid),
	})
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainArticle(dbArticle), nil
}

func (r *ArticleRepository) DeleteArticle(ctx context.Context, id string) error {
	uuid, err := domain.ParseUUID(id)
	if err != nil {
		return domain.ErrInvalidID
	}
	err = r.db.DeleteArticle(ctx, mapper.UUIDToPgUUID(uuid))
	if err != nil {
		return handleDBError(err)
	}
	return nil
}
