package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainReviews(dbReviews []db.GetReviewsByTourIDRow) []domain.Review {
	reviews := make([]domain.Review, 0, len(dbReviews))
	for _, dbReview := range dbReviews {
		reviews = append(reviews, domain.Review{
			CreatedAt: dbReview.CreatedAt.Time,
			Comment:   dbReview.Comment.String,
			ID:        PgUUIDToUUID(dbReview.ID),
			TourID:    PgUUIDToUUID(dbReview.TourID),
			UserID:    PgUUIDToUUID(dbReview.UserID),
			Rating:    dbReview.Rating,
			UserName:  dbReview.UserName,
			Link:      dbReview.Link,
			Image:     dbReview.Image,
		})
	}
	return reviews
}

func MapToDomainReviewsByTourIDs(dbReviews []db.GetReviewsByTourIDsRow) map[uuid.UUID][]domain.Review {
	result := make(map[uuid.UUID][]domain.Review)
	for _, dbReview := range dbReviews {
		tourID := PgUUIDToUUID(dbReview.TourID)
		reviews := result[tourID]
		result[tourID] = append(reviews, domain.Review{
			ID:        PgUUIDToUUID(dbReview.ID),
			TourID:    tourID,
			UserID:    PgUUIDToUUID(dbReview.UserID),
			Rating:    dbReview.Rating,
			Comment:   dbReview.Comment.String,
			CreatedAt: dbReview.CreatedAt.Time,
			UserName:  dbReview.UserName,
			Link:      dbReview.Link,
			Image:     dbReview.Image,
		})
	}
	return result
}
