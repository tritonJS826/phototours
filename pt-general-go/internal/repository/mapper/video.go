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
