package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

const (
	CreateTourEndpoint   = GeneralEndpoint + "/tours"
	GetToursEndpoint     = GeneralEndpoint + "/tours"
	GetTourBySlugPrefix  = GeneralEndpoint + "/tours/slug"
	UpdateTourByIDPrefix = GeneralEndpoint + "/tours"
	DeleteTourByIDPrefix = GeneralEndpoint + "/tours"
)

func getTourByIDEndpoint(id uuid.UUID) string {
	return fmt.Sprintf("%s/%s", GetToursEndpoint, id.String())
}

func getTourBySlugEndpoint(slug string) string {
	return fmt.Sprintf("%s/%s", GetTourBySlugPrefix, slug)
}

func updateTourByIDEndpoint(id uuid.UUID) string {
	return fmt.Sprintf("%s/%s", UpdateTourByIDPrefix, id.String())
}

func deleteTourByIDEndpoint(id uuid.UUID) string {
	return fmt.Sprintf("%s/%s", DeleteTourByIDPrefix, id.String())
}

func (s *APITestSuite) createTour() (*domain.CreateTourParams, uuid.UUID) {
	t := domain.CreateTourParams{
		Title:           "Test tour",
		Description:     "Amazing tour",
		Difficulty:      "EASY",
		Program:         json.RawMessage(`{"days":[{"day":1,"title":"Intro"}]}`),
		StartLocation:   "City A",
		EndLocation:     "City B",
		DurationDays:    "3",
		MinAge:          10,
		CoverURL:        "http://img",
		Languages:       []string{"en", "ru"},
		AvailableMonths: []string{"June", "July"},
		VipPrice:        199,
		RoomPrice:       150,
	}

	body, err := json.Marshal(t)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPost, s.basePath+CreateTourEndpoint, bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusCreated)
	var tourResp domain.Tour
	s.Require().NoError(json.Unmarshal(resp, &tourResp))

	return &t, tourResp.ID
}

func (s *APITestSuite) TestCreateTour() {
	_, tourID := s.createTour()

	s.NotZero(tourID, "id must not be empty or zero")
}

func (s *APITestSuite) TestCreateTour_Invalid() {
	body := []byte(`{"title": "", "difficulty": "INVALID"}`)

	req, err := http.NewRequest(http.MethodPost, s.basePath+CreateTourEndpoint, bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	_ = s.doRequest(req, http.StatusBadRequest)
}

func (s *APITestSuite) createTourWithData() uuid.UUID {
	_, tourID := s.createTour()
	return tourID
}

// ==================== GET /tours ====================

func (s *APITestSuite) TestGetAllTours() {
	s.createTourWithData()

	req, err := http.NewRequest(http.MethodGet, s.basePath+GetToursEndpoint, nil)
	s.Require().NoError(err)

	resp := s.doRequest(req, http.StatusOK)

	var tours []domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tours))
	s.NotEmpty(tours, "tours list must not be empty")
}

// ==================== GET /tours/:id ====================

func (s *APITestSuite) TestGetTourByID() {
	_, tourID := s.createTour()

	req, err := http.NewRequest(http.MethodGet, s.basePath+getTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal(tourID, tour.ID)
	s.Equal("Test tour", tour.Title)
}

func (s *APITestSuite) TestGetTourByID_NotFound() {
	nonExistentID := uuid.New()
	req, err := http.NewRequest(http.MethodGet, s.basePath+getTourByIDEndpoint(nonExistentID), nil)
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
	_, tourID := s.createTour()

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
	_, tourID := s.createTour()

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
		StartLocation:   strPtr("New Start"),
		EndLocation:     strPtr("New End"),
		DurationDays:    strPtr("7"),
		MinAge:          int32Ptr(16),
		CoverURL:        strPtr("http://new.jpg"),
		Languages:       &newLangs,
		AvailableMonths: &newMonths,
	}

	body, err := json.Marshal(update)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))

	s.Equal("Fully Updated Tour", tour.Title)
	s.Equal("fully-updated-tour", tour.Slug)
	s.Equal("New description", tour.Description)
	s.Equal(domain.DifficultyLevelHARD, tour.Difficulty)
	s.Equal("New Start", *tour.StartLocation)
	s.Equal("New End", *tour.EndLocation)
	s.Equal("7", *tour.DurationDays)
	s.Equal(int32(16), *tour.MinAge)
	s.Equal("http://new.jpg", *tour.CoverURL)
	s.ElementsMatch(newLangs, tour.Languages)
	s.ElementsMatch(newMonths, tour.AvailableMonths)
	s.NotNil(tour.Program)
}

func (s *APITestSuite) TestUpdateTourByID_TitleAndSlug() {
	_, tourID := s.createTour()

	update := domain.UpdateTourParams{
		Title: strPtr("New Title"),
		Slug:  strPtr("new-slug"),
	}

	body, err := json.Marshal(update)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal("New Title", tour.Title)
	s.Equal("new-slug", tour.Slug)
	s.Equal("Amazing tour", tour.Description)
}

func (s *APITestSuite) TestUpdateTourByID_DescriptionAndDifficulty() {
	_, tourID := s.createTour()

	hard := domain.DifficultyLevelHARD
	update := domain.UpdateTourParams{
		Description: strPtr("Updated description"),
		Difficulty:  &hard,
	}

	body, err := json.Marshal(update)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.Equal("Updated description", tour.Description)
	s.Equal(domain.DifficultyLevelHARD, tour.Difficulty)
}

func (s *APITestSuite) TestUpdateTourByID_DurationDays() {
	_, tourID := s.createTour()

	update := domain.UpdateTourParams{
		DurationDays: strPtr("14"),
	}

	body, err := json.Marshal(update)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))

	s.Equal(int32(14), *tour.DurationDays)
}

func (s *APITestSuite) TestUpdateTourByID_LocationsAndMinAge() {
	_, tourID := s.createTour()

	update := domain.UpdateTourParams{
		StartLocation: strPtr("Moscow"),
		EndLocation:   strPtr("Saint Petersburg"),
		MinAge:        int32Ptr(21),
	}

	body, err := json.Marshal(update)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))

	s.Equal("Moscow", *tour.StartLocation)
	s.Equal("Saint Petersburg", *tour.EndLocation)
	s.Equal(int32(21), *tour.MinAge)
}
func (s *APITestSuite) TestUpdateTourByID_ArrayFields() {
	_, tourID := s.createTour()

	newLangs := []string{"es", "pt"}
	newMonths := []string{"December", "January"}
	update := domain.UpdateTourParams{
		Languages:       &newLangs,
		AvailableMonths: &newMonths,
	}

	body, err := json.Marshal(update)
	s.Require().NoError(err)
	req, err := http.NewRequest(http.MethodPatch, s.basePath+updateTourByIDEndpoint(tourID), bytes.NewBuffer(body))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	resp := s.doRequest(req, http.StatusOK)

	var tour domain.TourFull
	s.Require().NoError(json.Unmarshal(resp, &tour))
	s.ElementsMatch([]string{"es", "pt"}, tour.Languages)
	s.ElementsMatch([]string{"December", "January"}, tour.AvailableMonths)
}

// ==================== DELETE /tours/:id ====================

func (s *APITestSuite) TestDeleteTourByID() {
	_, tourID := s.createTour()

	req, err := http.NewRequest(http.MethodDelete, s.basePath+deleteTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)

	_ = s.doRequest(req, http.StatusNoContent)

	getReq, err := http.NewRequest(http.MethodGet, s.basePath+getTourByIDEndpoint(tourID), nil)
	s.Require().NoError(err)
	_ = s.doRequest(getReq, http.StatusNotFound)
}

func (s *APITestSuite) TestDeleteTourByID_NotFound() {
	nonExistentID := uuid.New()
	req, err := http.NewRequest(http.MethodDelete, s.basePath+deleteTourByIDEndpoint(nonExistentID), nil)
	s.Require().NoError(err)

	_ = s.doRequest(req, http.StatusNotFound)
}

// helpers for pointers
func floatPtr(v float64) *float64 { return &v }
func strPtr(v string) *string     { return &v }
func int32Ptr(v int32) *int32     { return &v }
