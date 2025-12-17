package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainVideos(dbTours []db.Video) []domain.Video {
	videos := make([]domain.Video, 0, len(dbTours))
	for _, dbTour := range dbTours {
		video := domain.Video{
			ID:        dbTour.ID,
			TourID:    dbTour.TourID,
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

func MapToDomainVideosByTourIDs(dbVideos []db.Video) map[int32][]domain.Video {
	result := make(map[int32][]domain.Video)
	for _, dbVideo := range dbVideos {
		videos := result[dbVideo.TourID]
		video := domain.Video{
			ID:        dbVideo.ID,
			TourID:    dbVideo.TourID,
			URL:       dbVideo.Url,
			CreatedAt: dbVideo.CreatedAt.Time,
		}
		if dbVideo.Description.Valid {
			video.Description = &dbVideo.Description.String
		}
		result[dbVideo.TourID] = append(videos, video)
	}
	return result
}
