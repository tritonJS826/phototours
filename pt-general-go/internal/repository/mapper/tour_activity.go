package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainTourActivities(dbActivities []db.TourActivity) []domain.TourActivity {
	activities := make([]domain.TourActivity, 0, len(dbActivities))
	for _, dbActivity := range dbActivities {
		activity := domain.TourActivity{
			ID:        PgUUIDToUUID(dbActivity.ID),
			TourID:    PgUUIDToUUID(dbActivity.TourID),
			Activity:  dbActivity.Activity,
			CreatedAt: dbActivity.CreatedAt.Time,
		}
		activities = append(activities, activity)
	}
	return activities
}

func MapToDomainTourActivitiesByTourIDs(dbActivities []db.TourActivity) map[uuid.UUID][]domain.TourActivity {
	result := make(map[uuid.UUID][]domain.TourActivity)
	for _, dbActivity := range dbActivities {
		tourID := PgUUIDToUUID(dbActivity.TourID)
		activities := result[tourID]
		activity := domain.TourActivity{
			ID:        PgUUIDToUUID(dbActivity.ID),
			TourID:    tourID,
			Activity:  dbActivity.Activity,
			CreatedAt: dbActivity.CreatedAt.Time,
		}
		result[tourID] = append(activities, activity)
	}
	return result
}

func MapToDomainTourActivitiesToStrings(dbActivities []db.TourActivity) []string {
	activities := make([]string, 0, len(dbActivities))
	for _, dbActivity := range dbActivities {
		activities = append(activities, dbActivity.Activity)
	}
	return activities
}

func MapToDomainTourActivitiesToStringsByTourIDs(dbActivities []db.TourActivity) map[uuid.UUID][]string {
	result := make(map[uuid.UUID][]string)
	for _, dbActivity := range dbActivities {
		tourID := PgUUIDToUUID(dbActivity.TourID)
		activities := result[tourID]
		result[tourID] = append(activities, dbActivity.Activity)
	}
	return result
}
