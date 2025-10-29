package handler

import (
	"errors"
	"net/http"
	"pt-general-go/internal/domain"

	"github.com/gin-gonic/gin"
)

func (h *Handler) CreatePageMetadata(ctx *gin.Context) {
	var pageMetadata domain.PageMetadata
	if err := ctx.ShouldBindJSON(&pageMetadata); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	createdPageMetadata, err := h.services.PageMetadataService.CreatePageMetadata(ctx, &pageMetadata)
	if err != nil {
		if errors.Is(err, domain.ErrAlreadyExists) {
			ctx.JSON(http.StatusConflict, gin.H{"error": "Page metadata already exists"})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusCreated, createdPageMetadata)
}

func (h *Handler) GetPageMetadata(ctx *gin.Context) {
	url := ctx.Query("url")
	if url == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing 'url' query parameter"})
		return
	}

	pageMetadata, err := h.services.PageMetadataService.GetPageMetadata(ctx, url)
	if err != nil {
		if errors.Is(err, domain.ErrNotFound) {
			ctx.JSON(http.StatusNotFound, gin.H{"error": "Page metadata not found"})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, pageMetadata)
}

func (h *Handler) UpdatePageMetadata(ctx *gin.Context) {
	var update domain.UpdatePageMetadata
	if err := ctx.ShouldBindJSON(&update); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	updatedPageMetadata, err := h.services.PageMetadataService.UpdatePageMetadata(ctx, &update)
	if err != nil {
		if errors.Is(err, domain.ErrNotFound) {
			ctx.JSON(http.StatusNotFound, gin.H{"error": "Page metadata not found"})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(http.StatusOK, updatedPageMetadata)
}

func (h *Handler) DeletePageMetadata(ctx *gin.Context) {
	url := ctx.Query("url")
	if url == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing 'url' query parameter"})
		return
	}

	err := h.services.PageMetadataService.DeletePageMetadata(ctx, url)
	if err != nil {
		if errors.Is(err, domain.ErrNotFound) {
			ctx.JSON(http.StatusNotFound, gin.H{"error": "Page metadata not found"})
			return
		}
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	ctx.Status(http.StatusNoContent)
}
