package dto

import (
	"time"

	"pt-general-go/internal/domain"
)

type ArticleDetailDTO struct {
	Alt         *string `json:"alt"`
	Author      *string `json:"author"`
	Slug        string  `json:"slug"`
	Title       string  `json:"title"`
	Excerpt     string  `json:"excerpt"`
	Content     string  `json:"content"`
	CoverURL    string  `json:"coverUrl"`
	PublishedAt string  `json:"publishedAt"`
	ID          string  `json:"id"`
	Featured    bool    `json:"featured"`
}

func MapToArticleDetailDTO(a *domain.Article) ArticleDetailDTO {
	return ArticleDetailDTO{
		ID:          a.ID.String(),
		Slug:        a.Slug,
		Title:       a.Title,
		Excerpt:     a.Excerpt,
		Content:     a.Content,
		CoverURL:    a.CoverURL,
		Alt:         a.Alt,
		Author:      a.Author,
		Featured:    a.Featured,
		PublishedAt: a.PublishedAt.Format(time.RFC3339),
	}
}

type ArticleSummaryDTO struct {
	Alt         *string `json:"alt"`
	Author      *string `json:"author"`
	Slug        string  `json:"slug"`
	Title       string  `json:"title"`
	Excerpt     string  `json:"excerpt"`
	CoverURL    string  `json:"coverUrl"`
	PublishedAt string  `json:"publishedAt"`
	ID          string  `json:"id"`
	Featured    bool    `json:"featured"`
}

func MapToArticleSummaryDTOs(a []domain.Article) []ArticleSummaryDTO {
	articles := make([]ArticleSummaryDTO, 0, len(a))
	for _, dArticle := range a {
		articles = append(articles, ArticleSummaryDTO{
			ID:          dArticle.ID.String(),
			Slug:        dArticle.Slug,
			Title:       dArticle.Title,
			Excerpt:     dArticle.Excerpt,
			CoverURL:    dArticle.CoverURL,
			Alt:         dArticle.Alt,
			Author:      dArticle.Author,
			Featured:    dArticle.Featured,
			PublishedAt: dArticle.PublishedAt.Format(time.RFC3339),
		})
	}
	return articles
}
