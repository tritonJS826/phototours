package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainTourDates(dbTourDates []db.TourDate) []domain.TourDate {
	tourDates := make([]domain.TourDate, 0, len(dbTourDates))
	for _, dbTourDate := range dbTourDates {
		tourDates = append(tourDates, domain.TourDate{
			ID:          PgUUIDToUUID(dbTourDate.ID),
			TourID:      PgUUIDToUUID(dbTourDate.TourID),
			DateFrom:    dbTourDate.DateFrom.Time,
			DateTo:      dbTourDate.DateTo.Time,
			IsAvailable: dbTourDate.IsAvailable,
			CreatedAt:   dbTourDate.CreatedAt.Time,
			UpdatedAt:   dbTourDate.UpdatedAt.Time,
			GroupSize:   dbTourDate.GroupSize,
		})
	}
	return tourDates
}

func MapToDomainTourDatesByTourIDs(dbTourDates []db.TourDate) map[uuid.UUID][]domain.TourDate {
	result := make(map[uuid.UUID][]domain.TourDate)
	for _, dbTourDate := range dbTourDates {
		tourID := PgUUIDToUUID(dbTourDate.TourID)
		dates := result[tourID]
		result[tourID] = append(dates, domain.TourDate{
			ID:          PgUUIDToUUID(dbTourDate.ID),
			TourID:      tourID,
			DateFrom:    dbTourDate.DateFrom.Time,
			DateTo:      dbTourDate.DateTo.Time,
			IsAvailable: dbTourDate.IsAvailable,
			CreatedAt:   dbTourDate.CreatedAt.Time,
			UpdatedAt:   dbTourDate.UpdatedAt.Time,
			GroupSize:   dbTourDate.GroupSize,
		})
	}
	return result
}
