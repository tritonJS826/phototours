package handler

import (
	"errors"
	"net/http"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/service"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type Handler struct {
	services *service.Service
	cfg      *config.Config
	logger   *zap.Logger
}

func NewHandler(cfg *config.Config, services *service.Service, logger *zap.Logger) *Handler {
	return &Handler{
		cfg:      cfg,
		services: services,
		logger:   logger,
	}
}

func (h *Handler) handleAuthError(ctx *gin.Context, err error) {
	switch {
	case errors.Is(err, domain.ErrNotFound),
		errors.Is(err, domain.ErrInvalidCredentials):
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid email or password"})

	case errors.Is(err, domain.ErrAlreadyExists):
		ctx.AbortWithStatusJSON(http.StatusConflict, gin.H{"error": "User with this email already exists"})

	case errors.Is(err, domain.ErrInvalidPassword):
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Password hashing failed"})

	default:
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Internal server error"})
	}
}
