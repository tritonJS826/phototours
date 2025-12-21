package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"
	"strings"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type TourRepository struct {
	db db.Querier
}

func NewTourRepository(db db.Querier) *TourRepository {
	return &TourRepository{db}
}

func (r *TourRepository) CreateTour(ctx context.Context, createTour *domain.CreateTourParams) (*domain.Tour, error) {
	params := db.CreateTourParams{
		Title:           createTour.Title,
		Description:     createTour.Description,
		Difficulty:      db.DifficultyLevel(createTour.Difficulty),
		Program:         createTour.Program,
		Languages:       createTour.Languages,
		AvailableMonths: createTour.AvailableMonths,
	}

	if createTour.Price != nil {
		params.Price = pgtype.Float8{Float64: *createTour.Price, Valid: true}
	}

	if createTour.StartLocation != nil {
		params.StartLocation = pgtype.Text{String: *createTour.StartLocation, Valid: true}
	}

	if createTour.EndLocation != nil {
		params.EndLocation = pgtype.Text{String: *createTour.EndLocation, Valid: true}
	}

	if createTour.DurationDays != nil {
		params.DurationDays = pgtype.Int4{Int32: *createTour.DurationDays, Valid: true}
	}

	if createTour.MinAge != nil {
		params.MinAge = pgtype.Int4{Int32: *createTour.MinAge, Valid: true}
	}

	if createTour.CoverURL != nil {
		params.CoverUrl = pgtype.Text{String: *createTour.CoverURL, Valid: true}
	}

	if createTour.GuideID != nil {
		params.GuideID = mapper.UUIDPtrToPgUUID(createTour.GuideID)
	}

	tour, err := r.db.CreateTour(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}

	return mapper.MapToDomainTour(&tour), nil
}

func (r *TourRepository) GetTourByID(ctx context.Context, id uuid.UUID) (*domain.Tour, error) {
	tour, err := r.db.GetTourByID(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTour(&tour), nil
}

func (r *TourRepository) GetTourBySlug(ctx context.Context, slug string) (*domain.Tour, error) {
	tour, err := r.db.GetTourBySlug(ctx, slug)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTour(&tour), nil
}

func (r *TourRepository) GetTours(ctx context.Context, limit, offset int32, filters *domain.TourFilter) ([]domain.Tour, error) {
	params := db.GetToursParams{
		OffsetCount: offset,
		LimitCount:  limit,
	}

	if filters != nil {
		if filters.Location != nil {
			params.Location = pgtype.Text{String: *filters.Location, Valid: true}
		}
		if filters.DateFrom != nil {
			params.DateFrom = pgtype.Timestamp{Time: *filters.DateFrom, Valid: true}
		}
		if filters.DateTo != nil {
			params.DateTo = pgtype.Timestamp{Time: *filters.DateTo, Valid: true}
		}
		if filters.GroupSize != nil {
			params.GroupSize = pgtype.Int4{Int32: *filters.GroupSize, Valid: true}
		}
		if filters.PriceMin != nil {
			params.PriceMin = pgtype.Float8{Float64: *filters.PriceMin, Valid: true}
		}
		if filters.PriceMax != nil {
			params.PriceMax = pgtype.Float8{Float64: *filters.PriceMax, Valid: true}
		}
		if filters.Season != nil {
			if months, ok := domain.SeasonMonths[strings.ToLower(*filters.Season)]; ok {
				params.SeasonMonths = months
			}
		}
	}

	tours, err := r.db.GetTours(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTours(tours), nil
}

func (r *TourRepository) UpdateTourByID(ctx context.Context, id uuid.UUID, req *domain.UpdateTourParams) (*domain.Tour, error) {
	params := db.UpdateTourByIDParams{
		ID: mapper.UUIDToPgUUID(id),
	}

	if req.Title != nil {
		params.Title = pgtype.Text{String: *req.Title, Valid: true}
	}
	if req.Slug != nil {
		params.Slug = pgtype.Text{String: *req.Slug, Valid: true}
	}
	if req.Description != nil {
		params.Description = pgtype.Text{String: *req.Description, Valid: true}
	}
	if req.Difficulty != nil {
		params.Difficulty = db.NullDifficultyLevel{
			DifficultyLevel: db.DifficultyLevel(*req.Difficulty),
			Valid:           true,
		}
	}
	if req.Program != nil {
		params.Program = *req.Program
	}
	if req.Price != nil {
		params.Price = pgtype.Float8{Float64: *req.Price, Valid: true}
	}
	if req.StartLocation != nil {
		params.StartLocation = pgtype.Text{String: *req.StartLocation, Valid: true}
	}
	if req.EndLocation != nil {
		params.EndLocation = pgtype.Text{String: *req.EndLocation, Valid: true}
	}
	if req.DurationDays != nil {
		params.DurationDays = pgtype.Int4{Int32: *req.DurationDays, Valid: true}
	}
	if req.MinAge != nil {
		params.MinAge = pgtype.Int4{Int32: *req.MinAge, Valid: true}
	}
	if req.CoverURL != nil {
		params.CoverUrl = pgtype.Text{String: *req.CoverURL, Valid: true}
	}
	if req.GuideID != nil {
		params.GuideID = mapper.UUIDPtrToPgUUID(req.GuideID)
	}
	if req.Languages != nil {
		params.Languages = *req.Languages
	}
	if req.AvailableMonths != nil {
		params.AvailableMonths = *req.AvailableMonths
	}

	tour, err := r.db.UpdateTourByID(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTour(&tour), nil
}

func (r *TourRepository) DeleteTourByID(ctx context.Context, id uuid.UUID) error {
	rowsAffected, err := r.db.DeleteTourByID(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return handleDBError(err)
	}
	if rowsAffected == 0 {
		return domain.ErrNotFound
	}
	return nil
}
