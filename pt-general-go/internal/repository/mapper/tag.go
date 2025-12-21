package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

func MapToDomainTags(dbTags []db.Tag) []domain.Tag {
	tags := make([]domain.Tag, 0, len(dbTags))
	for _, dbTag := range dbTags {
		tags = append(tags, domain.Tag{
			ID:   PgUUIDToUUID(dbTag.ID),
			Name: dbTag.Name,
		})
	}
	return tags
}

func MapToDomainTagsByTourIDs(dbTags []db.GetTagsByTourIDsRow) map[uuid.UUID][]domain.Tag {
	result := make(map[uuid.UUID][]domain.Tag)
	for _, dbTag := range dbTags {
		tourID := PgUUIDToUUID(dbTag.TourID)
		tags := result[tourID]
		result[tourID] = append(tags, domain.Tag{
			ID:   PgUUIDToUUID(dbTag.ID),
			Name: dbTag.Name,
		})
	}
	return result
}
