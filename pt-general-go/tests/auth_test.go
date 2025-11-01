package tests

import (
	"encoding/json"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
)

const (
	RegisterEndpoint   = "/auth/register"
	LoginEndpoint      = "/auth/login"
	GetProfileEndpoint = "/auth/profile"
)

func (s *APITestSuite) TestAuthFlow() {
	phone := "+1 111 555 9999"
	registerPayload := domain.Register{
		FirstName: "John",
		LastName:  "Smith",
		Email:     "john.smith@example.com",
		Password:  "StrongPassword",
		Phone:     &phone,
	}

	// Регистрация
	authResp := s.registerUser(registerPayload)

	// Получить профиль
	user := s.getProfile(authResp.Token)
	s.Require().Equal(registerPayload.Email, user.Email)

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

func (s *APITestSuite) registerUser(payload domain.Register) dto.AuthResponse {
	url := s.basePath + RegisterEndpoint
	body := s.postJSON(url, payload, http.StatusCreated)

	var resp dto.AuthResponse
	s.Require().NoError(json.Unmarshal(body, &resp))
	return resp
}

func (s *APITestSuite) registerUserConflict(payload domain.Register) {
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

func (s *APITestSuite) getProfile(token string) dto.SafeUser {
	url := s.basePath + GetProfileEndpoint
	req, err := http.NewRequest(http.MethodGet, url, nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+token)

	body := s.doRequest(req, http.StatusOK)

	var user dto.SafeUser
	s.Require().NoError(json.Unmarshal(body, &user))
	return user
}

func (s *APITestSuite) getProfileUnauthorized(token string) {
	url := s.basePath + GetProfileEndpoint
	req, err := http.NewRequest(http.MethodGet, url, nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+token)

	s.doRequest(req, http.StatusUnauthorized)
}
