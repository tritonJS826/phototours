package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainTourMaterials(dbTourMaterials []db.TourMaterial) []domain.TourMaterial {
	tourMaterials := make([]domain.TourMaterial, 0, len(dbTourMaterials))
	for _, dbTourMaterial := range dbTourMaterials {
		tourMaterials = append(tourMaterials, domain.TourMaterial{
			ID:        PgUUIDToUUID(dbTourMaterial.ID),
			TourID:    PgUUIDToUUID(dbTourMaterial.TourID),
			Title:     dbTourMaterial.Title,
			URL:       dbTourMaterial.Url,
			Type:      domain.MaterialType(dbTourMaterial.Type),
			CreatedAt: dbTourMaterial.CreatedAt.Time,
		})
	}
	return tourMaterials
}

func MapToDomainTourMaterialsByTourIDs(dbTourMaterials []db.TourMaterial) map[uuid.UUID][]domain.TourMaterial {
	result := make(map[uuid.UUID][]domain.TourMaterial)
	for _, dbTourMaterial := range dbTourMaterials {
		tourID := PgUUIDToUUID(dbTourMaterial.TourID)
		materials := result[tourID]
		result[tourID] = append(materials, domain.TourMaterial{
			ID:        PgUUIDToUUID(dbTourMaterial.ID),
			TourID:    tourID,
			Title:     dbTourMaterial.Title,
			URL:       dbTourMaterial.Url,
			Type:      domain.MaterialType(dbTourMaterial.Type),
			CreatedAt: dbTourMaterial.CreatedAt.Time,
		})
	}
	return result
}
