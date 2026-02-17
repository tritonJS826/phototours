package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// GetReviewsForMain godoc
// @Summary Get 20 reviews for main page
// @Description Get 20 reviews from the database for the main page
// @Tags reviews
// @Produce json
// @Success 200 {array} domain.Review
// @Failure 500 {object} map[string]string
// @Router /reviews/main [get]
func (h *Handler) GetReviewsForMain(ctx *gin.Context) {
	reviews, err := h.services.ReviewService.GetReviewsForMain(ctx)
	if err != nil {
		h.logger.Error("failed to get random reviews", zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, reviews)
}
