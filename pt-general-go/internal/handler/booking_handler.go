package handler

import (
	"io"
	"net/http"
	"pt-general-go/internal/domain"

	// "pt-general-go/internal/handler/dto"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// CreateBookingRequest godoc
// @Summary Create a new booking request
// @Description Create a new booking request and get redirect URL for payment
// @Tags bookings
// @Accept json
// @Produce json
// @Param request body domain.BookingRequest true "Booking request data"
// @Success 201 {object} dto.CreateBookingResponse
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /bookings [post]
func (h *Handler) CreateBookingRequest(ctx *gin.Context) {
	var bookingRequest domain.BookingRequest
	if err := ctx.ShouldBindJSON(&bookingRequest); err != nil {
		h.logger.Error("failed to bind create booking request data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}
	redirectURL, err := h.services.BookingService.CreateBookingRequest(ctx, &bookingRequest)
	if err != nil {
		h.logger.Error("create booking error", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.Redirect(http.StatusSeeOther, redirectURL)
}

// StripeDepositSucceededWebhook godoc
// @Summary Handle Stripe deposit succeeded webhook
// @Description Webhook endpoint for Stripe deposit succeeded events
// @Tags webhooks
// @Accept json
// @Produce json
// @Success 200 {object} map[string]string
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /general/bookings/deposit-succeeded [post]
func (h *Handler) StripeDepositSucceededWebhook(ctx *gin.Context) {
	body, err := io.ReadAll(ctx.Request.Body)
	if err != nil {
		h.logger.Error("failed to read webhook body", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	signature := ctx.GetHeader("Stripe-Signature")
	if signature == "" {
		h.logger.Error("missing Stripe signature")
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing signature"})
		return
	}

	err = h.services.BookingService.HandleDepositSucceededWebhook(ctx, body, signature)
	if err != nil {
		h.logger.Error("failed to handle deposit succeeded webhook", zap.Error(err))
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to process webhook"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success"})
}
