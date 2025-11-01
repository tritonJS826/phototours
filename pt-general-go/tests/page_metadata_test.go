package tests

import (
	"context"
	"encoding/json"
	"net/http"
	"net/url"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
)

const (
	PageMetadataEndpoint = "/page-metadata"
)

func (s *APITestSuite) TestPageMetadataFlow() {
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

	// POST — только админ
	page := domain.PageMetadata{
		URL:  "http://example.com/test-page",
		Tags: "tag1,tag2",
	}
	s.createPageMetadata(adminToken, page)

	// PATCH — только админ
	page.Tags = "tag1,tag2,tag3"
	s.updatePageMetadata(adminToken, page)

	// GET — доступен всем
	_ = s.getPageMetadata(userToken, page.URL)
	_ = s.getPageMetadata(adminToken, page.URL)

	// DELETE — только админ
	s.deletePageMetadata(adminToken, page.URL)

	// Проверяем, что обычный юзер не может POST/PATCH/DELETE
	s.createPageMetadataForbidden(userToken, page)
	s.updatePageMetadataForbidden(userToken, page)
	s.deletePageMetadataForbidden(userToken, page.URL)
}

func (s *APITestSuite) getPageMetadata(token, urlStr string) domain.PageMetadata {
	// Формируем URL с query-параметрами
	u, _ := url.Parse(s.basePath + PageMetadataEndpoint)
	q := u.Query()
	q.Set("url", urlStr)
	u.RawQuery = q.Encode()

	req, _ := http.NewRequest("GET", u.String(), nil)
	req.Header.Set("Authorization", "Bearer "+token)

	body := s.doRequest(req, http.StatusOK)

	var page domain.PageMetadata
	s.Require().NoError(json.Unmarshal(body, &page))
	return page
}

func (s *APITestSuite) createPageMetadata(token string, payload domain.PageMetadata) {
	s.postJSONAuth(s.basePath+PageMetadataEndpoint, token, payload, http.StatusCreated)
}

func (s *APITestSuite) updatePageMetadata(token string, payload domain.PageMetadata) {
	s.patchJSONAuth(s.basePath+PageMetadataEndpoint, token, payload, http.StatusOK)
}

func (s *APITestSuite) deletePageMetadata(token, urlStr string) {
	u, _ := url.Parse(s.basePath + PageMetadataEndpoint)
	q := u.Query()
	q.Set("url", urlStr)
	u.RawQuery = q.Encode()

	req, _ := http.NewRequest("DELETE", u.String(), nil)
	req.Header.Set("Authorization", "Bearer "+token)
	s.doRequest(req, http.StatusNoContent)
}

func (s *APITestSuite) createPageMetadataForbidden(token string, payload domain.PageMetadata) {
	s.postJSONAuth(s.basePath+PageMetadataEndpoint, token, payload, http.StatusForbidden)
}

func (s *APITestSuite) updatePageMetadataForbidden(token string, payload domain.PageMetadata) {
	s.patchJSONAuth(s.basePath+PageMetadataEndpoint, token, payload, http.StatusForbidden)
}

func (s *APITestSuite) deletePageMetadataForbidden(token string, page string) {
	req, _ := http.NewRequest("DELETE", s.basePath+PageMetadataEndpoint+"?page="+page, nil)
	req.Header.Set("Authorization", "Bearer "+token)
	s.doRequest(req, http.StatusForbidden)
}

func (s *APITestSuite) registerUserAsAdmin(payload domain.Register) dto.AuthResponse {
	s.registerUser(payload)

	_, err := s.pgPool.Exec(context.TODO(), "UPDATE users SET role = $1 WHERE email = $2", domain.RoleAdmin, payload.Email)
	s.Require().NoError(err)

	login := s.loginUser(payload.Email, payload.Password)

	return login
}
