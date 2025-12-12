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
	article, err := h.services.ArticleService.GetArticleBySlug(ctx.Request.Context(), slug)
	if err != nil {
		h.logger.Error("failed to get article by slug", zap.String("slug", slug), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToArticleDetailDTO(article))
}
