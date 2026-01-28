package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainTour(row *db.Tour) *domain.Tour {
	tour := &domain.Tour{
		ID:              PgUUIDToUUID(row.ID),
		Slug:            row.Slug,
		Title:           row.Title,
		Description:     row.Description,
		Difficulty:      domain.DifficultyLevel(row.Difficulty),
		Program:         row.Program,
		Languages:       row.Languages,
		AvailableMonths: row.AvailableMonths,
		CreatedAt:       row.CreatedAt.Time,
		UpdatedAt:       row.UpdatedAt.Time,
	}

	if row.Price.Valid {
		tour.Price = &row.Price.Float64
	}

	if row.StartLocation.Valid {
		tour.StartLocation = &row.StartLocation.String
	}

	if row.EndLocation.Valid {
		tour.EndLocation = &row.EndLocation.String
	}

	if row.Location.Valid {
		tour.Location = &row.Location.String
	}

	if row.DurationDays.Valid {
		tour.DurationDays = &row.DurationDays.Int32
	}

	if row.MinAge.Valid {
		tour.MinAge = &row.MinAge.Int32
	}

	if row.CoverUrl.Valid {
		tour.CoverURL = &row.CoverUrl.String
	}

	tour.GuideID = PgUUIDToUUIDPtr(row.GuideID)

	return tour
}

func MapToDomainTours(rows []db.Tour) []domain.Tour {
	tours := make([]domain.Tour, 0, len(rows))
	for _, row := range rows {
		tour := domain.Tour{
			ID:              PgUUIDToUUID(row.ID),
			Slug:            row.Slug,
			Title:           row.Title,
			Description:     row.Description,
			Difficulty:      domain.DifficultyLevel(row.Difficulty),
			Program:         row.Program,
			Languages:       row.Languages,
			AvailableMonths: row.AvailableMonths,
			CreatedAt:       row.CreatedAt.Time,
			UpdatedAt:       row.UpdatedAt.Time,
		}

		if row.Price.Valid {
			tour.Price = &row.Price.Float64
		}

		if row.StartLocation.Valid {
			tour.StartLocation = &row.StartLocation.String
		}

		if row.EndLocation.Valid {
			tour.EndLocation = &row.EndLocation.String
		}

		if row.Location.Valid {
			tour.Location = &row.Location.String
		}

		if row.DurationDays.Valid {
			tour.DurationDays = &row.DurationDays.Int32
		}

		if row.MinAge.Valid {
			tour.MinAge = &row.MinAge.Int32
		}

		if row.CoverUrl.Valid {
			tour.CoverURL = &row.CoverUrl.String
		}

		tour.GuideID = PgUUIDToUUIDPtr(row.GuideID)

		tours = append(tours, tour)
	}
	return tours
}
