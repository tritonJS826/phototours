package handler

import (
	"net/http"
	"pt-general-go/internal/handler/dto"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// Subscribe godoc
// @Summary Subscribe to newsletter
// @Description Subscribe to newsletter with email address
// @Tags subscribe
// @Accept json
// @Produce json
// @Param request body dto.SubscribeRequest true "Subscribe request data"
// @Success 201 {object} dto.SubscribeResponse
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /subscribe [post]
func (h *Handler) Subscribe(ctx *gin.Context) {
	var subscribeReq dto.SubscribeRequest
	if err := ctx.ShouldBindJSON(&subscribeReq); err != nil {
		h.logger.Error("failed to bind subscribe request data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid email address"})
		return
	}

	// TODO: Add email to newsletter service/Zoho
	h.logger.Info("Newsletter subscription request", zap.String("email", subscribeReq.Email))

	ctx.JSON(http.StatusCreated, dto.SubscribeResponse{
		Message: "Successfully subscribed to newsletter",
	})
}
