package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
)

type GuideRepository struct {
	db db.Querier
}

func NewGuideRepository(db db.Querier) *GuideRepository {
	return &GuideRepository{db}
}

func (r *GuideRepository) GetGuidesByTourID(ctx context.Context, guideID uuid.UUID) (*domain.Guide, error) {
	dbGuideWithUserID, err := r.db.GetGuideWithUserByID(ctx, mapper.UUIDToPgUUID(guideID))
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainGuide(&dbGuideWithUserID), nil
}

func (r *GuideRepository) GetGuidesByIDs(ctx context.Context, guideIDs []uuid.UUID) (map[uuid.UUID]*domain.Guide, error) {
	pgUUIDs := make([]pgtype.UUID, len(guideIDs))
	for i, id := range guideIDs {
		pgUUIDs[i] = mapper.UUIDToPgUUID(id)
	}

	dbGuides, err := r.db.GetGuidesWithUserByIDs(ctx, pgUUIDs)
	if err != nil {
		return nil, handleDBError(err)
	}

	result := make(map[uuid.UUID]*domain.Guide)
	for _, dbGuide := range dbGuides {
		result[mapper.PgUUIDToUUID(dbGuide.GuideID)] = mapper.MapToDomainGuideFromBatch(&dbGuide)
	}
	return result, nil
}
