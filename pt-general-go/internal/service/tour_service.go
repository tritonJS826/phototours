package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"
	"pt-general-go/internal/repository/mapper"
	"strings"

	"github.com/google/uuid"
	"go.uber.org/zap"
	"golang.org/x/sync/errgroup"
)

type TourService struct {
	photoRepository        *repository.PhotoRepository
	reviewRepository       *repository.ReviewRepository
	tourRepository         *repository.TourRepository
	tourActivityRepository *repository.TourActivityRepository
	tourDateRepository     *repository.TourDateRepository
	tourIncludedRepository *repository.TourIncludedRepository
	tourSummaryRepository  *repository.TourSummaryRepository
	logger                 *zap.Logger
}

func NewTourService(
	photoRepository *repository.PhotoRepository,
	reviewRepository *repository.ReviewRepository,
	tourRepository *repository.TourRepository,
	tourActivityRepository *repository.TourActivityRepository,
	tourDateRepository *repository.TourDateRepository,
	tourIncludedRepository *repository.TourIncludedRepository,
	tourSummaryRepository *repository.TourSummaryRepository,
	logger *zap.Logger,
) *TourService {
	return &TourService{
		photoRepository:        photoRepository,
		reviewRepository:       reviewRepository,
		tourDateRepository:     tourDateRepository,
		tourRepository:         tourRepository,
		tourActivityRepository: tourActivityRepository,
		tourIncludedRepository: tourIncludedRepository,
		tourSummaryRepository:  tourSummaryRepository,
		logger:                 logger,
	}
}

func (s *TourService) CreateTour(ctx context.Context, createTour *domain.CreateTourParams) (*domain.Tour, error) {
	return s.tourRepository.CreateTour(ctx, createTour)
}

func (s *TourService) GetTourFullByID(ctx context.Context, id uuid.UUID) (*domain.TourFull, error) {
	tour, err := s.tourRepository.GetTourByID(ctx, id)
	if err != nil {
		return nil, err
	}
	return s.buildTourFull(ctx, tour)
}

func (s *TourService) GetTourFullBySlug(ctx context.Context, slug string) (*domain.TourFull, error) {
	tour, err := s.tourRepository.GetTourBySlug(ctx, slug)
	if err != nil {
		return nil, err
	}
	return s.buildTourFull(ctx, tour)
}

func (s *TourService) GetAllTours(ctx context.Context, limit, offset int32, filters *domain.TourFilter) ([]domain.TourFull, error) {
	dbFilters := filters
	if filters != nil && filters.Location != nil {
		dbFilters = &domain.TourFilter{
			DateFrom:  filters.DateFrom,
			DateTo:    filters.DateTo,
			GroupSize: filters.GroupSize,
			PriceMin:  filters.PriceMin,
			PriceMax:  filters.PriceMax,
			Season:    filters.Season,
			Location:  nil, // Remove location filter for database query
		}
	}

	tours, err := s.tourRepository.GetTours(ctx, limit, offset, dbFilters)
	if err != nil {
		return nil, err
	}

	if len(tours) == 0 {
		return []domain.TourFull{}, nil
	}

	if filters != nil && filters.Location != nil {
		location := strings.ToLower(*filters.Location)
		filteredTours := make([]domain.Tour, 0, len(tours))
		for _, tour := range tours {
			if tour.Location != nil && strings.Contains(strings.ToLower(*tour.Location), location) {
				filteredTours = append(filteredTours, tour)
			}
		}
		tours = filteredTours
	}

	tourIDs := make([]uuid.UUID, len(tours))
	for i, tour := range tours {
		tourIDs[i] = tour.ID
	}

	errGroup, ctx := errgroup.WithContext(ctx)
	var (
		photosMap     map[uuid.UUID][]domain.Photo
		tourDatesMap  map[uuid.UUID][]domain.TourDate
		reviewsMap    map[uuid.UUID][]domain.Review
		reviewInfoMap map[uuid.UUID]*domain.ReviewInfo
		activitiesMap map[uuid.UUID][]domain.TourActivity
		includedMap   map[uuid.UUID][]string
		summaryMap    map[uuid.UUID][]string
	)

	errGroup.Go(func() error {
		var err error
		photosMap, err = s.photoRepository.GetPhotosByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		tourDatesMap, err = s.tourDateRepository.GetTourDatesByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		reviewsMap, err = s.reviewRepository.GetReviewsByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		reviewInfoMap, err = s.reviewRepository.GetReviewInfoByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		activitiesMap, err = s.tourActivityRepository.GetTourActivitiesByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		includedMap, err = s.tourIncludedRepository.GetTourIncludedStringsByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		summaryMap, err = s.tourSummaryRepository.GetTourSummaryStringsByTourIDs(ctx, tourIDs)
		return err
	})

	if err := errGroup.Wait(); err != nil {
		return nil, err
	}

	result := make([]domain.TourFull, len(tours))
	for i, tour := range tours {
		reviewInfo := reviewInfoMap[tour.ID]
		if reviewInfo == nil {
			reviewInfo = &domain.ReviewInfo{
				ReviewAmount: 0,
				StarAmount:   5,
			}
		}

		activities := activitiesMap[tour.ID]
		if activities == nil {
			activities = []domain.TourActivity{}
		}

		included := includedMap[tour.ID]
		if included == nil {
			included = []string{}
		}

		summary := summaryMap[tour.ID]
		if summary == nil {
			summary = []string{}
		}

		result[i] = domain.TourFull{
			Tour:         tour,
			Photos:       photosMap[tour.ID],
			Dates:        tourDatesMap[tour.ID],
			Reviews:      reviewsMap[tour.ID],
			Summary:      summary,
			Activities:   mapper.MapDomainTourActivitiesToActivityStructs(activities),
			Included:     included,
			StarAmount:   reviewInfo.StarAmount,
			ReviewAmount: reviewInfo.ReviewAmount,
		}
	}

	return result, nil
}

func (s *TourService) buildTourFull(ctx context.Context, tour *domain.Tour) (*domain.TourFull, error) {
	errGroup, ctx := errgroup.WithContext(ctx)

	var (
		photos     []domain.Photo
		tourDates  []domain.TourDate
		reviews    []domain.Review
		reviewInfo *domain.ReviewInfo
		activities []domain.Activity
		included   []string
		summary    []string
	)

	errGroup.Go(func() error {
		p, err := s.photoRepository.GetPhotosByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		photos = p
		return nil
	})

	errGroup.Go(func() error {
		td, err := s.tourDateRepository.GetTourDatesByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		tourDates = td
		return nil
	})

	errGroup.Go(func() error {
		r, err := s.reviewRepository.GetReviewsByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		reviews = r
		return nil
	})

	errGroup.Go(func() error {
		ri, err := s.reviewRepository.GetReviewInfo(ctx, tour.ID)
		if err != nil {
			return err
		}
		reviewInfo = ri
		return nil
	})

	errGroup.Go(func() error {
		a, err := s.tourActivityRepository.GetTourActivitiesByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		activities = mapper.MapDomainTourActivitiesToActivityStructs(a)
		return nil
	})

	errGroup.Go(func() error {
		i, err := s.tourIncludedRepository.GetTourIncludedStringsByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		included = i
		return nil
	})

	errGroup.Go(func() error {
		s, err := s.tourSummaryRepository.GetTourSummaryStringsByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		summary = s
		return nil
	})

	if err := errGroup.Wait(); err != nil {
		return nil, err
	}

	return &domain.TourFull{
		Tour:         *tour,
		Photos:       photos,
		Dates:        tourDates,
		Reviews:      reviews,
		Summary:      summary,
		Activities:   activities,
		Included:     included,
		StarAmount:   reviewInfo.StarAmount,
		ReviewAmount: reviewInfo.ReviewAmount,
	}, nil
}

func (s *TourService) UpdateTourByID(ctx context.Context, id uuid.UUID, updateTourRequest *domain.UpdateTourParams) (*domain.TourFull, error) {
	tour, err := s.tourRepository.UpdateTourByID(ctx, id, updateTourRequest)
	if err != nil {
		return nil, err
	}

	if updateTourRequest.Photos != nil {
		existingPhotos, err := s.photoRepository.GetPhotosByTourID(ctx, id)
		if err != nil {
			return nil, err
		}

		existingPhotoIDs := make(map[uuid.UUID]bool)
		for _, p := range existingPhotos {
			existingPhotoIDs[p.ID] = true
		}

		processedPhotoIDs := make(map[uuid.UUID]bool)

		for _, photoUpdate := range *updateTourRequest.Photos {
			if photoUpdate.ID != nil && *photoUpdate.ID != uuid.Nil {
				processedPhotoIDs[*photoUpdate.ID] = true

				if existingPhotoIDs[*photoUpdate.ID] {
					_, err := s.photoRepository.UpdatePhoto(ctx, *photoUpdate.ID, photoUpdate.URL, photoUpdate.Description)
					if err != nil {
						return nil, err
					}
				} else {
					newID := uuid.New()
					_, err := s.photoRepository.CreatePhoto(ctx, newID, id, photoUpdate.URL, photoUpdate.Description)
					if err != nil {
						return nil, err
					}
				}
			} else {
				newID := uuid.New()
				_, err := s.photoRepository.CreatePhoto(ctx, newID, id, photoUpdate.URL, photoUpdate.Description)
				if err != nil {
					return nil, err
				}
			}
		}

		for _, existingPhoto := range existingPhotos {
			if !processedPhotoIDs[existingPhoto.ID] {
				err := s.photoRepository.DeletePhoto(ctx, existingPhoto.ID)
				if err != nil {
					return nil, err
				}
			}
		}
	}

	return s.buildTourFull(ctx, tour)
}

func (s *TourService) DeleteTourByID(ctx context.Context, id uuid.UUID) error {
	return s.tourRepository.DeleteTourByID(ctx, id)
}

func (s *TourService) GetSimilarToursByTourID(ctx context.Context, tourID uuid.UUID) ([]domain.Tour, error) {
	return s.tourRepository.GetSimilarToursByTourID(ctx, tourID)
}
