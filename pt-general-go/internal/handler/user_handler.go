package handler

import (
	"fmt"
	"net/http"
	"strconv"

	"pt-general-go/internal/handler/dto"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"go.uber.org/zap"
)

// GetPublicProfile godoc
// @Summary Get public user profile
// @Description Get public profile information for a user by ID
// @Tags users
// @Accept json
// @Produce json
// @Param id path string true "User ID (UUID)"
// @Success 200 {object} dto.PublicProfileDTO
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /users/{id}/public [get]
func (h *Handler) GetPublicProfile(ctx *gin.Context) {
	userID, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		h.logger.Error("failed to parse user ID", zap.String("id", ctx.Param("id")), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Invalid user ID: %v", err)})
		return
	}

	user, err := h.services.UserService.GetUserByID(ctx, userID)
	if err != nil {
		h.logger.Error("failed to get user by ID", zap.String("user_id", userID.String()), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToPublicProfileDTO(user))
}

// GetAllUsers godoc
// @Summary Get all users (Admin only)
// @Description Get a paginated list of all users (requires admin role)
// @Tags users
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param page query int false "Page number" default(1)
// @Param limit query int false "Items per page (max 100)" default(20)
// @Success 200 {array} dto.UserDTO
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /users [get]
func (h *Handler) GetAllUsers(ctx *gin.Context) {
	pageVal, err := strconv.ParseInt(ctx.DefaultQuery("page", "1"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse page parameter", zap.String("page", ctx.Query("page")), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid page parameter"})
		return
	}
	limitVal, err := strconv.ParseInt(ctx.DefaultQuery("limit", "20"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse limit parameter", zap.String("limit", ctx.Query("limit")), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid limit parameter"})
		return
	}

	page := int32(pageVal)
	limit := int32(limitVal)

	if page < 1 {
		page = 1
	}
	if limit < 1 || limit > 100 {
		limit = 20
	}

	offset := (page - 1) * limit
	users, err := h.services.UserService.GetUsers(ctx, limit, offset)
	if err != nil {
		h.logger.Error("failed to get users", zap.Int32("limit", limit), zap.Int32("offset", offset), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToUserDTOs(users))
}
