package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainTour(row *db.Tour) *domain.Tour {
	tour := &domain.Tour{
		ID:                PgUUIDToUUID(row.ID),
		Slug:              row.Slug,
		Title:             row.Title,
		Description:       row.Description,
		Difficulty:        domain.DifficultyLevel(row.Difficulty),
		Program:           row.Program,
		FAQ:               row.Faq,
		Languages:         row.Languages,
		AvailableMonths:   row.AvailableMonths,
		CreatedAt:         row.CreatedAt.Time,
		UpdatedAt:         row.UpdatedAt.Time,
		PopUp1Title:       row.PopUp1Title,
		PopUp1Description: row.PopUp1Description,
		PopUp2Title:       row.PopUp2Title,
		PopUp2Description: row.PopUp2Description,
		PopUp1ImageUrl:    row.PopUp1ImageUrl,
		PopUp2ImageUrl:    row.PopUp2ImageUrl,
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

	if row.GroupSize.Valid {
		tour.GroupSize = &row.GroupSize.Int32
	}

	if row.SpotsLeft.Valid {
		tour.SpotsLeft = &row.SpotsLeft.Int32
	}

	if row.Subtitle.Valid {
		tour.Subtitle = &row.Subtitle.String
	}

	return tour
}

func MapToDomainTours(rows []db.Tour) []domain.Tour {
	tours := make([]domain.Tour, 0, len(rows))
	for _, row := range rows {
		tour := domain.Tour{
			ID:                PgUUIDToUUID(row.ID),
			Slug:              row.Slug,
			Title:             row.Title,
			Description:       row.Description,
			Difficulty:        domain.DifficultyLevel(row.Difficulty),
			Program:           row.Program,
			FAQ:               row.Faq,
			Languages:         row.Languages,
			AvailableMonths:   row.AvailableMonths,
			CreatedAt:         row.CreatedAt.Time,
			UpdatedAt:         row.UpdatedAt.Time,
			PopUp1Title:       row.PopUp1Title,
			PopUp1Description: row.PopUp1Description,
			PopUp2Title:       row.PopUp2Title,
			PopUp2Description: row.PopUp2Description,
			PopUp1ImageUrl:    row.PopUp1ImageUrl,
			PopUp2ImageUrl:    row.PopUp2ImageUrl,
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

		if row.GroupSize.Valid {
			tour.GroupSize = &row.GroupSize.Int32
		}

		if row.SpotsLeft.Valid {
			tour.SpotsLeft = &row.SpotsLeft.Int32
		}

		if row.Subtitle.Valid {
			tour.Subtitle = &row.Subtitle.String
		}

		tours = append(tours, tour)
	}
	return tours
}
