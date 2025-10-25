package repository

import (
	"context"
	"errors"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

	"github.com/jackc/pgerrcode"
	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/jackc/pgx/v5/pgtype"
)

type UserRepository struct {
	db db.Querier
}

func NewUserRepository(db db.Querier) *UserRepository {
	return &UserRepository{db}
}

func (r *UserRepository) CreateUser(ctx context.Context, register *domain.Register) (*domain.User, error) {
	var phone pgtype.Text
	if register.Phone != nil && *register.Phone != "" {
		phone = pgtype.Text{String: *register.Phone, Valid: true}
	}

	dbUser, err := r.db.CreateUser(ctx, db.CreateUserParams{
		FirstName: register.FirstName,
		LastName:  register.LastName,
		Email:     register.Email,
		Password:  register.Password,
		Phone:     phone,
		Role:      db.Role(domain.RoleClient),
	})
	if err != nil {
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) {
			if pgErr.Code == pgerrcode.UniqueViolation {
				return nil, domain.ErrUserAlreadyExists
			}
		}
		return nil, err
	}
	return mapper.MapDBUserToUser(dbUser), nil
}

func (r *UserRepository) GetUserByID(ctx context.Context, id int32) (*domain.User, error) {
	dbUser, err := r.db.GetUserByID(ctx, id)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}
	return mapper.MapDBUserToUser(dbUser), nil
}

func (r *UserRepository) GetUserByEmail(ctx context.Context, email string) (*domain.User, error) {
	dbUser, err := r.db.GetUserByEmail(ctx, email)
	if err != nil {
		if errors.Is(err, pgx.ErrNoRows) {
			return nil, nil
		}
		return nil, err
	}
	return mapper.MapDBUserToUser(dbUser), nil
}
