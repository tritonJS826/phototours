package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainTourIncluded(dbIncluded []db.TourIncluded) []domain.TourIncluded {
	included := make([]domain.TourIncluded, 0, len(dbIncluded))
	for _, dbIncludedItem := range dbIncluded {
		includedItem := domain.TourIncluded{
			ID:        PgUUIDToUUID(dbIncludedItem.ID),
			TourID:    PgUUIDToUUID(dbIncludedItem.TourID),
			Included:  dbIncludedItem.Included,
			CreatedAt: dbIncludedItem.CreatedAt.Time,
		}
		included = append(included, includedItem)
	}
	return included
}

func MapToDomainTourIncludedByTourIDs(dbIncluded []db.TourIncluded) map[uuid.UUID][]domain.TourIncluded {
	result := make(map[uuid.UUID][]domain.TourIncluded)
	for _, dbIncludedItem := range dbIncluded {
		tourID := PgUUIDToUUID(dbIncludedItem.TourID)
		included := result[tourID]
		includedItem := domain.TourIncluded{
			ID:        PgUUIDToUUID(dbIncludedItem.ID),
			TourID:    tourID,
			Included:  dbIncludedItem.Included,
			CreatedAt: dbIncludedItem.CreatedAt.Time,
		}
		result[tourID] = append(included, includedItem)
	}
	return result
}

func MapToDomainTourIncludedToStrings(dbIncluded []db.TourIncluded) []string {
	included := make([]string, 0, len(dbIncluded))
	for _, dbIncludedItem := range dbIncluded {
		included = append(included, dbIncludedItem.Included)
	}
	return included
}

func MapToDomainTourIncludedToStringsByTourIDs(dbIncluded []db.TourIncluded) map[uuid.UUID][]string {
	result := make(map[uuid.UUID][]string)
	for _, dbIncludedItem := range dbIncluded {
		tourID := PgUUIDToUUID(dbIncludedItem.TourID)
		result[tourID] = append(result[tourID], dbIncludedItem.Included)
	}
	return result
}
