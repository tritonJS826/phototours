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
