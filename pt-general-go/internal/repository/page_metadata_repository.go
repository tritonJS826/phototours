package repository

import (
	"context"
	"errors"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/jackc/pgerrcode"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgtype"
)

type PageMetadataRepository struct {
	db db.Querier
}

func NewPageMetadataRepository(db db.Querier) *PageMetadataRepository {
	return &PageMetadataRepository{db}
}

func (r *PageMetadataRepository) CreatePageMetadata(ctx context.Context, pageMetadata *domain.PageMetadata) (*domain.PageMetadata, error) {
	dbPageMetadata, err := r.db.CreatePageMetadata(ctx, db.CreatePageMetadataParams{
		Url:  pageMetadata.URL,
		Tags: pageMetadata.Tags,
	})
	if err != nil {
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) {
			if pgErr.Code == pgerrcode.UniqueViolation {
				return nil, domain.ErrAlreadyExists
			}
		}
		return nil, err
	}
	return &domain.PageMetadata{
		URL:  dbPageMetadata.Url,
		Tags: dbPageMetadata.Tags,
	}, nil
}

func (r *PageMetadataRepository) GetPageMetadata(ctx context.Context, url string) (*domain.PageMetadata, error) {
	dbPageMetadata, err := r.db.GetPageMetadata(ctx, url)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}
	return &domain.PageMetadata{
		URL:  dbPageMetadata.Url,
		Tags: dbPageMetadata.Tags,
	}, nil
}

func (r *PageMetadataRepository) UpdatePageMetadata(ctx context.Context, update *domain.UpdatePageMetadata) (*domain.PageMetadata, error) {
	var newURL, tags pgtype.Text

	if update.NewURL != nil && *update.NewURL != "" {
		newURL = pgtype.Text{String: *update.NewURL, Valid: true}
	}

	if update.Tags != nil && *update.Tags != "" {
		tags = pgtype.Text{String: *update.Tags, Valid: true}
	}

	params := db.UpdatePageMetadataParams{
		Url:     update.URL,
		NewUrl:  newURL,
		NewTags: tags,
	}

	dbPageMetadata, err := r.db.UpdatePageMetadata(ctx, params)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}
	return &domain.PageMetadata{
		URL:  dbPageMetadata.Url,
		Tags: dbPageMetadata.Tags,
	}, nil
}

func (r *PageMetadataRepository) DeletePageMetadata(ctx context.Context, url string) error {
	return r.db.DeletePageMetadata(ctx, url)
}
