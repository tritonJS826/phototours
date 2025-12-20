package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"time"
)

func MapToDomainPhotos(dbTours []db.Photo) []domain.Photo {
	Photos := make([]domain.Photo, 0, len(dbTours))
	for _, dbTour := range dbTours {
		Photo := domain.Photo{
			ID:        0,
			TourID:    0,
			URL:       "",
			CreatedAt: time.Time{},
		}

		if dbTour.Description.Valid {
			Photo.Description = &dbTour.Description.String
		}

		Photos = append(Photos, Photo)
	}
	return Photos
}

func MapToDomainPhotosByTourIDs(dbPhotos []db.Photo) map[int32][]domain.Photo {
	result := make(map[int32][]domain.Photo)
	for _, dbPhoto := range dbPhotos {
		photos := result[dbPhoto.TourID]
		photo := domain.Photo{
			ID:        dbPhoto.ID,
			TourID:    dbPhoto.TourID,
			URL:       dbPhoto.Url,
			CreatedAt: dbPhoto.CreatedAt.Time,
		}
		if dbPhoto.Description.Valid {
			photo.Description = &dbPhoto.Description.String
		}
		result[dbPhoto.TourID] = append(photos, photo)
	}
	return result
}
