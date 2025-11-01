package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
	"strings"

	"github.com/gin-gonic/gin"
)

const (
	MaxAvatarSize     = 5 * 1024 * 1024 // 5MB
	AllowedImageTypes = "image/jpeg,image/png,image/gif,image/webp"
)

func (h *Handler) Register(ctx *gin.Context) {
	var register domain.Register
	if err := ctx.ShouldBindJSON(&register); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	result, err := h.services.AuthService.Register(ctx, &register)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.AuthResponse{
		User:  dto.MapToUserDTO(result.User),
		Token: result.Token,
	})
}

func (h *Handler) Login(ctx *gin.Context) {
	var login domain.Login
	if err := ctx.ShouldBindJSON(&login); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	result, err := h.services.AuthService.Login(ctx, &login)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.AuthResponse{
		User:  dto.MapToUserDTO(result.User),
		Token: result.Token,
	})
}

func (h *Handler) GetProfile(ctx *gin.Context) {
	userClaims, err := GetUserClaimsFromContext(ctx)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	user, err := h.services.AuthService.GetUserByID(ctx, userClaims.UserID)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapToUserDTO(user))
}

func (h *Handler) ChangePassword(ctx *gin.Context) {
	userClaims, err := GetUserClaimsFromContext(ctx)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	var input dto.ChangePasswordDTO
	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	user, err := h.services.AuthService.ChangePassword(ctx, input.ToDomain(userClaims.UserID))
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapToUserDTO(user))
}

func (h *Handler) UpdateProfile(ctx *gin.Context) {
	userClaims, err := GetUserClaimsFromContext(ctx)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	updateProfileInput := &domain.UpdateProfileInput{
		ID: userClaims.UserID,
	}

	file, err := ctx.FormFile("avatar")
	if err != nil && err != http.ErrMissingFile {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "failed to process avatar"})
		return
	}
	if file != nil {
		if file.Size > MaxAvatarSize {
			ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "file too large (max 5MB)"})
			return
		}

		contentType := file.Header.Get("Content-Type")
		if !strings.Contains(AllowedImageTypes, contentType) {
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

	// TODO: If user adds new profile image, we should delete the old image
	user, err := h.services.AuthService.UpdateProfile(ctx, updateProfileInput)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapToUserDTO(user))
}
