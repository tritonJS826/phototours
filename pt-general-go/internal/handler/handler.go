package handler

import (
	"pt-general-go/internal/config"
	"pt-general-go/internal/service"
)

type Handler struct {
	services *service.Service
	cfg      *config.Config
}

func NewHandler(cfg *config.Config, services *service.Service) *Handler {
	return &Handler{
		cfg:      cfg,
		services: services,
	}
}
