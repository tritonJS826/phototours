package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainCategories(dbCategories []db.Category) []domain.Category {
	categories := make([]domain.Category, 0, len(dbCategories))
	for _, dbCategory := range dbCategories {
		categories = append(categories, domain.Category{
			ID:   PgUUIDToUUID(dbCategory.ID),
			Name: dbCategory.Name,
		})
	}
	return categories
}

func MapToDomainCategoriesByTourIDs(dbCategories []db.GetCategoriesByTourIDsRow) map[uuid.UUID][]domain.Category {
	result := make(map[uuid.UUID][]domain.Category)
	for _, dbCategory := range dbCategories {
		tourID := PgUUIDToUUID(dbCategory.TourID)
		categories := result[tourID]
		result[tourID] = append(categories, domain.Category{
			ID:   PgUUIDToUUID(dbCategory.ID),
			Name: dbCategory.Name,
		})
	}
	return result
}
