package handler

import (
	"io"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"

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

	if bookingRequest.Provider == "" {
		h.logger.Error("payment provider is required")
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Payment provider is required"})
		return
	}

	redirectUrl, err := h.services.BookingService.CreateBookingRequest(ctx, &bookingRequest)
	if err != nil {
		h.logger.Error("create booking error", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(200, dto.CreateBookingResponse{RedirectUrl: redirectUrl})
}

// PaymentWebhook godoc
// @Summary Handle payment provider webhook
// @Description Webhook endpoint for payment provider events (paypal, revolut, etc.)
// @Tags webhooks
// @Accept json
// @Produce json
// @Param provider query string true "Payment provider (paypal, revolut)"
// @Success 200 {object} map[string]string
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /general/bookings/deposit-succeeded [post]
func (h *Handler) PaymentWebhook(ctx *gin.Context) {
	provider := ctx.Query("provider")
	if provider == "" {
		h.logger.Error("missing provider query parameter")
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Missing provider query parameter"})
		return
	}

	body, err := io.ReadAll(ctx.Request.Body)
	if err != nil {
		h.logger.Error("failed to read webhook body", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	headers := make(map[string]string)
	for k, v := range ctx.Request.Header {
		if len(v) > 0 {
			headers[k] = v[0]
		}
	}

	err = h.services.BookingService.HandleDepositSucceededWebhook(ctx, body, headers, provider)
	if err != nil {
		h.logger.Error("failed to handle deposit succeeded webhook", zap.Error(err), zap.String("provider", provider))
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to process webhook"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"status": "success"})
}
