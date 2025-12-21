package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainPhotos(dbTours []db.Photo) []domain.Photo {
	Photos := make([]domain.Photo, 0, len(dbTours))
	for _, dbTour := range dbTours {
		Photo := domain.Photo{
			ID:        PgUUIDToUUID(dbTour.ID),
			TourID:    PgUUIDToUUID(dbTour.TourID),
			URL:       dbTour.Url,
			CreatedAt: dbTour.CreatedAt.Time,
		}

		if dbTour.Description.Valid {
			Photo.Description = &dbTour.Description.String
		}

		Photos = append(Photos, Photo)
	}
	return Photos
}

func MapToDomainPhotosByTourIDs(dbPhotos []db.Photo) map[uuid.UUID][]domain.Photo {
	result := make(map[uuid.UUID][]domain.Photo)
	for _, dbPhoto := range dbPhotos {
		tourID := PgUUIDToUUID(dbPhoto.TourID)
		photos := result[tourID]
		photo := domain.Photo{
			ID:        PgUUIDToUUID(dbPhoto.ID),
			TourID:    tourID,
			URL:       dbPhoto.Url,
			CreatedAt: dbPhoto.CreatedAt.Time,
		}
		if dbPhoto.Description.Valid {
			photo.Description = &dbPhoto.Description.String
		}
		result[tourID] = append(photos, photo)
	}
	return result
}
