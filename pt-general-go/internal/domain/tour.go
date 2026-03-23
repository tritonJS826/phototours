package domain

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"
	"time"

	"github.com/google/uuid"
)

type DifficultyLevel string

const (
	DifficultyLevelEASY   DifficultyLevel = "EASY"
	DifficultyLevelMEDIUM DifficultyLevel = "MEDIUM"
	DifficultyLevelHARD   DifficultyLevel = "HARD"
)

type CreateTourParams struct {
	MinAge             int32           `json:"minAge"`
	EndLocation        string          `json:"endLocation"`
	StartLocation      string          `json:"startLocation"`
	Price              float64         `json:"price"`
	DurationDays       string          `json:"durationDays"`
	Slug               string          `json:"slug"`
	CoverURL           string          `json:"coverUrl"`
	Description        string          `json:"description"`
	Difficulty         string          `json:"difficulty"`
	Title              string          `json:"title"`
	Program            json.RawMessage `json:"program" swaggertype:"object"`
	FAQ                json.RawMessage `json:"faq" swaggertype:"object"`
	Languages          []string        `json:"languages"`
	AvailableMonths    []string        `json:"availableMonths"`
	GroupSize          *int32          `json:"groupSize"`
	SpotsLeft          *int32          `json:"spotsLeft"`
	Subtitle           *string         `json:"subtitle"`
	PopUp1Title        string          `json:"popUp1Title"`
	PopUp1Description  string          `json:"popUp1Description"`
	PopUp2Title        string          `json:"popUp2Title"`
	PopUp2Description  string          `json:"popUp2Description"`
	PopUp1ImageUrl     string          `json:"popUp1ImageUrl"`
	PopUp2ImageUrl     string          `json:"popUp2ImageUrl"`
	CtaTitle           string          `json:"ctaTitle"`
	CtaDescription     string          `json:"ctaDescription"`
	ReviewsSectionName string          `json:"reviewsSectionName"`
}

func (t *CreateTourParams) Validate() error {
	if strings.TrimSpace(t.Title) == "" ||
		strings.TrimSpace(t.Description) == "" ||
		strings.TrimSpace(t.Difficulty) == "" {
		return fmt.Errorf("%w: Missing necessary fields", ErrValidation)
	}

	switch DifficultyLevel(t.Difficulty) {
	case DifficultyLevelEASY, DifficultyLevelMEDIUM, DifficultyLevelHARD:
	default:
		return fmt.Errorf("%w: Invalid difficulty", ErrValidation)
	}

	if t.GroupSize != nil && (*t.GroupSize < 1 || *t.GroupSize > 500) {
		return fmt.Errorf("%w: groupSize must be between 1 and 500", ErrValidation)
	}

	if t.SpotsLeft != nil && (*t.SpotsLeft < 1 || *t.SpotsLeft > 500) {
		return fmt.Errorf("%w: spotsLeft must be between 1 and 500", ErrValidation)
	}

	return nil
}

type UpdateTourParams struct {
	DurationDays       *string          `json:"durationDays"`
	MinAge             *int32           `json:"minAge"`
	EndLocation        *string          `json:"endLocation"`
	Price              *float64         `json:"price"`
	StartLocation      *string          `json:"startLocation"`
	CoverURL           *string          `json:"coverUrl"`
	Difficulty         *DifficultyLevel `json:"difficulty"`
	Description        *string          `json:"description"`
	Title              *string          `json:"title"`
	Slug               *string          `json:"slug"`
	Program            *json.RawMessage `json:"program" swaggertype:"object"`
	FAQ                *json.RawMessage `json:"faq" swaggertype:"object"`
	Languages          *[]string        `json:"languages"`
	AvailableMonths    *[]string        `json:"availableMonths"`
	GroupSize          *int32           `json:"groupSize"`
	SpotsLeft          *int32           `json:"spotsLeft"`
	Subtitle           *string          `json:"subtitle"`
	PopUp1Title        *string          `json:"popUp1Title"`
	PopUp1Description  *string          `json:"popUp1Description"`
	PopUp2Title        *string          `json:"popUp2Title"`
	PopUp2Description  *string          `json:"popUp2Description"`
	PopUp1ImageUrl     *string          `json:"popUp1ImageUrl"`
	PopUp2ImageUrl     *string          `json:"popUp2ImageUrl"`
	ReviewsSectionName *string          `json:"reviewsSectionName"`
}

func (r *UpdateTourParams) Validate() error {
	if r.DurationDays == nil &&
		r.MinAge == nil &&
		r.EndLocation == nil &&
		r.Price == nil &&
		r.StartLocation == nil &&
		r.CoverURL == nil &&
		r.Difficulty == nil &&
		r.Description == nil &&
		r.Title == nil &&
		r.Slug == nil &&
		r.Program == nil &&
		r.FAQ == nil &&
		r.Languages == nil &&
		r.AvailableMonths == nil &&
		r.GroupSize == nil &&
		r.SpotsLeft == nil &&
		r.Subtitle == nil &&
		r.PopUp1Title == nil &&
		r.PopUp1Description == nil &&
		r.PopUp2Title == nil &&
		r.PopUp2Description == nil &&
		r.PopUp1ImageUrl == nil &&
		r.PopUp2ImageUrl == nil &&
		r.ReviewsSectionName == nil {
		return errors.New("at least one field must be provided")
	}

	// Валидация конкретных полей, если они переданы
	if r.Price != nil && *r.Price < 0 {
		return errors.New("price cannot be negative")
	}
	if r.MinAge != nil && *r.MinAge < 0 {
		return errors.New("minAge cannot be negative")
	}
	if r.DurationDays != nil && strings.TrimSpace(*r.DurationDays) == "" {
		return errors.New("durationDays cannot be empty")
	}
	if r.Title != nil && strings.TrimSpace(*r.Title) == "" {
		return errors.New("title cannot be empty")
	}
	if r.Slug != nil && strings.TrimSpace(*r.Slug) == "" {
		return errors.New("slug cannot be empty")
	}
	if r.GroupSize != nil && (*r.GroupSize < 1 || *r.GroupSize > 500) {
		return errors.New("groupSize must be between 1 and 500")
	}
	if r.SpotsLeft != nil && (*r.SpotsLeft < 1 || *r.SpotsLeft > 500) {
		return errors.New("spotsLeft must be between 1 and 500")
	}

	return nil
}

type Tour struct {
	UpdatedAt          time.Time       `json:"updatedAt"`
	CreatedAt          time.Time       `json:"createdAt"`
	DurationDays       *string         `json:"durationDays"`
	MinAge             *int32          `json:"minAge"`
	EndLocation        *string         `json:"endLocation"`
	Price              *float64        `json:"price"`
	StartLocation      *string         `json:"startLocation"`
	Location           *string         `json:"location"`
	CoverURL           *string         `json:"coverUrl"`
	Difficulty         DifficultyLevel `json:"difficulty"`
	Description        string          `json:"description"`
	Title              string          `json:"title"`
	Slug               string          `json:"slug"`
	Program            json.RawMessage `json:"program" swaggertype:"object"`
	FAQ                json.RawMessage `json:"faq" swaggertype:"object"`
	Languages          []string        `json:"languages"`
	AvailableMonths    []string        `json:"availableMonths"`
	GroupSize          *int32          `json:"groupSize"`
	SpotsLeft          *int32          `json:"spotsLeft"`
	Subtitle           *string         `json:"subtitle"`
	PopUp1Title        string          `json:"popUp1Title"`
	PopUp1Description  string          `json:"popUp1Description"`
	PopUp2Title        string          `json:"popUp2Title"`
	PopUp2Description  string          `json:"popUp2Description"`
	PopUp1ImageUrl     string          `json:"popUp1ImageUrl"`
	PopUp2ImageUrl     string          `json:"popUp2ImageUrl"`
	CtaTitle           string          `json:"ctaTitle"`
	CtaDescription     string          `json:"ctaDescription"`
	ReviewsSectionName string          `json:"reviewsSectionName"`
	ID                 uuid.UUID       `json:"id"`
}

type TourFull struct {
	Dates      []TourDate `json:"dates"`
	Photos     []Photo    `json:"photos"`
	Reviews    []Review   `json:"reviews"`
	Summary    []string   `json:"summary"`
	Activities []Activity `json:"activities"`
	Included   []string   `json:"included"`
	Tour
	StarAmount   float64 `json:"starAmount"`
	ReviewAmount int64   `json:"reviewAmount"`
}

type Activity struct {
	Activity string `json:"activity"`
	IconName string `json:"iconName"`
}

type TourPreview struct {
	Dates []TourDate `json:"dates"`
	Tour
	StarAmount   float64 `json:"starAmount"`
	ReviewAmount int64   `json:"reviewAmount"`
}

type PageMetadatum struct {
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
	URL       string    `json:"url"`
	Tags      string    `json:"tags"`
}

type PaymentMethod string

const (
	PaymentMethodCard         PaymentMethod = "CARD"
	PaymentMethodPaypal       PaymentMethod = "PAYPAL"
	PaymentMethodBankTransfer PaymentMethod = "BANK_TRANSFER"
	PaymentMethodCash         PaymentMethod = "CASH"
)

type PaymentStatus string

const (
	PaymentStatusPending   PaymentStatus = "PENDING"
	PaymentStatusCompleted PaymentStatus = "COMPLETED"
	PaymentStatusFailed    PaymentStatus = "FAILED"
	PaymentStatusRefunded  PaymentStatus = "REFUNDED"
)

type Payment struct {
	CreatedAt     time.Time     `json:"createdAt"`
	UpdatedAt     time.Time     `json:"updatedAt"`
	PaymentMethod PaymentMethod `json:"paymentMethod"`
	Status        PaymentStatus `json:"status"`
	TransactionID string        `json:"transactionId"`
	Amount        float64       `json:"amount"`
	ID            uuid.UUID     `json:"id"`
	BookingID     uuid.UUID     `json:"bookingId"`
}

type Photo struct {
	CreatedAt   time.Time `json:"createdAt"`
	Description *string   `json:"description"`
	URL         string    `json:"url"`
	ID          uuid.UUID `json:"id"`
	TourID      uuid.UUID `json:"tourId"`
}

type Review struct {
	CreatedAt time.Time `json:"createdAt"`
	Comment   string    `json:"comment"`
	ID        uuid.UUID `json:"id"`
	TourID    uuid.UUID `json:"tourId"`
	UserID    uuid.UUID `json:"userId"`
	Rating    int32     `json:"rating"`
	UserName  string    `json:"userName"`
	Link      string    `json:"link"`
	Image     string    `json:"image"`
}

type ReviewInfo struct {
	ReviewAmount int64
	StarAmount   float64
}

type TourDate struct {
	DateFrom    time.Time `json:"dateFrom"`
	DateTo      time.Time `json:"dateTo"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
	ID          uuid.UUID `json:"id"`
	GroupSize   int32     `json:"groupSize"`
	TourID      uuid.UUID `json:"tourId"`
	IsAvailable bool      `json:"isAvailable"`
}

type TourFilter struct {
	Location  *string
	DateFrom  *time.Time
	DateTo    *time.Time
	GroupSize *int32
	PriceMin  *float64
	PriceMax  *float64
	Season    *string
}

var validSeasons = map[string]bool{
	"winter": true,
	"spring": true,
	"summer": true,
	"autumn": true,
}

var SeasonMonths = map[string][]int32{
	"winter": {12, 1, 2},
	"spring": {3, 4, 5},
	"summer": {6, 7, 8},
	"autumn": {9, 10, 11},
}

func (f *TourFilter) Validate() error {
	if f.GroupSize != nil && *f.GroupSize < 1 {
		return errors.New("groupSize must be at least 1")
	}

	if f.PriceMin != nil && *f.PriceMin < 0 {
		return errors.New("priceMin cannot be negative")
	}

	if f.PriceMax != nil && *f.PriceMax < 0 {
		return errors.New("priceMax cannot be negative")
	}

	if f.PriceMin != nil && f.PriceMax != nil && *f.PriceMin > *f.PriceMax {
		return errors.New("priceMin cannot be greater than priceMax")
	}

	if f.DateFrom != nil && f.DateTo != nil && f.DateFrom.After(*f.DateTo) {
		return errors.New("dateFrom cannot be after dateTo")
	}

	if f.Season != nil {
		season := strings.ToLower(*f.Season)
		if !validSeasons[season] {
			return errors.New("invalid season, expected: winter, spring, summer, autumn")
		}
		f.Season = &season
	}

	return nil
}

type TourActivity struct {
	CreatedAt time.Time `json:"createdAt"`
	Activity  string    `json:"activity"`
	IconName  string    `json:"iconName"`
	ID        uuid.UUID `json:"id"`
	TourID    uuid.UUID `json:"tourId"`
}

type TourIncluded struct {
	CreatedAt time.Time `json:"createdAt"`
	Included  string    `json:"included"`
	ID        uuid.UUID `json:"id"`
	TourID    uuid.UUID `json:"tourId"`
}

type TourSummary struct {
	CreatedAt time.Time `json:"createdAt"`
	Name      string    `json:"name"`
	Value     string    `json:"value"`
	ID        uuid.UUID `json:"id"`
	TourID    uuid.UUID `json:"tourId"`
}
