package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

func (h *Handler) ResetSchema(ctx *gin.Context) {
	if err := h.services.DevService.ResetSchema(ctx); err != nil {
		h.logger.Error("failed to reset schema", zap.Error(err))
		ctx.JSON(http.StatusInternalServerError, gin.H{
			"status":  "error",
			"message": "failed to reset schema",
			"error":   err.Error(),
		})
		return
	}
	ctx.Status(http.StatusOK)
}
