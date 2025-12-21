package dto

import (
	"encoding/json"
	"pt-general-go/internal/domain"

	"github.com/google/uuid"
)

type TourDTO struct {
	Price           *float64        `json:"price" example:"1500.00"`
	MinAge          *int32          `json:"minAge" example:"18"`
	EndLocation     *string         `json:"endLocation" example:"Astana"`
	StartLocation   *string         `json:"startLocation" example:"Almaty"`
	DurationDays    *int32          `json:"durationDays" example:"7"`
	CoverURL        *string         `json:"coverUrl" example:"https://example.com/cover.jpg"`
	GuideID         *string         `json:"guideId" example:"123e4567-e89b-12d3-a456-426614174000"`
	Description     string          `json:"description" example:"An exciting mountain tour"`
	Difficulty      string          `json:"difficulty" example:"MEDIUM"`
	Slug            string          `json:"slug" example:"mountain-adventure"`
	Title           string          `json:"title" example:"Mountain Adventure"`
	CreatedAt       string          `json:"createdAt" example:"2024-01-15T10:00:00Z"`
	UpdatedAt       string          `json:"updatedAt" example:"2024-01-15T10:00:00Z"`
	ID              string          `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
	Languages       []string        `json:"languages" example:"English,Russian"`
	AvailableMonths []string        `json:"availableMonths" example:"June,July,August"`
	Program         json.RawMessage `json:"program" swaggertype:"object"`
}

type TourFullDTO struct {
	TourDTO
	Guide      GuideDTO          `json:"guide"`
	Dates      []TourDateDTO     `json:"dates"`
	Photos     []PhotoDTO        `json:"photos"`
	Videos     []VideoDTO        `json:"videos"`
	Materials  []TourMaterialDTO `json:"materials"`
	Tags       []TagDTO          `json:"tags"`
	Categories []CategoryDTO     `json:"categories"`
}

type GuideDTO struct {
	Experience      *string  `json:"experience" example:"10 years of experience"`
	User            *UserDTO `json:"user,omitempty"`
	CreatedAt       string   `json:"createdAt" example:"2024-01-01T10:00:00Z"`
	UpdatedAt       string   `json:"updatedAt" example:"2024-01-01T10:00:00Z"`
	ID              string   `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
	UserID          string   `json:"userId" example:"123e4567-e89b-12d3-a456-426614174000"`
	Specializations []string `json:"specializations" example:"Mountain,Hiking"`
}

type TourDateDTO struct {
	Date        string `json:"date" example:"2024-07-15T00:00:00Z"`
	CreatedAt   string `json:"createdAt" example:"2024-01-15T10:00:00Z"`
	UpdatedAt   string `json:"updatedAt" example:"2024-01-15T10:00:00Z"`
	ID          string `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
	TourID      string `json:"tourId" example:"123e4567-e89b-12d3-a456-426614174000"`
	GroupSize   int32  `json:"groupSize" example:"10"`
	IsAvailable bool   `json:"isAvailable" example:"true"`
}

type PhotoDTO struct {
	Description *string `json:"description" example:"Beautiful mountain view"`
	URL         string  `json:"url" example:"https://example.com/photo.jpg"`
	CreatedAt   string  `json:"createdAt" example:"2024-01-15T10:00:00Z"`
	ID          string  `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
	TourID      string  `json:"tourId" example:"123e4567-e89b-12d3-a456-426614174000"`
}

type VideoDTO struct {
	Description *string `json:"description" example:"Tour highlights"`
	URL         string  `json:"url" example:"https://example.com/video.mp4"`
	CreatedAt   string  `json:"createdAt" example:"2024-01-15T10:00:00Z"`
	ID          string  `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
	TourID      string  `json:"tourId" example:"123e4567-e89b-12d3-a456-426614174000"`
}

type TourMaterialDTO struct {
	Title     string `json:"title" example:"Safety Guidelines"`
	URL       string `json:"url" example:"https://example.com/safety.pdf"`
	Type      string `json:"type" example:"PDF"`
	CreatedAt string `json:"createdAt" example:"2024-01-15T10:00:00Z"`
	ID        string `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
	TourID    string `json:"tourId" example:"123e4567-e89b-12d3-a456-426614174000"`
}

type TagDTO struct {
	Name string `json:"name" example:"Adventure"`
	ID   string `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
}

type CategoryDTO struct {
	Name string `json:"name" example:"Mountain Tours"`
	ID   string `json:"id" example:"123e4567-e89b-12d3-a456-426614174000"`
}

type CreateTourRequest struct {
	Title           string          `json:"title" binding:"required" example:"Mountain Adventure"`
	Description     string          `json:"description" binding:"required" example:"An exciting mountain tour"`
	Difficulty      string          `json:"difficulty" binding:"required" example:"MEDIUM"`
	Slug            *string         `json:"slug" example:"mountain-adventure"`
	CoverURL        *string         `json:"coverUrl" example:"https://example.com/cover.jpg"`
	GuideID         *string         `json:"guideId" example:"123e4567-e89b-12d3-a456-426614174000"`
	DurationDays    *int32          `json:"durationDays" example:"7"`
	Price           *float64        `json:"price" example:"1500.00"`
	StartLocation   *string         `json:"startLocation" example:"Almaty"`
	EndLocation     *string         `json:"endLocation" example:"Astana"`
	MinAge          *int32          `json:"minAge" example:"18"`
	Languages       []string        `json:"languages" example:"English,Russian"`
	AvailableMonths []string        `json:"availableMonths" example:"June,July,August"`
	Program         json.RawMessage `json:"program" swaggertype:"object"`
}

type UpdateTourRequest struct {
	Title           *string          `json:"title" example:"Mountain Adventure Updated"`
	Slug            *string          `json:"slug" example:"mountain-adventure-updated"`
	Description     *string          `json:"description" example:"An updated exciting mountain tour"`
	Difficulty      *string          `json:"difficulty" example:"HARD"`
	CoverURL        *string          `json:"coverUrl" example:"https://example.com/new-cover.jpg"`
	GuideID         *string          `json:"guideId" example:"123e4567-e89b-12d3-a456-426614174000"`
	Price           *float64         `json:"price" example:"2000.00"`
	DurationDays    *int32           `json:"durationDays" example:"10"`
	StartLocation   *string          `json:"startLocation" example:"Bishkek"`
	EndLocation     *string          `json:"endLocation" example:"Osh"`
	MinAge          *int32           `json:"minAge" example:"21"`
	Program         *json.RawMessage `json:"program" swaggertype:"object"`
	Languages       *[]string        `json:"languages" example:"English,Russian,Kazakh"`
	AvailableMonths *[]string        `json:"availableMonths" example:"May,June,July,August,September"`
}

func (r *UpdateTourRequest) ToDomain() (*domain.UpdateTourParams, error) {
	var difficulty *domain.DifficultyLevel
	if r.Difficulty != nil {
		d := domain.DifficultyLevel(*r.Difficulty)
		difficulty = &d
	}

	var guideID *uuid.UUID
	if r.GuideID != nil {
		parsedID, err := uuid.Parse(*r.GuideID)
		if err != nil {
			return nil, err
		}
		guideID = &parsedID
	}

	return &domain.UpdateTourParams{
		Title:           r.Title,
		Slug:            r.Slug,
		Description:     r.Description,
		Difficulty:      difficulty,
		CoverURL:        r.CoverURL,
		GuideID:         guideID,
		Price:           r.Price,
		DurationDays:    r.DurationDays,
		StartLocation:   r.StartLocation,
		EndLocation:     r.EndLocation,
		MinAge:          r.MinAge,
		Program:         r.Program,
		Languages:       r.Languages,
		AvailableMonths: r.AvailableMonths,
	}, nil
}
