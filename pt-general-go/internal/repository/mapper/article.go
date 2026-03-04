package mapper

import (
	"encoding/json"

	sqlc "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainArticle(dbArticle *sqlc.GetArticleBySlugRow) *domain.Article {
	article := &domain.Article{
		ID:        PgUUIDToUUID(dbArticle.ID),
		Slug:      dbArticle.Slug,
		Title:     dbArticle.Title,
		Excerpt:   dbArticle.Excerpt,
		Content:   dbArticle.Content,
		CoverURL:  dbArticle.CoverUrl,
		Featured:  dbArticle.Featured,
		CreatedAt: dbArticle.CreatedAt.Time,
	}

	if dbArticle.Alt.Valid {
		article.Alt = &dbArticle.Alt.String
	}

	if dbArticle.Author.Valid {
		article.Author = &dbArticle.Author.String
	}

	if dbArticle.Blocks != nil {
		var blocks []domain.ArticleBlock
		if json.Unmarshal(dbArticle.Blocks, &blocks) == nil {
			article.Blocks = blocks
		}
	}

	return article
}

func MapToDomainArticles(dbArticles []sqlc.GetArticlesRow) []domain.Article {
	articles := make([]domain.Article, 0, len(dbArticles))
	for _, dbArticle := range dbArticles {
		article := domain.Article{
			ID:        PgUUIDToUUID(dbArticle.ID),
			Slug:      dbArticle.Slug,
			Title:     dbArticle.Title,
			Excerpt:   dbArticle.Excerpt,
			Content:   dbArticle.Content,
			CoverURL:  dbArticle.CoverUrl,
			Featured:  dbArticle.Featured,
			CreatedAt: dbArticle.CreatedAt.Time,
		}

		if dbArticle.Alt.Valid {
			article.Alt = &dbArticle.Alt.String
		}

		if dbArticle.Author.Valid {
			article.Author = &dbArticle.Author.String
		}

		if dbArticle.Blocks != nil {
			var blocks []domain.ArticleBlock
			if json.Unmarshal(dbArticle.Blocks, &blocks) == nil {
				article.Blocks = blocks
			}
		}
		articles = append(articles, article)
	}
	return articles
}
