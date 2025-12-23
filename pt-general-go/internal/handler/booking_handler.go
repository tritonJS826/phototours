package handler

import (
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
	redirectURL, err := h.services.BookingService.CreateBookingRequest(ctx, &bookingRequest)
	if err != nil {
		h.logger.Error("create booking error", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.CreateBookingResponse{
		RedirectURL: redirectURL,
	})
}
