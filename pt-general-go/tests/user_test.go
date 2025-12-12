package tests

import (
	"net/http"
	"pt-general-go/internal/domain"
)

func (s *APITestSuite) TestUserFlow() {
	user := s.registerUserWithRole(&domain.Register{
		FirstName: "User",
		LastName:  "Test",
		Email:     "user@example.com",
		Password:  "User12345",
	}, domain.RoleClient)
	userToken := user.Token

	admin := s.registerUserWithRole(&domain.Register{
		FirstName: "Admin",
		LastName:  "Test",
		Email:     "admin@example.com",
		Password:  "Admin12345",
	}, domain.RoleAdmin)
	adminToken := admin.Token

	s.getUsers(userToken, http.StatusForbidden)

	users := s.getUsers(adminToken, http.StatusOK)
	s.Require().GreaterOrEqual(len(users), 2, "expected at least 2 users in response")

	var foundAdmin, foundUser bool

	for _, u := range users {
		switch u.Email {
		case admin.User.Email:
			foundAdmin = true
		case user.User.Email:
			foundUser = true
		}
		if foundAdmin && foundUser {
			break
		}
	}

	s.Truef(foundAdmin, "expected admin user (%s) to appear in /users response", admin.User.Email)
	s.Truef(foundUser, "expected client user (%s) to appear in /users response", user.User.Email)
}
