package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"

	"go.uber.org/zap"
)

func (s *APITestSuite) postJSON(url string, payload any, expectedStatus int) []byte {
	jsonData, err := json.Marshal(payload)
	s.Require().NoError(err)

	req, err := http.NewRequest(http.MethodPost, url, bytes.NewBuffer(jsonData))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	return s.doRequest(req, expectedStatus)
}

func (s *APITestSuite) doRequest(req *http.Request, expectedStatus int) []byte {
	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		s.FailNow("Request failed:", zap.Error(err))
	}
	defer func() {
		if resp != nil && resp.Body != nil {
			_ = resp.Body.Close()
		}
	}()

	body, err := io.ReadAll(resp.Body)
	s.Require().NoError(err)
	bodyStr := string(body)

	if resp.StatusCode != expectedStatus {
		s.T().Logf(
			"Unexpected status %d (expected %d). URL: %s %s\nResponse: %s\n",
			resp.StatusCode, expectedStatus, req.Method, req.URL.String(), bodyStr,
		)
	}

	// Проверяем, что статус совпадает, показывая тело в случае неудачи
	s.Require().Equal(expectedStatus, resp.StatusCode, "Response body: %s", bodyStr)

	return body
}

func (s *APITestSuite) postJSONAuth(url, token string, payload any, expectedStatus int) {
	jsonData, err := json.Marshal(payload)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPost, url, bytes.NewBuffer(jsonData))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)
	s.doRequest(req, expectedStatus)
}

func (s *APITestSuite) patchJSONAuth(url, token string, payload any, expectedStatus int) {
	jsonData, err := json.Marshal(payload)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, url, bytes.NewBuffer(jsonData))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)
	s.doRequest(req, expectedStatus)
}

func (s *APITestSuite) registerUserWithRole(payload *domain.Register, role domain.Role) dto.AuthResponse {
	url := s.basePath + RegisterEndpoint
	body := s.postJSON(url, payload, http.StatusCreated)

	var resp dto.AuthResponse
	s.Require().NoError(json.Unmarshal(body, &resp))

	if role == domain.RoleClient {
		return resp
	}
	_, err := s.pgPool.Exec(context.TODO(), "UPDATE users SET role = $1 WHERE email = $2", role, payload.Email)
	s.Require().NoError(err)

	login := s.loginUser(payload.Email, payload.Password)

	return login
}
