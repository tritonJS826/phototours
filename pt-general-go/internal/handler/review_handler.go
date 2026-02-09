package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// GetRandomReviews godoc
// @Summary Get 20 random reviews
// @Description Get 20 random reviews from the database
// @Tags reviews
// @Produce json
// @Success 200 {array} domain.Review
// @Failure 500 {object} map[string]string
// @Router /reviews/random [get]
func (h *Handler) GetRandomReviews(ctx *gin.Context) {
	reviews, err := h.services.ReviewService.GetRandomReviews(ctx)
	if err != nil {
		h.logger.Error("failed to get random reviews", zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, reviews)
}
