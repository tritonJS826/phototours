package tests

import (
	"encoding/json"
	"net/http"
	"net/url"
	"pt-general-go/internal/domain"
)

const (
	PageMetadataEndpoint = GeneralEndpoint + "/page-metadata"
)

func (s *APITestSuite) TestPageMetadataFlow() {
	// Создаем обычного юзера
	user := s.registerUserWithRole(&domain.Register{
		FirstName: "User",
		LastName:  "Test",
		Email:     "user@example.com",
		Password:  "User12345",
	}, domain.RoleClient)
	userToken := user.Token

	// Создаем админа
	admin := s.registerUserWithRole(&domain.Register{
		FirstName: "Admin",
		LastName:  "Test",
		Email:     "admin@example.com",
		Password:  "Admin12345",
	}, domain.RoleAdmin)
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
	pageMetadataByUser := s.getPageMetadata(userToken, page.URL)
	s.Require().Equal(page, pageMetadataByUser)
	pageMetadataByAdmin := s.getPageMetadata(adminToken, page.URL)
	s.Require().Equal(page, pageMetadataByAdmin)

	// DELETE — только админ
	s.deletePageMetadata(adminToken, page.URL)

	// Проверяем, что обычный юзер не может POST/PATCH/DELETE
	s.createPageMetadataForbidden(userToken, page)
	s.updatePageMetadataForbidden(userToken, page)
	s.deletePageMetadataForbidden(userToken, page.URL)
}

func (s *APITestSuite) getPageMetadata(token, urlStr string) domain.PageMetadata {
	u, err := url.Parse(s.basePath + PageMetadataEndpoint)
	s.Require().NoError(err)
	q := u.Query()
	q.Set("url", urlStr)
	u.RawQuery = q.Encode()

	req, err := http.NewRequest(http.MethodGet, u.String(), nil)
	s.Require().NoError(err)
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
	u, err := url.Parse(s.basePath + PageMetadataEndpoint)
	s.Require().NoError(err)
	q := u.Query()
	q.Set("url", urlStr)
	u.RawQuery = q.Encode()

	req, err := http.NewRequest("DELETE", u.String(), nil)
	s.Require().NoError(err)
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
	req, err := http.NewRequest(http.MethodDelete, s.basePath+PageMetadataEndpoint+"?page="+page, nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+token)
	s.doRequest(req, http.StatusForbidden)
}
