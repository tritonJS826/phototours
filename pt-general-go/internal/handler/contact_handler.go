package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
	"strings"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// ContactMe godoc
// @Summary Submit contact me request
// @Description Submit a contact me request with name and phone number
// @Tags contact
// @Accept json
// @Produce json
// @Param request body dto.ContactMeRequest true "Contact me request data"
// @Success 201 {object} dto.ContactMeResponse
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /contact-me [post]
func (h *Handler) ContactMe(ctx *gin.Context) {
	var contactReq dto.ContactMeRequest
	if err := ctx.ShouldBindJSON(&contactReq); err != nil {
		h.logger.Error("failed to bind contact me request data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	// Split name into first and last name
	nameParts := strings.Fields(contactReq.Name)
	firstName := nameParts[0]
	lastName := "Unknown"
	if len(nameParts) > 1 {
		lastName = strings.Join(nameParts[1:], " ")
	}

	lead := &domain.LeadZoho{
		FirstName: firstName,
		LastName:  lastName,
		Phone:     contactReq.Phone,
		Email:     "", // Optional field
		Company:   "UnknownWebsite",
	}

	_, err := h.services.BookingService.CreateLead(ctx, lead)
	if err != nil {
		h.logger.Error("failed to create lead in zoho", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.ContactMeResponse{
		Message: "Contact request submitted successfully",
	})
}
