package handler

import (
	"errors"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
	"strings"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

const (
	MaxAvatarSize     = 5 * 1024 * 1024 // 5MB
	AllowedImageTypes = "image/jpeg,image/png,image/gif,image/webp"
)

// Register godoc
// @Summary Register a new user
// @Description Create a new user account
// @Tags auth
// @Accept json
// @Produce json
// @Param request body domain.Register true "Registration data"
// @Success 201 {object} dto.AuthResponse
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /auth/register [post]
func (h *Handler) Register(ctx *gin.Context) {
	var register domain.Register
	if err := ctx.ShouldBindJSON(&register); err != nil {
		h.logger.Error("failed to bind registration data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := register.Validate(); err != nil {
		h.logger.Error("validation error", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	h.logger.Debug("register data", zap.Any("data", register))

	result, err := h.services.AuthService.Register(ctx, &register)
	if err != nil {
		h.logger.Error("registration error", zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.AuthResponse{
		User:  dto.MapToUserDTO(result.User),
		Token: result.Token,
	})
}

// Login godoc
// @Summary Login user
// @Description Authenticate user and return JWT token
// @Tags auth
// @Accept json
// @Produce json
// @Param request body domain.Login true "Login credentials"
// @Success 200 {object} dto.AuthResponse
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /auth/login [post]
func (h *Handler) Login(ctx *gin.Context) {
	var login domain.Login
	if err := ctx.ShouldBindJSON(&login); err != nil {
		h.logger.Error("failed to bind login data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := login.Validate(); err != nil {
		h.logger.Error("validation error", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	result, err := h.services.AuthService.Login(ctx, &login)
	if err != nil {
		h.logger.Error("login error", zap.String("email", login.Email), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.AuthResponse{
		User:  dto.MapToUserDTO(result.User),
		Token: result.Token,
	})
}

// GetProfile godoc
// @Summary Get user profile
// @Description Get the authenticated user's profile
// @Tags auth
// @Accept json
// @Produce json
// @Security BearerAuth
// @Success 200 {object} dto.UserDTO
// @Failure 401 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /auth/profile [get]
func (h *Handler) GetProfile(ctx *gin.Context) {
	userClaims, err := GetUserClaimsFromContext(ctx)
	if err != nil {
		h.logger.Error("failed to get user claims from context", zap.Error(err))
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	user, err := h.services.UserService.GetUserByID(ctx, userClaims.UserID)
	if err != nil {
		h.logger.Error("failed to get user profile", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToUserDTO(user))
}

// ChangePassword godoc
// @Summary Change user password
// @Description Change the authenticated user's password
// @Tags auth
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body dto.ChangePasswordDTO true "Password change data"
// @Success 200 {object} dto.UserDTO
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /auth/change-password [post]
func (h *Handler) ChangePassword(ctx *gin.Context) {
	userClaims, err := GetUserClaimsFromContext(ctx)
	if err != nil {
		h.logger.Error("failed to get user claims from context", zap.Error(err))
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	var changePasswordDTO dto.ChangePasswordDTO
	if err := ctx.ShouldBindJSON(&changePasswordDTO); err != nil {
		h.logger.Error("failed to bind change password data", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	changePassword := changePasswordDTO.ToDomain(userClaims.UserID)

	if err := changePassword.Validate(); err != nil {
		h.logger.Error("validation error", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	user, err := h.services.AuthService.ChangePassword(ctx, changePassword)
	if err != nil {
		h.logger.Error("failed to change password", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapToUserDTO(user))
}

// UpdateProfile godoc
// @Summary Update user profile
// @Description Update the authenticated user's profile (multipart/form-data for avatar upload)
// @Tags auth
// @Accept multipart/form-data
// @Produce json
// @Security BearerAuth
// @Param firstName formData string false "First name"
// @Param lastName formData string false "Last name"
// @Param phone formData string false "Phone number"
// @Param bio formData string false "Biography"
// @Param avatar formData file false "Profile picture (max 5MB, jpeg/png/gif/webp)"
// @Success 200 {object} dto.UserDTO
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /auth/profile [put]
func (h *Handler) UpdateProfile(ctx *gin.Context) {
	userClaims, err := GetUserClaimsFromContext(ctx)
	if err != nil {
		h.logger.Error("failed to get user claims from context", zap.Error(err))
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	updateProfileInput := &domain.UpdateProfileParams{
		ID: userClaims.UserID,
	}

	file, err := ctx.FormFile("avatar")
	if err != nil && !errors.Is(err, http.ErrMissingFile) {
		h.logger.Error("failed to process avatar file", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "failed to process avatar"})
		return
	}
	if file != nil {
		if file.Size > MaxAvatarSize {
			h.logger.Error("avatar file too large", zap.Int32("user_id", userClaims.UserID), zap.Int64("size", file.Size), zap.Int("max_size", MaxAvatarSize))
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "file too large (max 5MB)"})
			return
		}

		contentType := file.Header.Get("Content-Type")
		if !strings.Contains(AllowedImageTypes, contentType) {
			h.logger.Error("invalid avatar file type", zap.Int32("user_id", userClaims.UserID), zap.String("content_type", contentType))
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid file type"})
			return
		}
		updateProfileInput.File = file
	}

	if v := ctx.PostForm("firstName"); v != "" {
		updateProfileInput.FirstName = &v
	}
	if v := ctx.PostForm("lastName"); v != "" {
		updateProfileInput.LastName = &v
	}
	if v := ctx.PostForm("phone"); v != "" {
		updateProfileInput.Phone = &v
	}
	if v := ctx.PostForm("bio"); v != "" {
		updateProfileInput.Bio = &v
	}

	if err := updateProfileInput.Validate(); err != nil {
		h.logger.Error("update profile validation error", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	// TODO: If user adds new profile image, we should delete the old image
	user, err := h.services.AuthService.UpdateProfile(ctx, updateProfileInput)
	if err != nil {
		h.logger.Error("failed to update profile", zap.Int32("user_id", userClaims.UserID), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapToUserDTO(user))
}
