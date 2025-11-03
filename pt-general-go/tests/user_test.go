package tests

import (
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
)

func (s *APITestSuite) TestUserFlow() {
	// Создаем обычного юзера
	user := s.registerUser(domain.Register{
		FirstName: "User",
		LastName:  "Test",
		Email:     "user@example.com",
		Password:  "User12345",
	})
	userToken := user.Token

	// Создаем админа
	admin := s.registerUserAsAdmin(domain.Register{
		FirstName: "Admin",
		LastName:  "Test",
		Email:     "admin@example.com",
		Password:  "Admin12345",
	})
	adminToken := admin.Token

	s.getUsers(userToken, http.StatusForbidden)
	expectedUsers := []dto.UserDTO{
		{
			ID:            admin.User.ID,
			FirstName:     admin.User.FirstName,
			LastName:      admin.User.LastName,
			Email:         admin.User.Email,
			Phone:         admin.User.Phone,
			Role:          admin.User.Role,
			ProfilePicURL: admin.User.ProfilePicURL,
			Bio:           admin.User.Bio,
			CreatedAt:     admin.User.CreatedAt,
		},
		{
			ID:            user.User.ID,
			FirstName:     user.User.FirstName,
			LastName:      user.User.LastName,
			Email:         user.User.Email,
			Phone:         user.User.Phone,
			Role:          user.User.Role,
			ProfilePicURL: user.User.ProfilePicURL,
			Bio:           user.User.Bio,
			CreatedAt:     user.User.CreatedAt,
		},
	}
	users := s.getUsers(adminToken, http.StatusOK)
	s.Equal(expectedUsers, users)
}
