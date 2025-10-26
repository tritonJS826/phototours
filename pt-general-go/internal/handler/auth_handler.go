package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
	"pt-general-go/pkg/utils"

	"github.com/gin-gonic/gin"
)

func (h *Handler) Register(ctx *gin.Context) {
	var res domain.Register
	if err := ctx.ShouldBindJSON(&res); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	result, err := h.services.AuthService.Register(ctx, &res)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusCreated, dto.RegisterResponse{
		User:  dto.MapUserToSafeUser(result.User),
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

	ctx.JSON(http.StatusCreated, dto.RegisterResponse{
		User:  dto.MapUserToSafeUser(result.User),
		Token: result.Token,
	})
}

func (h *Handler) GetProfile(ctx *gin.Context) {
	userID := ctx.GetInt32("userID")
	if userID == 0 {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	user, err := h.services.AuthService.GetProfile(ctx, int32(userID))
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, dto.MapUserToSafeUser(user))
}

func (h *Handler) ChangePassword(ctx *gin.Context) {
	userID := ctx.GetInt32("userID")
	if userID == 0 {
		ctx.JSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	var res dto.ChangePasswordDTO
	if err := ctx.ShouldBindJSON(&res); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	user, err := h.services.AuthService.ChangePassword(ctx, &res)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapUserToSafeUser(user))
}

func (h *Handler) UpdateProfile(ctx *gin.Context) {
	userID := ctx.GetInt32("userID")
	if userID == 0 {
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
		return
	}

	updateDto := ParseUpdateProfileForm(ctx)
	if err := updateDto.Validate(); err != nil {
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "invalid data"})
		return
	}

	updateDto.ID = userID

	user, err := h.services.AuthService.UpdateProfile(ctx, updateDto)
	if err != nil {
		h.handleAuthError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, dto.MapUserToSafeUser(user))
}

func ParseUpdateProfileForm(ctx *gin.Context) *dto.UpdateProfileDTO {
	updateDTO := new(dto.UpdateProfileDTO)

	file, err := ctx.FormFile("avatar")
	if err == nil {
		savedPath, err := utils.SaveUploadedFile(ctx, file)
		if err == nil {
			updateDTO.UploadedPath = &savedPath
		}
	}

	if v := ctx.PostForm("firstName"); v != "" {
		updateDTO.FirstName = &v
	}
	if v := ctx.PostForm("lastName"); v != "" {
		updateDTO.LastName = &v
	}
	if v := ctx.PostForm("phone"); v != "" {
		updateDTO.Phone = &v
	}
	if v := ctx.PostForm("bio"); v != "" {
		updateDTO.Bio = &v
	}

	return updateDTO
}
