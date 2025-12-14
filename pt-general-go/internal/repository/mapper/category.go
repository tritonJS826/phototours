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
