package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"

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
// @Router /contact/me [post]
func (h *Handler) ContactMe(ctx *gin.Context) {
	var contactReq dto.ContactMeRequest
	if err := ctx.ShouldBindJSON(&contactReq); err != nil {
		h.logger.Error("failed to bind contact me request data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	deal := &domain.DealZoho{
		DealName:        contactReq.Name,
		ClientPhone:     contactReq.Phone,
		Source:          "Website",
		Stage:           "Incoming",
		Pipeline:        "Photo Tours",
		AccountID:       "stub",
		ContactID:       "stub",
		LeadID:          "stub",
		Language:        contactReq.Language,
		Timezone:        contactReq.Timezone,
		City:            contactReq.City,
		Country:         contactReq.Country,
		LastContactPage: contactReq.LastContactPage,
	}

	err := h.services.BookingService.CreateDeal(ctx, deal)
	if err != nil {
		h.logger.Error("failed to create lead in zoho", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	contact := &domain.ContactZoho{
		LastName:        contactReq.Name,
		Phone:           contactReq.Phone,
		Language:        contactReq.Language,
		Timezone:        contactReq.Timezone,
		City:            contactReq.City,
		Country:         contactReq.Country,
		LastContactPage: contactReq.LastContactPage,
	}
	err = h.services.BookingService.CreateContact(ctx, contact)
	if err != nil {
		h.logger.Error("failed to create contact in zoho", zap.Error(err))
	}

	ctx.JSON(http.StatusCreated, dto.ContactMeResponse{
		Message: "Contact request submitted successfully",
	})
}
