package mapper

import (
	sqlc "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainArticle(dbArticle *sqlc.Article) *domain.Article {
	article := &domain.Article{
		ID:          dbArticle.ID,
		Slug:        dbArticle.Slug,
		Title:       dbArticle.Title,
		Excerpt:     dbArticle.Excerpt,
		Content:     dbArticle.Content,
		CoverURL:    dbArticle.CoverUrl,
		Featured:    dbArticle.Featured,
		PublishedAt: dbArticle.PublishedAt.Time,
	}

	if dbArticle.Alt.Valid {
		article.Alt = dbArticle.Alt.String
	}

	if dbArticle.Author.Valid {
		article.Author = dbArticle.Author.String
	}

	return article
}
