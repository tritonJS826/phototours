package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainCategories(dbCategories []db.Category) []domain.Category {
	categories := make([]domain.Category, 0, len(dbCategories))
	for _, dbCategory := range dbCategories {
		categories = append(categories, domain.Category{
			ID:   dbCategory.ID,
			Name: dbCategory.Name,
		})
	}
	return categories
}

func MapToDomainCategoriesByTourIDs(dbCategories []db.GetCategoriesByTourIDsRow) map[int32][]domain.Category {
	result := make(map[int32][]domain.Category)
	for _, dbCategory := range dbCategories {
		categories := result[dbCategory.TourID]
		result[dbCategory.TourID] = append(categories, domain.Category{
			ID:   dbCategory.ID,
			Name: dbCategory.Name,
		})
	}
	return result
}
