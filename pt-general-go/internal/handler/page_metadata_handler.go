package handler

import (
	"net/http"

	"pt-general-go/internal/domain"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// CreatePageMetadata godoc
// @Summary Create page metadata (Admin only)
// @Description Create metadata for a page URL (requires admin role)
// @Tags page-metadata
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body domain.PageMetadata true "Page metadata"
// @Success 201 {object} domain.PageMetadata
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /page-metadata [post]
func (h *Handler) CreatePageMetadata(ctx *gin.Context) {
	var pageMetadata domain.PageMetadata
	if err := ctx.ShouldBindJSON(&pageMetadata); err != nil {
		h.logger.Error("failed to bind page metadata data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	createdPageMetadata, err := h.services.PageMetadataService.CreatePageMetadata(ctx, &pageMetadata)
	if err != nil {
		h.logger.Error("failed to create page metadata", zap.String("url", pageMetadata.URL), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, createdPageMetadata)
}

// GetPageMetadata godoc
// @Summary Get page metadata
// @Description Get metadata for a specific page URL
// @Tags page-metadata
// @Accept json
// @Produce json
// @Param url query string true "Page URL"
// @Success 200 {object} domain.PageMetadata
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /page-metadata [get]
func (h *Handler) GetPageMetadata(ctx *gin.Context) {
	url := ctx.Query("url")
	if url == "" {
		h.logger.Error("missing 'url' query parameter")
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing 'url' query parameter"})
		return
	}

	pageMetadata, err := h.services.PageMetadataService.GetPageMetadata(ctx, url)
	if err != nil {
		h.logger.Error("failed to get page metadata", zap.String("url", url), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, pageMetadata)
}

// UpdatePageMetadata godoc
// @Summary Update page metadata (Admin only)
// @Description Update metadata for a page URL (requires admin role)
// @Tags page-metadata
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body dto.UpdatePageMetadataRequest true "Update data"
// @Success 200 {object} domain.PageMetadata
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /page-metadata [patch]
func (h *Handler) UpdatePageMetadata(ctx *gin.Context) {
	var update domain.UpdatePageMetadataParams
	if err := ctx.ShouldBindJSON(&update); err != nil {
		h.logger.Error("failed to bind update page metadata data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := update.Validate(); err != nil {
		h.logger.Error("validation error", zap.String("url", update.URL), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	updatedPageMetadata, err := h.services.PageMetadataService.UpdatePageMetadata(ctx, &update)
	if err != nil {
		h.logger.Error("failed to update page metadata", zap.String("url", update.URL), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, updatedPageMetadata)
}

// DeletePageMetadata godoc
// @Summary Delete page metadata (Admin only)
// @Description Delete metadata for a page URL (requires admin role)
// @Tags page-metadata
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param url query string true "Page URL"
// @Success 204 "No Content"
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /page-metadata [delete]
func (h *Handler) DeletePageMetadata(ctx *gin.Context) {
	url := ctx.Query("url")
	if url == "" {
		h.logger.Error("missing 'url' query parameter")
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing 'url' query parameter"})
		return
	}

	err := h.services.PageMetadataService.DeletePageMetadata(ctx, url)
	if err != nil {
		h.logger.Error("failed to delete page metadata", zap.String("url", url), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.Status(http.StatusNoContent)
}
