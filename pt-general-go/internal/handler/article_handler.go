package handler

import (
	"net/http"
	"pt-general-go/internal/handler/dto"
	"strconv"

	"github.com/gin-gonic/gin"
)

func (h *Handler) GetArticles(ctx *gin.Context) {
	page, err := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid page parameter"})
	}
	limit, err := strconv.Atoi(ctx.DefaultQuery("limit", "20"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid limit parameter"})
	}

	if page < 1 {
		page = 1
	}
	if limit < 1 || limit > 100 {
		limit = 20
	}

	offset := (page - 1) * limit

	articles, err := h.services.ArticleService.GetArticles(ctx.Request.Context(), limit, offset)
	if err != nil {
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapToArticleSummaryDTOs(articles))
}

func (h *Handler) GetArticleBySlug(ctx *gin.Context) {
	slug := ctx.Param("slug")
	article, err := h.services.ArticleService.GetArticleBySlug(ctx.Request.Context(), slug)
	if err != nil {
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToArticleDetailDTO(article))
}
