package mapper

import (
	sqlc "pt-general-go/internal/db/sqlc"
	"pt-general-go/internal/domain"
)

func MapToDomainUser(dbUser sqlc.User) *domain.User {
	user := &domain.User{
		ID:        PgUUIDToUUID(dbUser.ID),
		FirstName: dbUser.FirstName,
		LastName:  dbUser.LastName,
		Email:     dbUser.Email,
		Password:  dbUser.Password,
		Role:      domain.Role(dbUser.Role),
		CreatedAt: dbUser.CreatedAt.Time,
		UpdatedAt: dbUser.UpdatedAt.Time,
	}

	if dbUser.Phone.Valid {
		user.Phone = &dbUser.Phone.String
	}

	if dbUser.ProfilePicUrl.Valid {
		user.ProfilePicURL = &dbUser.ProfilePicUrl.String
	}

	if dbUser.Bio.Valid {
		user.Bio = &dbUser.Bio.String
	}

	return user
}
