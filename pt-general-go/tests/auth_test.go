package tests

import (
	"encoding/json"
	"fmt"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
)

const (
	RegisterEndpoint   = GeneralEndpoint + "/auth/register"
	LoginEndpoint      = GeneralEndpoint + "/auth/login"
	GetProfileEndpoint = GeneralEndpoint + "/auth/profile"
	GetUsersEndpoint   = GeneralEndpoint + "/users"
)

func getPublicProfileEndpoint(id int32) string {
	return fmt.Sprintf("%v/%d/public", GetUsersEndpoint, id)
}

func (s *APITestSuite) TestAuthFlow() {
	phone := "+1 111 555 9999"
	registerPayload := &domain.Register{
		FirstName: "John",
		LastName:  "Smith",
		Email:     "john.smith@example.com",
		Password:  "StrongPassword",
		Phone:     &phone,
	}

	// Регистрация
	authResp := s.registerUserWithRole(registerPayload, domain.RoleClient)

	// Получить профиль
	user := s.getProfile(authResp.Token)
	s.Require().Equal(registerPayload.Email, user.Email)

	// Получить публичный профиль
	publicProfile := s.getPublicProfile(user.ID)
	s.Require().Equal(registerPayload.FirstName, publicProfile.FirstName)
	s.Require().Equal(registerPayload.LastName, publicProfile.LastName)

	// Логин успешный
	loginResp := s.loginUser(registerPayload.Email, registerPayload.Password)
	s.Require().NotEmpty(loginResp.Token)

	// Повторная регистрация → conflict
	s.registerUserConflict(registerPayload)

	// Логин с неверным паролем → unauthorized
	s.loginUserUnauthorized(registerPayload.Email, "WrongPassword")

	// Профиль с неверным токеном → unauthorized
	s.getProfileUnauthorized("invalid_token")
}

func (s *APITestSuite) registerUserConflict(payload *domain.Register) {
	url := s.basePath + RegisterEndpoint
	s.postJSON(url, payload, http.StatusConflict)
}

func (s *APITestSuite) loginUser(email, password string) dto.AuthResponse {
	url := s.basePath + LoginEndpoint
	body := s.postJSON(url, domain.Login{Email: email, Password: password}, http.StatusOK)

	var resp dto.AuthResponse
	s.Require().NoError(json.Unmarshal(body, &resp))
	return resp
}

func (s *APITestSuite) loginUserUnauthorized(email, password string) {
	url := s.basePath + LoginEndpoint
	s.postJSON(url, domain.Login{Email: email, Password: password}, http.StatusUnauthorized)
}

func (s *APITestSuite) getProfile(token string) dto.UserDTO {
	url := s.basePath + GetProfileEndpoint
	req, err := http.NewRequest(http.MethodGet, url, nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+token)

	body := s.doRequest(req, http.StatusOK)

	var user dto.UserDTO
	s.Require().NoError(json.Unmarshal(body, &user))
	return user
}

func (s *APITestSuite) getPublicProfile(id int32) dto.PublicProfileDTO {
	url := s.basePath + getPublicProfileEndpoint(id)
	req, err := http.NewRequest(http.MethodGet, url, nil)
	s.Require().NoError(err)

	body := s.doRequest(req, http.StatusOK)

	var publicProfile dto.PublicProfileDTO
	s.Require().NoError(json.Unmarshal(body, &publicProfile))
	return publicProfile
}

func (s *APITestSuite) getProfileUnauthorized(token string) {
	url := s.basePath + GetProfileEndpoint
	req, err := http.NewRequest(http.MethodGet, url, nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+token)

	s.doRequest(req, http.StatusUnauthorized)
}

func (s *APITestSuite) getUsers(token string, statusCode int) []dto.UserDTO {
	url := s.basePath + GetUsersEndpoint
	req, err := http.NewRequest(http.MethodGet, url, nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+token)

	body := s.doRequest(req, statusCode)
	if statusCode != http.StatusOK {
		return nil
	}

	var users []dto.UserDTO
	s.Require().NoError(json.Unmarshal(body, &users))
	return users
}
