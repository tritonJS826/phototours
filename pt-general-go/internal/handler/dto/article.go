package dto

import (
	"time"

	"pt-general-go/internal/domain"
)

type ArticleBlockDTO struct {
	Type    string `json:"type"`
	Content string `json:"content,omitempty"`
	Src     string `json:"src,omitempty"`
	Alt     string `json:"alt,omitempty"`
}

type ArticleDetailDTO struct {
	Alt       *string           `json:"alt"`
	Author    *string           `json:"author"`
	Slug      string            `json:"slug"`
	Title     string            `json:"title"`
	Excerpt   string            `json:"excerpt"`
	Content   string            `json:"content"`
	CoverURL  string            `json:"coverUrl"`
	CreatedAt string            `json:"createdAt"`
	ID        string            `json:"id"`
	Featured  bool              `json:"featured"`
	Blocks    []ArticleBlockDTO `json:"blocks"`
}

func MapToArticleDetailDTO(a *domain.Article) ArticleDetailDTO {
	blocks := make([]ArticleBlockDTO, 0, len(a.Blocks))
	for _, b := range a.Blocks {
		blocks = append(blocks, ArticleBlockDTO{
			Type:    b.Type,
			Content: b.Content,
			Src:     b.Src,
			Alt:     b.Alt,
		})
	}

	return ArticleDetailDTO{
		ID:        a.ID.String(),
		Slug:      a.Slug,
		Title:     a.Title,
		Excerpt:   a.Excerpt,
		Content:   a.Content,
		CoverURL:  a.CoverURL,
		Alt:       a.Alt,
		Author:    a.Author,
		Featured:  a.Featured,
		CreatedAt: a.CreatedAt.Format(time.RFC3339),
		Blocks:    blocks,
	}
}

type ArticleSummaryDTO struct {
	Alt       *string `json:"alt"`
	Author    *string `json:"author"`
	Slug      string  `json:"slug"`
	Title     string  `json:"title"`
	Excerpt   string  `json:"excerpt"`
	CoverURL  string  `json:"coverUrl"`
	CreatedAt string  `json:"createdAt"`
	ID        string  `json:"id"`
	Featured  bool    `json:"featured"`
}

func MapToArticleSummaryDTOs(a []domain.Article) []ArticleSummaryDTO {
	articles := make([]ArticleSummaryDTO, 0, len(a))
	for _, dArticle := range a {
		articles = append(articles, ArticleSummaryDTO{
			ID:        dArticle.ID.String(),
			Slug:      dArticle.Slug,
			Title:     dArticle.Title,
			Excerpt:   dArticle.Excerpt,
			CoverURL:  dArticle.CoverURL,
			Alt:       dArticle.Alt,
			Author:    dArticle.Author,
			Featured:  dArticle.Featured,
			CreatedAt: dArticle.CreatedAt.Format(time.RFC3339),
		})
	}
	return articles
}
