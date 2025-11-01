package handler

import (
	"fmt"
	"net/http"
	"pt-general-go/internal/handler/dto"
	"strconv"

	"github.com/gin-gonic/gin"
)

func (h *Handler) GetPublicProfile(ctx *gin.Context) {
	idString := ctx.Param("id")
	id, err := strconv.Atoi(idString)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Invalid user ID: %v", err)})
		return
	}
	user, err := h.services.AuthService.GetUserByID(ctx, int32(id))
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToPublicProfileDTO(user))
}
