package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainTourSummary(dbSummary []db.TourSummary) []domain.TourSummary {
	summary := make([]domain.TourSummary, 0, len(dbSummary))
	for _, dbSummaryItem := range dbSummary {
		summaryItem := domain.TourSummary{
			ID:        PgUUIDToUUID(dbSummaryItem.ID),
			TourID:    PgUUIDToUUID(dbSummaryItem.TourID),
			Name:      dbSummaryItem.Name,
			Value:     dbSummaryItem.Value,
			CreatedAt: dbSummaryItem.CreatedAt.Time,
		}
		summary = append(summary, summaryItem)
	}
	return summary
}

func MapToDomainTourSummaryByTourIDs(dbSummary []db.TourSummary) map[uuid.UUID][]domain.TourSummary {
	result := make(map[uuid.UUID][]domain.TourSummary)
	for _, dbSummaryItem := range dbSummary {
		tourID := PgUUIDToUUID(dbSummaryItem.TourID)
		summary := result[tourID]
		summaryItem := domain.TourSummary{
			ID:        PgUUIDToUUID(dbSummaryItem.ID),
			TourID:    tourID,
			Name:      dbSummaryItem.Name,
			Value:     dbSummaryItem.Value,
			CreatedAt: dbSummaryItem.CreatedAt.Time,
		}
		result[tourID] = append(summary, summaryItem)
	}
	return result
}

func MapToDomainTourSummaryToStrings(dbSummary []db.TourSummary) []string {
	summary := make([]string, 0, len(dbSummary))
	for _, dbSummaryItem := range dbSummary {
		summary = append(summary, dbSummaryItem.Value)
	}
	return summary
}

func MapToDomainTourSummaryToStringsByTourIDs(dbSummary []db.TourSummary) map[uuid.UUID][]string {
	result := make(map[uuid.UUID][]string)
	for _, dbSummaryItem := range dbSummary {
		tourID := PgUUIDToUUID(dbSummaryItem.TourID)
		result[tourID] = append(result[tourID], dbSummaryItem.Value)
	}
	return result
}
