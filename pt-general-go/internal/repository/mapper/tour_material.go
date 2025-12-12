package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainTourMaterials(dbTourMaterials []db.TourMaterial) []domain.TourMaterial {
	tourMaterials := make([]domain.TourMaterial, 0, len(dbTourMaterials))
	for _, dbTourMaterial := range dbTourMaterials {
		tourMaterials = append(tourMaterials, domain.TourMaterial{
			ID:        dbTourMaterial.ID,
			TourID:    dbTourMaterial.TourID,
			Title:     dbTourMaterial.Title,
			URL:       dbTourMaterial.Url,
			Type:      domain.MaterialType(dbTourMaterial.Type),
			CreatedAt: dbTourMaterial.CreatedAt.Time,
		})
	}
	return tourMaterials
}
