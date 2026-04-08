package dto

import (
	"fmt"
	"strings"
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
	if a == nil {
		return ArticleDetailDTO{}
	}
	blocks := make([]ArticleBlockDTO, 0)
	if a.Blocks != nil {
		for _, b := range a.Blocks {
			blocks = append(blocks, ArticleBlockDTO{
				Type:    b.Type,
				Content: b.Content,
				Src:     b.Src,
				Alt:     b.Alt,
			})
		}
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

// CreateArticleDTO represents the data needed to create a new article
type CreateArticleDTO struct {
	Slug     string            `json:"slug" binding:"required"`
	Title    string            `json:"title" binding:"required"`
	Excerpt  string            `json:"excerpt" binding:"required"`
	Content  string            `json:"content"`
	CoverURL string            `json:"coverUrl" binding:"required"`
	Alt      *string           `json:"alt,omitempty"`
	Author   *string           `json:"author,omitempty"`
	Featured bool              `json:"featured"`
	Blocks   []ArticleBlockDTO `json:"blocks"`
}

// ToDomain converts the DTO to a domain Article
func (dto *CreateArticleDTO) ToDomain() domain.Article {
	return domain.Article{
		Slug:     dto.Slug,
		Title:    dto.Title,
		Excerpt:  dto.Excerpt,
		Content:  dto.Content,
		CoverURL: dto.CoverURL,
		Alt:      dto.Alt,
		Author:   dto.Author,
		Featured: dto.Featured,
		Blocks:   dto.ToDomainBlocks(),
	}
}

// ToDomainBlocks converts DTO blocks to domain blocks
func (dto *CreateArticleDTO) ToDomainBlocks() []domain.ArticleBlock {
	blocks := make([]domain.ArticleBlock, 0, len(dto.Blocks))
	for _, blockDTO := range dto.Blocks {
		blocks = append(blocks, domain.ArticleBlock{
			Type:    blockDTO.Type,
			Content: blockDTO.Content,
			Src:     blockDTO.Src,
			Alt:     blockDTO.Alt,
		})
	}
	return blocks
}

// Validate validates the CreateArticleDTO fields
func (dto *CreateArticleDTO) Validate() error {
	if strings.TrimSpace(dto.Slug) == "" {
		return fmt.Errorf("slug is required")
	}
	if strings.TrimSpace(dto.Title) == "" {
		return fmt.Errorf("title is required")
	}
	if strings.TrimSpace(dto.Excerpt) == "" {
		return fmt.Errorf("excerpt is required")
	}
	if strings.TrimSpace(dto.CoverURL) == "" {
		return fmt.Errorf("cover URL is required")
	}
	return nil
}

// UpdateArticleDTO represents the data needed to update an existing article
type UpdateArticleDTO struct {
	Slug     *string           `json:"slug,omitempty"`
	Title    *string           `json:"title,omitempty"`
	Excerpt  *string           `json:"excerpt,omitempty"`
	Content  *string           `json:"content,omitempty"`
	CoverURL *string           `json:"coverUrl,omitempty"`
	Alt      *string           `json:"alt,omitempty"`
	Author   *string           `json:"author,omitempty"`
	Featured *bool             `json:"featured,omitempty"`
	Blocks   []ArticleBlockDTO `json:"blocks,omitempty"`
}

// ToDomain converts the DTO to a domain Article
func (dto *UpdateArticleDTO) ToDomain() domain.Article {
	return domain.Article{
		Slug:     *dto.Slug,
		Title:    *dto.Title,
		Excerpt:  *dto.Excerpt,
		Content:  *dto.Content,
		CoverURL: *dto.CoverURL,
		Alt:      dto.Alt,
		Author:   dto.Author,
		Featured: *dto.Featured,
		Blocks:   dto.ToDomainBlocks(),
	}
}

// ToDomainBlocks converts DTO blocks to domain blocks
func (dto *UpdateArticleDTO) ToDomainBlocks() []domain.ArticleBlock {
	blocks := make([]domain.ArticleBlock, 0, len(dto.Blocks))
	for _, blockDTO := range dto.Blocks {
		blocks = append(blocks, domain.ArticleBlock{
			Type:    blockDTO.Type,
			Content: blockDTO.Content,
			Src:     blockDTO.Src,
			Alt:     blockDTO.Alt,
		})
	}
	return blocks
}

// Validate validates the UpdateArticleDTO fields
func (dto *UpdateArticleDTO) Validate() error {
	// At least one field must be provided for update
	if dto.Slug == nil &&
		dto.Title == nil &&
		dto.Excerpt == nil &&
		dto.Content == nil &&
		dto.CoverURL == nil &&
		dto.Alt == nil &&
		dto.Author == nil &&
		dto.Featured == nil &&
		(dto.Blocks == nil || len(dto.Blocks) == 0) {
		return fmt.Errorf("at least one field must be provided for update")
	}

	// Validate slug if provided
	if dto.Slug != nil && strings.TrimSpace(*dto.Slug) == "" {
		return fmt.Errorf("slug cannot be empty")
	}

	// Validate title if provided
	if dto.Title != nil && strings.TrimSpace(*dto.Title) == "" {
		return fmt.Errorf("title cannot be empty")
	}

	// Validate excerpt if provided
	if dto.Excerpt != nil && strings.TrimSpace(*dto.Excerpt) == "" {
		return fmt.Errorf("excerpt cannot be empty")
	}

	// Validate content if provided (allow empty if blocks are provided)
	if dto.Content != nil && strings.TrimSpace(*dto.Content) == "" {
		hasBlocksWithContent := false
		for _, block := range dto.Blocks {
			if block.Type == "text" && strings.TrimSpace(block.Content) != "" {
				hasBlocksWithContent = true
				break
			}
			if block.Type == "image" && strings.TrimSpace(block.Src) != "" {
				hasBlocksWithContent = true
				break
			}
			if block.Type == "title" && strings.TrimSpace(block.Content) != "" {
				hasBlocksWithContent = true
				break
			}
		}
		if !hasBlocksWithContent {
			return fmt.Errorf("content cannot be empty")
		}
	}

	// Validate cover URL if provided
	if dto.CoverURL != nil && strings.TrimSpace(*dto.CoverURL) == "" {
		return fmt.Errorf("cover URL cannot be empty")
	}

	return nil
}
