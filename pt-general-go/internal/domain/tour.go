package domain

import (
	"encoding/json"
	"errors"
	"fmt"
	"strings"
	"time"
)

type DifficultyLevel string

const (
	DifficultyLevelEASY   DifficultyLevel = "EASY"
	DifficultyLevelMEDIUM DifficultyLevel = "MEDIUM"
	DifficultyLevelHARD   DifficultyLevel = "HARD"
)

type CreateTourParams struct {
	MinAge          *int32          `json:"minAge"`
	EndLocation     *string         `json:"endLocation"`
	StartLocation   *string         `json:"startLocation"`
	Price           *float64        `json:"price"`
	DurationDays    *int32          `json:"durationDays"`
	GuideID         *int32          `json:"guideId"`
	Slug            *string         `json:"slug"`
	CoverURL        *string         `json:"coverUrl"`
	Description     string          `json:"description"`
	Difficulty      string          `json:"difficulty"`
	Title           string          `json:"title"`
	Program         json.RawMessage `json:"program" swaggertype:"object"`
	Languages       []string        `json:"languages"`
	AvailableMonths []string        `json:"availableMonths"`
}

func (t *CreateTourParams) Validate() error {
	if strings.TrimSpace(t.Title) == "" ||
		strings.TrimSpace(t.Description) == "" ||
		strings.TrimSpace(t.Difficulty) == "" ||
		t.GuideID == nil {
		return fmt.Errorf("%w: Missing necessary fields", ErrValidation)
	}

	switch DifficultyLevel(t.Difficulty) {
	case DifficultyLevelEASY, DifficultyLevelMEDIUM, DifficultyLevelHARD:
	default:
		return fmt.Errorf("%w: Invalid difficulty", ErrValidation)
	}
	return nil
}

type UpdateTourParams struct {
	DurationDays    *int32           `json:"durationDays"`
	MinAge          *int32           `json:"minAge"`
	EndLocation     *string          `json:"endLocation"`
	Price           *float64         `json:"price"`
	StartLocation   *string          `json:"startLocation"`
	GuideID         *int32           `json:"guideId"`
	CoverURL        *string          `json:"coverUrl"`
	Difficulty      *DifficultyLevel `json:"difficulty"`
	Description     *string          `json:"description"`
	Title           *string          `json:"title"`
	Slug            *string          `json:"slug"`
	Program         *json.RawMessage `json:"program" swaggertype:"object"`
	Languages       *[]string        `json:"languages"`
	AvailableMonths *[]string        `json:"availableMonths"`
}

func (r *UpdateTourParams) Validate() error {
	if r.DurationDays == nil &&
		r.MinAge == nil &&
		r.EndLocation == nil &&
		r.Price == nil &&
		r.StartLocation == nil &&
		r.GuideID == nil &&
		r.CoverURL == nil &&
		r.Difficulty == nil &&
		r.Description == nil &&
		r.Title == nil &&
		r.Slug == nil &&
		r.Program == nil &&
		r.Languages == nil &&
		r.AvailableMonths == nil {
		return errors.New("at least one field must be provided")
	}

	// Валидация конкретных полей, если они переданы
	if r.Price != nil && *r.Price < 0 {
		return errors.New("price cannot be negative")
	}
	if r.MinAge != nil && *r.MinAge < 0 {
		return errors.New("minAge cannot be negative")
	}
	if r.DurationDays != nil && *r.DurationDays <= 0 {
		return errors.New("durationDays must be positive")
	}
	if r.Title != nil && strings.TrimSpace(*r.Title) == "" {
		return errors.New("title cannot be empty")
	}
	if r.Slug != nil && strings.TrimSpace(*r.Slug) == "" {
		return errors.New("slug cannot be empty")
	}

	return nil
}

type Tour struct {
	UpdatedAt       time.Time       `json:"updatedAt"`
	CreatedAt       time.Time       `json:"createdAt"`
	DurationDays    *int32          `json:"durationDays"`
	MinAge          *int32          `json:"minAge"`
	EndLocation     *string         `json:"endLocation"`
	Price           *float64        `json:"price"`
	StartLocation   *string         `json:"startLocation"`
	GuideID         *int32          `json:"guideId"`
	CoverURL        *string         `json:"coverUrl"`
	Difficulty      DifficultyLevel `json:"difficulty"`
	Description     string          `json:"description"`
	Title           string          `json:"title"`
	Slug            string          `json:"slug"`
	Program         json.RawMessage `json:"program" swaggertype:"object"`
	Languages       []string        `json:"languages"`
	AvailableMonths []string        `json:"availableMonths"`
	ID              int32           `json:"id"`
}

type TourFull struct {
	Dates      []TourDate     `json:"dates"`
	Photos     []Photo        `json:"photos"`
	Videos     []Video        `json:"videos"`
	Materials  []TourMaterial `json:"materials"`
	Tags       []Tag          `json:"tags"`
	Categories []Category     `json:"categories"`
	Tour
	Guide Guide `json:"guide"`
}

type BookingStatus string

const (
	BookingStatusPending   BookingStatus = "PENDING"
	BookingStatusConfirmed BookingStatus = "CONFIRMED"
	BookingStatusCancelled BookingStatus = "CANCELLED"
)

type Booking struct {
	CreatedAt    time.Time     `json:"createdAt"`
	UpdatedAt    time.Time     `json:"updatedAt"`
	Status       BookingStatus `json:"status"`
	TotalPrice   float64       `json:"totalPrice"`
	ID           int32         `json:"id"`
	TourID       int32         `json:"tourId"`
	UserID       int32         `json:"userId"`
	Participants int32         `json:"participants"`
}

type Category struct {
	Name string `json:"name"`
	ID   int32  `json:"id"`
}

type Guide struct {
	CreatedAt       time.Time `json:"createdAt"`
	UpdatedAt       time.Time `json:"updatedAt"`
	Experience      *string   `json:"experience"`
	User            *User     `json:"user"`
	Specializations []string  `json:"specializations"`
	ID              int32     `json:"id"`
	UserID          int32     `json:"userId"`
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
	ID            int32         `json:"id"`
	BookingID     int32         `json:"bookingId"`
}

type Photo struct {
	CreatedAt   time.Time `json:"createdAt"`
	Description *string   `json:"description"`
	URL         string    `json:"url"`
	ID          int32     `json:"id"`
	TourID      int32     `json:"tourId"`
}

type Review struct {
	CreatedAt time.Time `json:"createdAt"`
	Comment   string    `json:"comment"`
	ID        int32     `json:"id"`
	TourID    int32     `json:"tourId"`
	UserID    int32     `json:"userId"`
	Rating    int32     `json:"rating"`
}

type Tag struct {
	Name string `json:"name"`
	ID   int32  `json:"id"`
}

type TourCategory struct {
	CategoryID int32 `json:"categoryId"`
	TourID     int32 `json:"tourId"`
}

type TourDate struct {
	Date        time.Time `json:"date"`
	CreatedAt   time.Time `json:"createdAt"`
	UpdatedAt   time.Time `json:"updatedAt"`
	ID          int32     `json:"id"`
	GroupSize   int32     `json:"groupSize"`
	TourID      int32     `json:"tourId"`
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

type MaterialType string

const (
	MaterialTypePDF   MaterialType = "PDF"
	MaterialTypeImage MaterialType = "IMAGE"
	MaterialTypeVideo MaterialType = "VIDEO"
	MaterialTypeLink  MaterialType = "LINK"
	MaterialTypeAudio MaterialType = "AUDIO"
)

type TourMaterial struct {
	CreatedAt time.Time    `json:"createdAt"`
	Title     string       `json:"title"`
	URL       string       `json:"url"`
	Type      MaterialType `json:"type"`
	ID        int32        `json:"id"`
	TourID    int32        `json:"tourId"`
}

type TourTag struct {
	TagID  int32 `json:"tagId"`
	TourID int32 `json:"tourId"`
}

type Video struct {
	CreatedAt   time.Time `json:"createdAt"`
	Description *string   `json:"description"`
	URL         string    `json:"url"`
	ID          int32     `json:"id"`
	TourID      int32     `json:"tourId"`
}
