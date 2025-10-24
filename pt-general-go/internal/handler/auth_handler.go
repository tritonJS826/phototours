package handler

import (
	"errors"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"

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
		// Обработка конкретных ошибок
		switch {
		case errors.Is(err, domain.ErrUserAlreadyExists):
			ctx.JSON(http.StatusConflict, gin.H{"error": "User with this email already exists"})
		case errors.Is(err, domain.ErrInvalidPassword):
			ctx.JSON(http.StatusBadRequest, gin.H{"error": "Password hashing failed"})
		default:
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Registration failed"})
		}
		return
	}

	ctx.JSON(http.StatusCreated, dto.RegisterResponse{
		User:  dto.MapUserToSafeUser(result.User),
		Token: result.Token,
	})
}

func (h *Handler) Login(c *gin.Context) {
	var dto dto.LoginDTO
	if err := c.ShouldBindJSON(&dto); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid data"})
		return
	}

	// TODO: authService.Login

	// user, err := h.Q.GetUserByEmail(c, dto.Email)
	// if err != nil {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid credentials"})
	// 	return
	// }
	//
	// if !utils.VerifyPassword(dto.Password, user.Password) {
	// 	c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid credentials"})
	// 	return
	// }
	//
	// token, _ := utils.GenerateToken(user.ID)

	// c.JSON(http.StatusOK, gin.H{"message": "Logged in", "user": user, "token": token})
}
