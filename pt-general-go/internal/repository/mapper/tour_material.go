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

func MapToDomainTourMaterialsByTourIDs(dbTourMaterials []db.TourMaterial) map[int32][]domain.TourMaterial {
	result := make(map[int32][]domain.TourMaterial)
	for _, dbTourMaterial := range dbTourMaterials {
		materials := result[dbTourMaterial.TourID]
		result[dbTourMaterial.TourID] = append(materials, domain.TourMaterial{
			ID:        dbTourMaterial.ID,
			TourID:    dbTourMaterial.TourID,
			Title:     dbTourMaterial.Title,
			URL:       dbTourMaterial.Url,
			Type:      domain.MaterialType(dbTourMaterial.Type),
			CreatedAt: dbTourMaterial.CreatedAt.Time,
		})
	}
	return result
}
