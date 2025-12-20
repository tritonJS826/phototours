package mapper

import (
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainTags(dbTags []db.Tag) []domain.Tag {
	tags := make([]domain.Tag, 0, len(dbTags))
	for _, dbTag := range dbTags {
		tags = append(tags, domain.Tag{
			ID:   dbTag.ID,
			Name: dbTag.Name,
		})
	}
	return tags
}

func MapToDomainTagsByTourIDs(dbTags []db.GetTagsByTourIDsRow) map[int32][]domain.Tag {
	result := make(map[int32][]domain.Tag)
	for _, dbTag := range dbTags {
		tags := result[dbTag.TourID]
		result[dbTag.TourID] = append(tags, domain.Tag{
			ID:   dbTag.ID,
			Name: dbTag.Name,
		})
	}
	return result
}
