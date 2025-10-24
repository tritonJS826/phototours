package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"

	"github.com/jackc/pgx/v5/pgtype"
)

type UserRepository struct {
	db db.Querier
}

func NewUserRepository(db db.Querier) *UserRepository {
	return &UserRepository{db}
}

func (r *UserRepository) CheckUserExistsByEmail(ctx context.Context, email string) (bool, error) {
	return r.db.CheckUserExistsByEmail(ctx, email)
}

// firstName: dto.firstName,
//         lastName: dto.lastName,
//         email: dto.email,
//         password: passwordHash,
//         phone: phoneValue,
//         role: Role.CLIENT,

func (r *UserRepository) CreateClient(ctx context.Context, register *domain.Register) (*domain.User, error) {
	var phone pgtype.Text
	if register.Phone != nil && *register.Phone != "" {
		phone = pgtype.Text{String: *register.Phone, Valid: true}
	}

	createdUser, err := r.db.CreateUser(ctx, db.CreateUserParams{
		FirstName: register.FirstName,
		LastName:  register.LastName,
		Email:     register.Email,
		Password:  register.Password,
		Phone:     phone,
		Role:      db.Role(domain.RoleClient),
	})
	if err != nil {
		return nil, err
	}

	user := &domain.User{
		ID:        createdUser.ID,
		Email:     createdUser.Email,
		Password:  createdUser.Password,
		FirstName: createdUser.FirstName,
		LastName:  createdUser.LastName,
		Role:      domain.Role(createdUser.Role),
		CreatedAt: createdUser.CreatedAt.Time,
		UpdatedAt: createdUser.UpdatedAt.Time,
	}

	if createdUser.Phone.Valid {
		user.Phone = &createdUser.Phone.String
	}
	if createdUser.ProfilePicUrl.Valid {
		user.ProfilePicURL = &createdUser.ProfilePicUrl.String
	}
	if createdUser.Bio.Valid {
		user.Bio = &createdUser.Bio.String
	}

	return user, nil
}
