package handler

import (
	"net/http"
	"pt-general-go/internal/handler/dto"
	"strconv"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// GetArticles godoc
// @Summary Get all articles
// @Description Get a paginated list of articles
// @Tags articles
// @Accept json
// @Produce json
// @Param page query int false "Page number" default(1)
// @Param limit query int false "Items per page (max 100)" default(20)
// @Success 200 {array} dto.ArticleSummaryDTO
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /articles [get]
func (h *Handler) GetArticles(ctx *gin.Context) {
	pageVal, err := strconv.ParseInt(ctx.DefaultQuery("page", "1"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse page parameter", zap.String("page", ctx.Query("page")), zap.Error(err))
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Invalid page parameter"})
		return
	}
	limitVal, err := strconv.ParseInt(ctx.DefaultQuery("limit", "20"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse limit parameter", zap.String("limit", ctx.Query("limit")), zap.Error(err))
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Invalid limit parameter"})
		return
	}

	page := int32(pageVal)
	limit := int32(limitVal)

	if page < 1 {
		page = 1
	}
	if limit < 1 || limit > 100 {
		limit = 20
	}

	offset := (page - 1) * limit
	articles, err := h.services.ArticleService.GetArticles(ctx.Request.Context(), limit, offset)
	if err != nil {
		h.logger.Error("failed to get articles", zap.Int32("limit", limit), zap.Int32("offset", offset), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToArticleSummaryDTOs(articles))
}

// GetArticleBySlug godoc
// @Summary Get article by slug
// @Description Get detailed article information by slug
// @Tags articles
// @Accept json
// @Produce json
// @Param slug path string true "Article slug"
// @Success 200 {object} dto.ArticleDetailDTO
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /articles/{slug} [get]
func (h *Handler) GetArticleBySlug(ctx *gin.Context) {
	slug := ctx.Param("slug")
	h.logger.Debug("GetArticleBySlug handler called", zap.String("slug", slug))
	article, err := h.services.ArticleService.GetArticleBySlug(ctx.Request.Context(), slug)
	h.logger.Debug("GetArticleBySlug handler result", zap.Any("article", article), zap.Error(err))
	if err != nil {
		h.logger.Error("failed to get article by slug", zap.String("slug", slug), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	if article == nil {
		h.logger.Warn("article not found", zap.String("slug", slug))
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Article not found"})
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToArticleDetailDTO(article))
}

// GetArticleByID godoc
// @Summary Get article by ID
// @Description Get detailed article information by ID
// @Tags articles
// @Accept json
// @Produce json
// @Param id path string true "Article ID"
// @Success 200 {object} dto.ArticleDetailDTO
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /articles/admin/{id} [get]
func (h *Handler) GetArticleByID(ctx *gin.Context) {
	id := ctx.Param("id")
	h.logger.Debug("GetArticleByID called", zap.String("id", id))
	article, err := h.services.ArticleService.GetArticleByID(ctx.Request.Context(), id)
	if err != nil {
		h.logger.Error("failed to get article by ID", zap.String("id", id), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	if article == nil {
		h.logger.Warn("article not found", zap.String("id", id))
		ctx.JSON(http.StatusNotFound, gin.H{"error": "Article not found"})
		return
	}
	h.logger.Debug("article found", zap.String("id", id), zap.String("title", article.Title))
	ctx.JSON(http.StatusOK, dto.MapToArticleDetailDTO(article))
}

// CreateArticle godoc
// @Summary Create a new article
// @Description Create a new article with the provided details
// @Tags articles
// @Accept json
// @Produce json
// @Param request body dto.CreateArticleDTO true "Article data"
// @Success 201 {object} dto.ArticleDetailDTO
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /articles/admin [post]
func (h *Handler) CreateArticle(ctx *gin.Context) {
	var createArticleDTO dto.CreateArticleDTO
	if err := ctx.ShouldBindJSON(&createArticleDTO); err != nil {
		h.logger.Error("failed to bind article data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := createArticleDTO.Validate(); err != nil {
		h.logger.Error("validation error", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	article := createArticleDTO.ToDomain()

	result, err := h.services.ArticleService.CreateArticle(ctx.Request.Context(), &article)
	if err != nil {
		h.logger.Error("failed to create article", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.MapToArticleDetailDTO(result))
}

// UpdateArticle godoc
// @Summary Update an existing article
// @Description Update an existing article with the provided details
// @Tags articles
// @Accept json
// @Produce json
// @Param id path string true "Article ID"
// @Param request body dto.UpdateArticleDTO true "Article data"
// @Success 200 {object} dto.ArticleDetailDTO
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /articles/admin/{id} [put]
func (h *Handler) UpdateArticle(ctx *gin.Context) {
	id := ctx.Param("id")
	var updateArticleDTO dto.UpdateArticleDTO
	if err := ctx.ShouldBindJSON(&updateArticleDTO); err != nil {
		h.logger.Error("failed to bind article data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := updateArticleDTO.Validate(); err != nil {
		h.logger.Error("validation error", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	article := updateArticleDTO.ToDomain()

	result, err := h.services.ArticleService.UpdateArticle(ctx.Request.Context(), id, &article)
	if err != nil {
		h.logger.Error("failed to update article", zap.String("id", id), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapToArticleDetailDTO(result))
}

// DeleteArticle godoc
// @Summary Delete an article
// @Description Delete an existing article by ID
// @Tags articles
// @Accept json
// @Produce json
// @Param id path string true "Article ID"
// @Success 204 {object} nil
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /articles/admin/{id} [delete]
func (h *Handler) DeleteArticle(ctx *gin.Context) {
	id := ctx.Param("id")
	err := h.services.ArticleService.DeleteArticle(ctx.Request.Context(), id)
	if err != nil {
		h.logger.Error("failed to delete article", zap.String("id", id), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.Status(http.StatusNoContent)
}
