package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainVideos(dbTours []db.Video) []domain.Video {
	videos := make([]domain.Video, 0, len(dbTours))
	for _, dbTour := range dbTours {
		video := domain.Video{
			ID:        PgUUIDToUUID(dbTour.ID),
			TourID:    PgUUIDToUUID(dbTour.TourID),
			URL:       dbTour.Url,
			CreatedAt: dbTour.CreatedAt.Time,
		}

		if dbTour.Description.Valid {
			video.Description = &dbTour.Description.String
		}

		videos = append(videos, video)
	}
	return videos
}

func MapToDomainVideosByTourIDs(dbVideos []db.Video) map[uuid.UUID][]domain.Video {
	result := make(map[uuid.UUID][]domain.Video)
	for _, dbVideo := range dbVideos {
		tourID := PgUUIDToUUID(dbVideo.TourID)
		videos := result[tourID]
		video := domain.Video{
			ID:        PgUUIDToUUID(dbVideo.ID),
			TourID:    tourID,
			URL:       dbVideo.Url,
			CreatedAt: dbVideo.CreatedAt.Time,
		}
		if dbVideo.Description.Valid {
			video.Description = &dbVideo.Description.String
		}
		result[tourID] = append(videos, video)
	}
	return result
}
