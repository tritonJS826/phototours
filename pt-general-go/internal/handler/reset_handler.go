package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (h *Handler) ResetSchema(ctx *gin.Context) {
	if err := h.services.ResetService.ResetSchema(ctx); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": "failed to reset schema",
			"error":   err.Error(),
		})
		return
	}

	ctx.Status(http.StatusOK)
}
