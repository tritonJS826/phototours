package handler

import (
	"fmt"
	"net/http"
	"strconv"

	"pt-general-go/internal/handler/dto"

	"github.com/gin-gonic/gin"
)

func (h *Handler) GetPublicProfile(ctx *gin.Context) {
	idString := ctx.Param("id")
	id, err := strconv.Atoi(idString)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Invalid user ID: %v", err)})
		return
	}
	user, err := h.services.UserService.GetUserByID(ctx, int32(id))
	if err != nil {
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToPublicProfileDTO(user))
}

func (h *Handler) GetAllUsers(ctx *gin.Context) {
	page, err := strconv.Atoi(ctx.DefaultQuery("page", "1"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid page parameter"})
		return
	}
	limit, err := strconv.Atoi(ctx.DefaultQuery("limit", "20"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid limit parameter"})
		return
	}

	if page < 1 {
		page = 1
	}
	if limit < 1 || limit > 100 {
		limit = 20
	}

	offset := (page - 1) * limit

	user, err := h.services.UserService.GetUsers(ctx, int32(limit), int32(offset))
	if err != nil {
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToUserDTOs(user))
}
