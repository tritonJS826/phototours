package mapper

import (
	"pt-general-go/internal/domain"

	db "pt-general-go/internal/db/sqlc"
)

func MapToDomainGuide(dbGuide *db.GetGuideWithUserByIDRow) *domain.Guide {
	user := &domain.User{
		ID:        dbGuide.UserID,
		FirstName: dbGuide.UserFirstName,
		LastName:  dbGuide.UserLastName,
		Email:     dbGuide.UserEmail,
		// Password:  dbGuide.UserPa.Password,
		Role:      domain.Role(dbGuide.UserRole),
		CreatedAt: dbGuide.UserCreatedAt.Time,
		UpdatedAt: dbGuide.UserUpdatedAt.Time,
	}

	if dbGuide.UserPhone.Valid {
		user.Phone = &dbGuide.UserPhone.String
	}

	if dbGuide.UserProfilePicUrl.Valid {
		user.ProfilePicURL = &dbGuide.UserProfilePicUrl.String
	}

	if dbGuide.UserBio.Valid {
		user.Bio = &dbGuide.UserBio.String
	}

	guide := &domain.Guide{
		ID:              dbGuide.GuideID,
		UserID:          dbGuide.UserID,
		Specializations: dbGuide.GuideSpecializations,
		CreatedAt:       dbGuide.GuideCreatedAt.Time,
		UpdatedAt:       dbGuide.GuideUpdatedAt.Time,
		User:            user,
	}

	if dbGuide.GuideExperience.Valid {
		guide.Experience = &dbGuide.GuideExperience.String
	}

	return guide
}
