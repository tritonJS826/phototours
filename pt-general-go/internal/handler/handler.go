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

func (h *Handler) handleError(ctx *gin.Context, err error) {
	switch {
	case errors.Is(err, domain.ErrValidation):
		ctx.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})

	case errors.Is(err, domain.ErrInvalidCredentials), errors.Is(err, domain.ErrInvalidPassword):
		ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": err.Error()})

	case errors.Is(err, domain.ErrNotFound):
		ctx.AbortWithStatusJSON(http.StatusNotFound, gin.H{"error": err.Error()})

	case errors.Is(err, domain.ErrAlreadyExists):
		ctx.AbortWithStatusJSON(http.StatusConflict, gin.H{"error": err.Error()})

	default:
		ctx.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}
}
