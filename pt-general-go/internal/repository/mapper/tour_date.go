package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainTourDates(dbTourDates []db.TourDate) []domain.TourDate {
	tourDates := make([]domain.TourDate, 0, len(dbTourDates))
	for _, dbTourDate := range dbTourDates {
		tourDates = append(tourDates, domain.TourDate{
			ID:          dbTourDate.ID,
			TourID:      dbTourDate.TourID,
			Date:        dbTourDate.Date.Time,
			IsAvailable: dbTourDate.IsAvailable,
			CreatedAt:   dbTourDate.CreatedAt.Time,
			UpdatedAt:   dbTourDate.UpdatedAt.Time,
			GroupSize:   dbTourDate.GroupSize,
		})
	}
	return tourDates
}
