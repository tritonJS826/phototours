package handler

import (
	"errors"
	"fmt"
	"net/http"
	"pt-general-go/internal/domain"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

// CreateTour godoc
// @Summary Create a new tour (Guide/Admin only)
// @Description Create a new tour (requires guide or admin role)
// @Tags tours
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param request body dto.CreateTourRequest true "Tour data"
// @Success 201 {object} domain.Tour
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /tours [post]
func (h *Handler) CreateTour(ctx *gin.Context) {
	var createTourRequest domain.CreateTourParams
	if err := ctx.ShouldBindJSON(&createTourRequest); err != nil {
		h.logger.Error("failed to bind create tour data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := createTourRequest.Validate(); err != nil {
		h.logger.Error("validation error", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	tour, err := h.services.TourService.CreateTour(ctx, &createTourRequest)
	if err != nil {
		h.logger.Error("failed to create tour", zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusCreated, tour)
}

// GetTourByID godoc
// @Summary Get tour by ID
// @Description Get full tour information by ID including guide, dates, photos, videos, materials, tags, and categories
// @Tags tours
// @Accept json
// @Produce json
// @Param id path int true "Tour ID"
// @Success 200 {object} domain.TourFull
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /tours/{id} [get]
func (h *Handler) GetTourByID(ctx *gin.Context) {
	idVal, err := strconv.ParseInt(ctx.Param("id"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse tour ID", zap.String("id", ctx.Param("id")), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Invalid tour ID: %v", err)})
		return
	}

	tour, err := h.services.TourService.GetTourFullByID(ctx, int32(idVal))
	if err != nil {
		h.logger.Error("failed to get tour by ID", zap.Int32("tour_id", int32(idVal)), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, tour)
}

// GetTourBySlug godoc
// @Summary Get tour by slug
// @Description Get full tour information by slug including guide, dates, photos, videos, materials, tags, and categories
// @Tags tours
// @Accept json
// @Produce json
// @Param slug path string true "Tour slug"
// @Success 200 {object} domain.TourFull
// @Failure 400 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /tours/slug/{slug} [get]
func (h *Handler) GetTourBySlug(ctx *gin.Context) {
	slug := ctx.Param("slug")
	if slug == "" {
		h.logger.Error("empty slug parameter")
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Slug is required"})
		return
	}

	tour, err := h.services.TourService.GetTourFullBySlug(ctx, slug)
	if err != nil {
		h.logger.Error("failed to get tour by slug", zap.String("slug", slug), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, tour)
}

// GetAllTours godoc
// @Summary Get all tours
// @Description Get a paginated list of tours with optional filters (location, date range, group size, price range, season)
// @Tags tours
// @Accept json
// @Produce json
// @Param page query int false "Page number" default(1)
// @Param limit query int false "Items per page (max 100)" default(20)
// @Param location query string false "Filter by location"
// @Param dateFrom query string false "Filter by start date (YYYY-MM-DD)"
// @Param dateTo query string false "Filter by end date (YYYY-MM-DD)"
// @Param groupSize query int false "Filter by minimum group size"
// @Param priceMin query number false "Filter by minimum price"
// @Param priceMax query number false "Filter by maximum price"
// @Param season query string false "Filter by season (winter, spring, summer, autumn)"
// @Success 200 {array} domain.Tour
// @Failure 400 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /tours [get]
func (h *Handler) GetAllTours(ctx *gin.Context) {
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

	filter, err := h.parseTourFilter(ctx)
	if err != nil {
		h.logger.Error("failed to parse tour filter", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := filter.Validate(); err != nil {
		h.logger.Error("invalid tour filter", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tours, err := h.services.TourService.GetAllTours(ctx, limit, offset, filter)
	if err != nil {
		h.logger.Error("failed to get tours", zap.Int32("limit", limit), zap.Int32("offset", offset), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.JSON(http.StatusOK, tours)
}

func (h *Handler) parseTourFilter(ctx *gin.Context) (*domain.TourFilter, error) {
	filter := &domain.TourFilter{}

	if location := ctx.Query("location"); location != "" {
		filter.Location = &location
	}

	if dateFrom := ctx.Query("dateFrom"); dateFrom != "" {
		parsed, err := time.Parse("2006-01-02", dateFrom)
		if err != nil {
			return nil, errors.New("invalid dateFrom, expected format: YYYY-MM-DD")
		}
		filter.DateFrom = &parsed
	}

	if dateTo := ctx.Query("dateTo"); dateTo != "" {
		parsed, err := time.Parse("2006-01-02", dateTo)
		if err != nil {
			return nil, errors.New("invalid dateTo, expected format: YYYY-MM-DD")
		}
		filter.DateTo = &parsed
	}

	if groupSize := ctx.Query("groupSize"); groupSize != "" {
		size, err := strconv.ParseInt(groupSize, 10, 32)
		if err != nil {
			return nil, errors.New("invalid groupSize")
		}
		groupSizeInt := int32(size)
		filter.GroupSize = &groupSizeInt
	}

	if priceMin := ctx.Query("priceMin"); priceMin != "" {
		price, err := strconv.ParseFloat(priceMin, 64)
		if err != nil {
			return nil, errors.New("invalid priceMin")
		}
		filter.PriceMin = &price
	}

	if priceMax := ctx.Query("priceMax"); priceMax != "" {
		price, err := strconv.ParseFloat(priceMax, 64)
		if err != nil {
			return nil, errors.New("invalid priceMax")
		}
		filter.PriceMax = &price
	}

	if season := ctx.Query("season"); season != "" {
		filter.Season = &season
	}

	return filter, nil
}

// UpdateTourByID godoc
// @Summary Update tour by ID (Guide/Admin only)
// @Description Update tour information by ID (requires guide or admin role)
// @Tags tours
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Tour ID"
// @Param request body dto.UpdateTourRequest true "Update data"
// @Success 200 {object} domain.Tour
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /tours/{id} [patch]
func (h *Handler) UpdateTourByID(ctx *gin.Context) {
	idVal, err := strconv.ParseInt(ctx.Param("id"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse tour ID", zap.String("id", ctx.Param("id")), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Invalid tour ID: %v", err)})
		return
	}

	var update domain.UpdateTourParams
	if err := ctx.ShouldBindJSON(&update); err != nil {
		h.logger.Error("failed to bind update tour data", zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request data"})
		return
	}

	if err := update.Validate(); err != nil {
		h.logger.Error("validation error", zap.Int32("tour_id", int32(idVal)), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	tour, err := h.services.TourService.UpdateTourByID(ctx, int32(idVal), &update)
	if err != nil {
		h.logger.Error("failed to update tour", zap.Int32("tour_id", int32(idVal)), zap.Error(err))
		h.handleError(ctx, err)
		return
	}

	ctx.JSON(http.StatusOK, tour)
}

// DeleteTourByID godoc
// @Summary Delete tour by ID (Guide/Admin only)
// @Description Delete a tour by ID (requires guide or admin role)
// @Tags tours
// @Accept json
// @Produce json
// @Security BearerAuth
// @Param id path int true "Tour ID"
// @Success 204 "No Content"
// @Failure 400 {object} map[string]string
// @Failure 401 {object} map[string]string
// @Failure 403 {object} map[string]string
// @Failure 404 {object} map[string]string
// @Failure 500 {object} map[string]string
// @Router /tours/{id} [delete]
func (h *Handler) DeleteTourByID(ctx *gin.Context) {
	idVal, err := strconv.ParseInt(ctx.Param("id"), 10, 32)
	if err != nil {
		h.logger.Error("failed to parse tour ID", zap.String("id", ctx.Param("id")), zap.Error(err))
		ctx.JSON(http.StatusBadRequest, gin.H{"error": fmt.Sprintf("Invalid tour ID: %v", err)})
		return
	}

	err = h.services.TourService.DeleteTourByID(ctx, int32(idVal))
	if err != nil {
		h.logger.Error("failed to delete tour", zap.Int32("tour_id", int32(idVal)), zap.Error(err))
		h.handleError(ctx, err)
		return
	}
	ctx.Status(http.StatusNoContent)
}
