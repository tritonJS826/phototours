package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
)

const (
	CreateTourEndpoint   = GeneralEndpoint + "/tours"
	GetToursEndpoint     = GeneralEndpoint + "/tours"
	GetTourBySlugPrefix  = GeneralEndpoint + "/tours/slug"
	UpdateTourByIDPrefix = GeneralEndpoint + "/tours"
	DeleteTourByIDPrefix = GeneralEndpoint + "/tours"
)

func getTourByIDEndpoint(id int32) string {
	return fmt.Sprintf("%s/%d", GetToursEndpoint, id)
}

func getTourBySlugEndpoint(slug string) string {
	return fmt.Sprintf("%s/%s", GetTourBySlugPrefix, slug)
}

func updateTourByIDEndpoint(id int32) string {
	return fmt.Sprintf("%s/%d", UpdateTourByIDPrefix, id)
}

func deleteTourByIDEndpoint(id int32) string {
	return fmt.Sprintf("%s/%d", DeleteTourByIDPrefix, id)
}

func (s *APITestSuite) createGuide() (*dto.AuthResponse, int32) {
	res := s.registerUserWithRole(&domain.Register{
		FirstName: "John",
		LastName:  "Guide",
		Email:     "guide@example.com",
		Password:  "Guide123",
	}, domain.RoleGuide)

	var guideID int32
	err := s.pgPool.QueryRow(
		context.Background(),
		`INSERT INTO guides (user_id, experience, specializations, created_at, updated_at)
		 VALUES ($1, '5 years', ARRAY['hiking','history'], NOW(), NOW())
		 RETURNING id`,
		res.User.ID,
	).Scan(&guideID)

	s.Require().NoError(err, "failed to insert guide")
	return &res, guideID
}

func (s *APITestSuite) TestCreateTour() {
	res, guideID := s.createGuide()

	t := domain.CreateTourParams{
		Title:           "Test tour",
		Description:     "Amazing tour",
		Difficulty:      "EASY",
		Program:         json.RawMessage(`{"days":[{"day":1,"title":"Intro"}]}`),
		Price:           floatPtr(199.99),
		StartLocation:   strPtr("City A"),
		EndLocation:     strPtr("City B"),
		DurationDays:    int32Ptr(3),
		MinAge:          int32Ptr(10),
		CoverURL:        strPtr("http://img"),
		Languages:       []string{"en", "ru"},
		AvailableMonths: []string{"June", "July"},
		GuideID:         &guideID,
	}

	body, _ := json.Marshal(t)

	req, err := http.NewRequest(http.MethodPost, s.basePath+CreateTourEndpoint, bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusCreated)

	var tourResp domain.Tour
	s.Require().NoError(json.Unmarshal(resp, &tourResp))

	s.NotZero(tourResp.ID, "id must not be empty or zero")
	s.NotEmpty(tourResp.Slug, "slug must not be empty")
	s.Equal("Test tour", tourResp.Title)
	s.Equal("Amazing tour", tourResp.Description)
	s.Equal(domain.DifficultyLevelEASY, tourResp.Difficulty)
}

func (s *APITestSuite) TestCreateTour_Invalid() {
	res, _ := s.createGuide()
	// Missing required fields
	body := []byte(`{"title": "", "difficulty": "INVALID"}`)

	req, err := http.NewRequest(http.MethodPost, s.basePath+CreateTourEndpoint, bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	_ = s.doRequest(req, http.StatusBadRequest)
}

func (s *APITestSuite) createTourWithGuide() (*dto.AuthResponse, int32, int32) {
	res, guideID := s.createGuide()

	t := domain.CreateTourParams{
		Title:           "Test tour",
		Description:     "Amazing tour",
		Difficulty:      "EASY",
		Program:         json.RawMessage(`{"days":[{"day":1,"title":"Intro"}]}`),
		Price:           floatPtr(199.99),
		StartLocation:   strPtr("City A"),
		EndLocation:     strPtr("City B"),
		DurationDays:    int32Ptr(3),
		MinAge:          int32Ptr(10),
		CoverURL:        strPtr("http://img"),
		Languages:       []string{"en", "ru"},
		AvailableMonths: []string{"June", "July"},
		GuideID:         &guideID,
	}

	body, _ := json.Marshal(t)
	req, err := http.NewRequest(http.MethodPost, s.basePath+CreateTourEndpoint, bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusCreated)
	var tourResp domain.Tour
	s.Require().NoError(json.Unmarshal(resp, &tourResp))

	return res, guideID, tourResp.ID
}

// ==================== GET /tours ====================

func (s *APITestSuite) TestGetAllTours() {
	s.createTourWithGuide()

	req, err := http.NewRequest(http.MethodGet, s.basePath+GetToursEndpoint, nil)
	s.Require().NoError(err)

	resp := s.doRequest(req, http.StatusOK)

	var tours []domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tours))
	s.NotEmpty(tours, "tours list must not be empty")
}

// ==================== GET /tours/:id ====================

func (s *APITestSuite) TestGetTourByID() {
	_, _, tourID := s.createTourWithGuide()

	req, err := http.NewRequest(http.MethodGet, s.basePath+getTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal(tourID, tour.ID)
	s.Equal("Test tour", tour.Title)
}

func (s *APITestSuite) TestGetTourByID_NotFound() {
	req, err := http.NewRequest(http.MethodGet, s.basePath+getTourByIDEndpoint(99999), nil)
	s.Require().NoError(err)

	_ = s.doRequest(req, http.StatusNotFound)
}

func (s *APITestSuite) TestGetTourByID_InvalidID() {
	req, err := http.NewRequest(http.MethodGet, s.basePath+GetToursEndpoint+"/abc", nil)
	s.Require().NoError(err)

	_ = s.doRequest(req, http.StatusBadRequest)
}

// ==================== GET /tours/slug/:slug ====================

func (s *APITestSuite) TestGetTourBySlug() {
	_, _, tourID := s.createTourWithGuide()

	// Получаем slug созданного тура
	var slug string
	err := s.pgPool.QueryRow(
		context.Background(),
		`SELECT slug FROM tours WHERE id = $1`,
		tourID,
	).Scan(&slug)
	s.Require().NoError(err)

	req, err := http.NewRequest(http.MethodGet, s.basePath+getTourBySlugEndpoint(slug), nil)
	s.Require().NoError(err)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal(tourID, tour.ID)
	s.Equal(slug, tour.Slug)
}

func (s *APITestSuite) TestGetTourBySlug_NotFound() {
	req, err := http.NewRequest(http.MethodGet, s.basePath+getTourBySlugEndpoint("non-existent-slug"), nil)
	s.Require().NoError(err)

	_ = s.doRequest(req, http.StatusNotFound)
}

// ==================== PATCH /tours/:id ====================

func (s *APITestSuite) TestUpdateTourByID_AllFields() {
	res, guideID, tourID := s.createTourWithGuide()

	// Создаем нового пользователя для второго гида
	newUserRes := s.registerUserWithRole(&domain.Register{
		FirstName: "Second",
		LastName:  "Guide",
		Email:     "secondguide@example.com",
		Password:  "Guide123",
	}, domain.RoleGuide)

	// Создаем второго гида
	var newGuideID int32
	err := s.pgPool.QueryRow(
		context.Background(),
		`INSERT INTO guides (user_id, experience, specializations, created_at, updated_at)
		 VALUES ($1, '10 years', ARRAY['mountain','skiing'], NOW(), NOW())
		 RETURNING id`,
		newUserRes.User.ID,
	).Scan(&newGuideID)
	s.Require().NoError(err)
	s.Require().NotEqual(guideID, newGuideID)

	newProgram := json.RawMessage(`{"days":[{"day":1,"title":"Updated"},{"day":2,"title":"Day 2"}]}`)
	newLangs := []string{"en", "de", "fr"}
	newMonths := []string{"January", "February"}
	newDifficulty := domain.DifficultyLevelHARD

	update := domain.UpdateTourParams{
		Title:           strPtr("Fully Updated Tour"),
		Slug:            strPtr("fully-updated-tour"),
		Description:     strPtr("New description"),
		Difficulty:      &newDifficulty,
		Program:         &newProgram,
		Price:           floatPtr(499.99),
		StartLocation:   strPtr("New Start"),
		EndLocation:     strPtr("New End"),
		DurationDays:    int32Ptr(7),
		MinAge:          int32Ptr(16),
		CoverURL:        strPtr("http://new.jpg"),
		Languages:       &newLangs,
		AvailableMonths: &newMonths,
		GuideID:         &newGuideID,
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))

	s.Equal("Fully Updated Tour", tour.Title)
	s.Equal("fully-updated-tour", tour.Slug)
	s.Equal("New description", tour.Description)
	s.Equal(domain.DifficultyLevelHARD, tour.Difficulty)
	s.Equal(499.99, *tour.Price)
	s.Equal("New Start", *tour.StartLocation)
	s.Equal("New End", *tour.EndLocation)
	s.Equal(int32(7), *tour.DurationDays)
	s.Equal(int32(16), *tour.MinAge)
	s.Equal("http://new.jpg", *tour.CoverURL)
	s.Equal(newGuideID, *tour.GuideID)
	s.ElementsMatch(newLangs, tour.Languages)
	s.ElementsMatch(newMonths, tour.AvailableMonths)
	s.NotNil(tour.Program)
}

func (s *APITestSuite) TestUpdateTourByID_TitleAndSlug() {
	res, _, tourID := s.createTourWithGuide()

	update := domain.UpdateTourParams{
		Title: strPtr("New Title"),
		Slug:  strPtr("new-slug"),
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal("New Title", tour.Title)
	s.Equal("new-slug", tour.Slug)
	s.Equal("Amazing tour", tour.Description) // не изменилось
}

func (s *APITestSuite) TestUpdateTourByID_DescriptionAndDifficulty() {
	res, _, tourID := s.createTourWithGuide()

	hard := domain.DifficultyLevelHARD
	update := domain.UpdateTourParams{
		Description: strPtr("Updated description"),
		Difficulty:  &hard,
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal("Updated description", tour.Description)
	s.Equal(domain.DifficultyLevelHARD, tour.Difficulty)
}

func (s *APITestSuite) TestUpdateTourByID_PriceAndDurationDays() {
	res, _, tourID := s.createTourWithGuide()

	update := domain.UpdateTourParams{
		Price:        floatPtr(599.99),
		DurationDays: int32Ptr(14),
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal(599.99, *tour.Price)
	s.Equal(int32(14), *tour.DurationDays)
}

func (s *APITestSuite) TestUpdateTourByID_LocationsAndMinAge() {
	res, _, tourID := s.createTourWithGuide()

	update := domain.UpdateTourParams{
		StartLocation: strPtr("Moscow"),
		EndLocation:   strPtr("Saint Petersburg"),
		MinAge:        int32Ptr(21),
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal("Moscow", *tour.StartLocation)
	s.Equal("Saint Petersburg", *tour.EndLocation)
	s.Equal(int32(21), *tour.MinAge)
}

func (s *APITestSuite) TestUpdateTourByID_CoverURLAndProgram() {
	res, _, tourID := s.createTourWithGuide()

	newProgram := json.RawMessage(`{"days":[{"day":1,"title":"New Day"}]}`)
	update := domain.UpdateTourParams{
		CoverURL: strPtr("http://newcover.png"),
		Program:  &newProgram,
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal("http://newcover.png", *tour.CoverURL)
	s.NotNil(tour.Program)
}

func (s *APITestSuite) TestUpdateTourByID_ArrayFields() {
	res, _, tourID := s.createTourWithGuide()

	newLangs := []string{"es", "pt"}
	newMonths := []string{"December", "January"}
	update := domain.UpdateTourParams{
		Languages:       &newLangs,
		AvailableMonths: &newMonths,
	}

	body, _ := json.Marshal(update)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+res.Token)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.ElementsMatch([]string{"es", "pt"}, tour.Languages)
	s.ElementsMatch([]string{"December", "January"}, tour.AvailableMonths)
}

// ==================== DELETE /tours/:id ====================

func (s *APITestSuite) TestDeleteTourByID() {
	res, _, tourID := s.createTourWithGuide()

	req, err := http.NewRequest(http.MethodDelete, s.basePath+deleteTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+res.Token)

	_ = s.doRequest(req, http.StatusNoContent)

	getReq, err := http.NewRequest(http.MethodGet, s.basePath+getTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)
	_ = s.doRequest(getReq, http.StatusNotFound)
}

func (s *APITestSuite) TestDeleteTourByID_NotFound() {
	res, _ := s.createGuide()

	req, err := http.NewRequest(http.MethodDelete, s.basePath+deleteTourByIDEndpoint(99999), nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+res.Token)

	_ = s.doRequest(req, http.StatusNotFound)
}

func (s *APITestSuite) TestDeleteTourByID_Unauthorized() {
	_, _, tourID := s.createTourWithGuide()

	req, err := http.NewRequest(http.MethodDelete, s.basePath+deleteTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)

	_ = s.doRequest(req, http.StatusUnauthorized)
}

func (s *APITestSuite) TestDeleteTourByID_ForbiddenForUser() {
	_, _, tourID := s.createTourWithGuide()

	userRes := s.registerUserWithRole(&domain.Register{
		FirstName: "Regular",
		LastName:  "User",
		Email:     "regularuser@example.com",
		Password:  "User1234",
	}, domain.RoleClient)

	req, err := http.NewRequest(http.MethodDelete, s.basePath+deleteTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)
	req.Header.Set("Authorization", "Bearer "+userRes.Token)

	_ = s.doRequest(req, http.StatusForbidden)
}

// ==================== Admin access tests ====================

func (s *APITestSuite) TestCreateTour_AdminCanCreate() {
	adminRes := s.registerUserWithRole(&domain.Register{
		FirstName: "Admin",
		LastName:  "User",
		Email:     "admin@example.com",
		Password:  "Admin123",
	}, domain.RoleAdmin)

	_, guideID := s.createGuide()

	t := domain.CreateTourParams{
		Title:           "Admin tour",
		Description:     "Created by admin",
		Difficulty:      "MEDIUM",
		Program:         json.RawMessage(`{"days":[{"day":1,"title":"Day 1"}]}`),
		GuideID:         &guideID,
		Languages:       []string{"en"},
		AvailableMonths: []string{"August"},
	}

	body, _ := json.Marshal(t)
	req, err := http.NewRequest(http.MethodPost, s.basePath+CreateTourEndpoint, bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+adminRes.Token)

	resp := s.doRequest(req, http.StatusCreated)

	var tourResp domain.Tour
	s.Require().NoError(json.Unmarshal(resp, &tourResp))
	s.Equal("Admin tour", tourResp.Title)
}

// helpers for pointers
func floatPtr(v float64) *float64 { return &v }
func strPtr(v string) *string     { return &v }
func int32Ptr(v int32) *int32     { return &v }
