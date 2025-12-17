package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainReviews(dbReviews []db.Review) []domain.Review {
	reviews := make([]domain.Review, 0, len(dbReviews))
	for _, dbReview := range dbReviews {
		reviews = append(reviews, domain.Review{
			CreatedAt: dbReview.CreatedAt.Time,
			Comment:   dbReview.Comment.String,
			ID:        dbReview.ID,
			TourID:    dbReview.TourID,
			UserID:    dbReview.UserID,
			Rating:    dbReview.Rating,
		})
	}
	return reviews
}

func MapToDomainReviewsByTourIDs(dbReviews []db.Review) map[int32][]domain.Review {
	result := make(map[int32][]domain.Review)
	for _, dbReview := range dbReviews {
		reviews := result[dbReview.TourID]
		result[dbReview.TourID] = append(reviews, domain.Review{
			ID:        dbReview.ID,
			TourID:    dbReview.TourID,
			UserID:    dbReview.UserID,
			Rating:    dbReview.Rating,
			Comment:   dbReview.Comment.String,
			CreatedAt: dbReview.CreatedAt.Time,
		})
	}
	return result
}
