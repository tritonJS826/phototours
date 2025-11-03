package repository

import (
	"context"
	db "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository/mapper"

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
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainUser(dbUser), nil
}

func (r *UserRepository) GetUserByID(ctx context.Context, id int32) (*domain.User, error) {
	dbUser, err := r.db.GetUserByID(ctx, id)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainUser(dbUser), nil
}

func (r *UserRepository) GetUserByEmail(ctx context.Context, email string) (*domain.User, error) {
	dbUser, err := r.db.GetUserByEmail(ctx, email)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainUser(dbUser), nil
}

func (r *UserRepository) GetUsers(ctx context.Context, limit, offset int) ([]domain.User, error) {
	dbUsers, err := r.db.GetUsers(ctx, db.GetUsersParams{
		Limit:  int32(limit),
		Offset: int32(offset),
	})
	if err != nil {
		return nil, handleDBError(err)
	}

	users := make([]domain.User, 0, len(dbUsers))
	for _, dbUser := range dbUsers {
		users = append(users, *mapper.MapToDomainUser(dbUser))
	}

	return users, nil
}

func (r *UserRepository) UpdateUserByID(ctx context.Context, updateUser *domain.UpdateProfile) (*domain.User, error) {
	var firstName, lastName, phone, bio, profilePicURL pgtype.Text

	if updateUser.FirstName != nil && *updateUser.FirstName != "" {
		firstName = pgtype.Text{String: *updateUser.FirstName, Valid: true}
	}

	if updateUser.LastName != nil && *updateUser.LastName != "" {
		lastName = pgtype.Text{String: *updateUser.LastName, Valid: true}
	}

	if updateUser.Phone != nil && *updateUser.Phone != "" {
		phone = pgtype.Text{String: *updateUser.Phone, Valid: true}
	}

	if updateUser.Bio != nil && *updateUser.Bio != "" {
		bio = pgtype.Text{String: *updateUser.Bio, Valid: true}
	}

	if updateUser.UploadedPath != nil && *updateUser.UploadedPath != "" {
		profilePicURL = pgtype.Text{String: *updateUser.UploadedPath, Valid: true}
	}

	params := db.UpdateUserParams{
		ID:            updateUser.ID,
		FirstName:     firstName,
		LastName:      lastName,
		Phone:         phone,
		Bio:           bio,
		ProfilePicUrl: profilePicURL,
	}

	dbUser, err := r.db.UpdateUser(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainUser(dbUser), nil
}

func (r *UserRepository) UpdateUserPassword(ctx context.Context, userID int32, password string) (*domain.User, error) {
	params := db.UpdateUserPasswordParams{
		ID:       userID,
		Password: password,
	}
	dbUser, err := r.db.UpdateUserPassword(ctx, params)
	if err != nil {
		return nil, handleDBError(err)
	}
	return mapper.MapToDomainUser(dbUser), nil
}
