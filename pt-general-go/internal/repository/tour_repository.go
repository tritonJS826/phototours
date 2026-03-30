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
		Title:             createTour.Title,
		Description:       createTour.Description,
		Difficulty:        db.DifficultyLevel(createTour.Difficulty),
		IsShowVip:         createTour.IsShowVip,
		IsShowRooms:       createTour.IsShowRooms,
		VipPrice:          createTour.VipPrice,
		RoomPrice:         createTour.RoomPrice,
		Program:           createTour.Program,
		Faq:               createTour.FAQ,
		Languages:         createTour.Languages,
		AvailableMonths:   createTour.AvailableMonths,
		PopUp1Title:       createTour.PopUp1Title,
		PopUp1Description: createTour.PopUp1Description,
		PopUp2Title:       createTour.PopUp2Title,
		PopUp2Description: createTour.PopUp2Description,
		PopUp1ImageUrl:    createTour.PopUp1ImageUrl,
		PopUp2ImageUrl:    createTour.PopUp2ImageUrl,
		CtaTitle:          createTour.CtaTitle,
		CtaDescription:    createTour.CtaDescription,
	}

	params.StartLocation = pgtype.Text{String: createTour.StartLocation, Valid: true}
	params.EndLocation = pgtype.Text{String: createTour.EndLocation, Valid: true}
	params.DurationDays = pgtype.Text{String: createTour.DurationDays, Valid: true}
	params.MinAge = pgtype.Int4{Int32: createTour.MinAge, Valid: true}
	params.CoverUrl = pgtype.Text{String: createTour.CoverURL, Valid: true}

	if createTour.GroupSize != nil {
		params.GroupSize = pgtype.Int4{Int32: *createTour.GroupSize, Valid: true}
	}

	if createTour.SpotsLeft != nil {
		params.SpotsLeft = pgtype.Int4{Int32: *createTour.SpotsLeft, Valid: true}
	}

	if createTour.Subtitle != nil {
		params.Subtitle = pgtype.Text{String: *createTour.Subtitle, Valid: true}
	}

	tour, err := r.db.CreateTour(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}

	return mapper.MapToDomainCreateTour(tour), nil
}

func (r *TourRepository) GetTourByID(ctx context.Context, id uuid.UUID) (*domain.Tour, error) {
	tour, err := r.db.GetTourByID(ctx, mapper.UUIDToPgUUID(id))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainGetTourByID(tour), nil
}

func (r *TourRepository) GetTourBySlug(ctx context.Context, slug string) (*domain.Tour, error) {
	tour, err := r.db.GetTourBySlug(ctx, slug)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainGetTourBySlug(tour), nil
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
	if req.FAQ != nil {
		params.Faq = *req.FAQ
	}
	if req.IsShowVip != nil {
		params.IsShowVip = pgtype.Bool{Bool: *req.IsShowVip, Valid: true}
	}
	if req.IsShowRooms != nil {
		params.IsShowRooms = pgtype.Bool{Bool: *req.IsShowRooms, Valid: true}
	}
	if req.VipPrice != nil {
		params.VipPrice = pgtype.Int4{Int32: *req.VipPrice, Valid: true}
	}
	if req.RoomPrice != nil {
		params.RoomPrice = pgtype.Int4{Int32: *req.RoomPrice, Valid: true}
	}
	if req.StartLocation != nil {
		params.StartLocation = pgtype.Text{String: *req.StartLocation, Valid: true}
	}
	if req.EndLocation != nil {
		params.EndLocation = pgtype.Text{String: *req.EndLocation, Valid: true}
	}
	if req.DurationDays != nil {
		params.DurationDays = pgtype.Text{String: *req.DurationDays, Valid: true}
	}
	if req.MinAge != nil {
		params.MinAge = pgtype.Int4{Int32: *req.MinAge, Valid: true}
	}
	if req.CoverURL != nil {
		params.CoverUrl = pgtype.Text{String: *req.CoverURL, Valid: true}
	}
	if req.Languages != nil {
		params.Languages = *req.Languages
	}
	if req.AvailableMonths != nil {
		params.AvailableMonths = *req.AvailableMonths
	}
	if req.GroupSize != nil {
		params.GroupSize = pgtype.Int4{Int32: *req.GroupSize, Valid: true}
	}
	if req.SpotsLeft != nil {
		params.SpotsLeft = pgtype.Int4{Int32: *req.SpotsLeft, Valid: true}
	}
	if req.Subtitle != nil {
		params.Subtitle = pgtype.Text{String: *req.Subtitle, Valid: true}
	}

	tour, err := r.db.UpdateTourByID(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainUpdateTourByID(tour), nil
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

func (r *TourRepository) GetSimilarToursByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Tour, error) {
	rows, err := r.db.GetSimilarToursByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainSimilarTours(rows), nil
}

func (r *TourRepository) GetTourDatesByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.TourDate, error) {
	rows, err := r.db.GetTourDatesByTourID(ctx, mapper.UUIDToPgUUID(tourID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainTourDates(rows), nil
}
