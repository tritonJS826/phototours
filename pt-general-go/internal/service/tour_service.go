package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"
	"strings"

	"github.com/google/uuid"
	"go.uber.org/zap"
	"golang.org/x/sync/errgroup"
)

type TourService struct {
	categoryRepository     *repository.CategoryRepository
	guideRepository        *repository.GuideRepository
	photoRepository        *repository.PhotoRepository
	reviewRepository       *repository.ReviewRepository
	tagRepository          *repository.TagRepository
	tourRepository         *repository.TourRepository
	tourActivityRepository *repository.TourActivityRepository
	tourDateRepository     *repository.TourDateRepository
	tourIncludedRepository *repository.TourIncludedRepository
	tourMaterialRepository *repository.TourMaterialRepository
	tourSummaryRepository  *repository.TourSummaryRepository
	videoRepository        *repository.VideoRepository
	logger                 *zap.Logger
}

func NewTourService(
	categoryRepository *repository.CategoryRepository,
	guideRepository *repository.GuideRepository,
	photoRepository *repository.PhotoRepository,
	reviewRepository *repository.ReviewRepository,
	tagRepository *repository.TagRepository,
	tourRepository *repository.TourRepository,
	tourActivityRepository *repository.TourActivityRepository,
	tourDateRepository *repository.TourDateRepository,
	tourIncludedRepository *repository.TourIncludedRepository,
	tourMaterialRepository *repository.TourMaterialRepository,
	tourSummaryRepository *repository.TourSummaryRepository,
	videoRepository *repository.VideoRepository,
	logger *zap.Logger,
) *TourService {
	return &TourService{
		categoryRepository:     categoryRepository,
		guideRepository:        guideRepository,
		photoRepository:        photoRepository,
		reviewRepository:       reviewRepository,
		tagRepository:          tagRepository,
		tourDateRepository:     tourDateRepository,
		tourRepository:         tourRepository,
		tourActivityRepository: tourActivityRepository,
		tourIncludedRepository: tourIncludedRepository,
		tourMaterialRepository: tourMaterialRepository,
		tourSummaryRepository:  tourSummaryRepository,
		videoRepository:        videoRepository,
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

func (s *TourService) GetAllTours(ctx context.Context, limit, offset int32, filters *domain.TourFilter) ([]domain.TourPreview, error) {
	// Remove location filter from database query to handle it client-side
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
		return []domain.TourPreview{}, nil
	}

	// Apply location filter client-side if specified
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
	guideIDsMap := make(map[uuid.UUID]bool)
	for i, tour := range tours {
		tourIDs[i] = tour.ID
		if tour.GuideID != nil {
			guideIDsMap[*tour.GuideID] = true
		}
	}

	guideIDs := make([]uuid.UUID, 0, len(guideIDsMap))
	for guideID := range guideIDsMap {
		guideIDs = append(guideIDs, guideID)
	}

	errGroup, ctx := errgroup.WithContext(ctx)
	var (
		// guidesMap        map[uuid.UUID]*domain.Guide
		// videosMap        map[uuid.UUID][]domain.Video
		// photosMap        map[uuid.UUID][]domain.Photo
		tourDatesMap map[uuid.UUID][]domain.TourDate
		// tourMaterialsMap map[uuid.UUID][]domain.TourMaterial
		tagsMap       map[uuid.UUID][]domain.Tag
		categoriesMap map[uuid.UUID][]domain.Category
		// reviewsMap       map[uuid.UUID][]domain.Review
		reviewInfoMap map[uuid.UUID]*domain.ReviewInfo
	)

	// errGroup.Go(func() error {
	// 	var err error
	// 	guidesMap, err = s.guideRepository.GetGuidesByIDs(ctx, guideIDs)
	// 	return err
	// })

	// errGroup.Go(func() error {
	// 	var err error
	// 	videosMap, err = s.videoRepository.GetVideosByTourIDs(ctx, tourIDs)
	// 	return err
	// })

	// errGroup.Go(func() error {
	// 	var err error
	// 	photosMap, err = s.photoRepository.GetPhotosByTourIDs(ctx, tourIDs)
	// 	return err
	// })

	errGroup.Go(func() error {
		var err error
		tourDatesMap, err = s.tourDateRepository.GetTourDatesByTourIDs(ctx, tourIDs)
		return err
	})

	// errGroup.Go(func() error {
	// 	var err error
	// 	tourMaterialsMap, err = s.tourMaterialRepository.GetTourMaterialsByTourIDs(ctx, tourIDs)
	// 	return err
	// })

	errGroup.Go(func() error {
		var err error
		tagsMap, err = s.tagRepository.GetTagsByTourIDs(ctx, tourIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		categoriesMap, err = s.categoryRepository.GetCategoriesByTourIDs(ctx, tourIDs)
		return err
	})

	// errGroup.Go(func() error {
	// 	var err error
	// 	reviewsMap, err = s.reviewRepository.GetReviewsByTourIDs(ctx, tourIDs)
	// 	return err
	// })

	errGroup.Go(func() error {
		var err error
		reviewInfoMap, err = s.reviewRepository.GetReviewInfoByTourIDs(ctx, tourIDs)
		return err
	})

	if err := errGroup.Wait(); err != nil {
		return nil, err
	}

	result := make([]domain.TourPreview, len(tours))
	for i, tour := range tours {
		// var guide *domain.Guide
		// if tour.GuideID != nil {
		// 	guide = guidesMap[*tour.GuideID]
		// }

		reviewInfo := reviewInfoMap[tour.ID]
		if reviewInfo == nil {
			reviewInfo = &domain.ReviewInfo{
				ReviewAmount: 0,
				StarAmount:   0,
			}
		}

		result[i] = domain.TourPreview{
			Tour:         tour,
			Dates:        tourDatesMap[tour.ID],
			Tags:         tagsMap[tour.ID],
			Categories:   categoriesMap[tour.ID],
			StarAmount:   reviewInfo.StarAmount,
			ReviewAmount: reviewInfo.ReviewAmount,
		}
	}

	return result, nil
}

func (s *TourService) buildTourFull(ctx context.Context, tour *domain.Tour) (*domain.TourFull, error) {
	errGroup, ctx := errgroup.WithContext(ctx)

	var (
		guide         *domain.Guide
		videos        []domain.Video
		tourMaterials []domain.TourMaterial
		photos        []domain.Photo
		tourDates     []domain.TourDate
		tags          []domain.Tag
		categories    []domain.Category
		reviews       []domain.Review
		reviewInfo    *domain.ReviewInfo
		activities    []string
		included      []string
		summary       []string
	)

	if tour.GuideID != nil {
		errGroup.Go(func() error {
			g, err := s.guideRepository.GetGuidesByTourID(ctx, *tour.GuideID)
			if err != nil {
				return err
			}
			guide = g
			return nil
		})
	}

	errGroup.Go(func() error {
		v, err := s.videoRepository.GetVideosByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		videos = v
		return nil
	})

	errGroup.Go(func() error {
		tm, err := s.tourMaterialRepository.GetTourMaterialsByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		tourMaterials = tm
		return nil
	})

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
		t, err := s.tagRepository.GetTagsByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		tags = t
		return nil
	})

	errGroup.Go(func() error {
		c, err := s.categoryRepository.GetCategoriesByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		categories = c
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
		a, err := s.tourActivityRepository.GetTourActivityStringsByTourID(ctx, tour.ID)
		if err != nil {
			return err
		}
		activities = a
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
		Videos:       videos,
		Photos:       photos,
		Dates:        tourDates,
		Materials:    tourMaterials,
		Tags:         tags,
		Categories:   categories,
		Guide:        guide,
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
	return s.buildTourFull(ctx, tour)
}

func (s *TourService) DeleteTourByID(ctx context.Context, id uuid.UUID) error {
	return s.tourRepository.DeleteTourByID(ctx, id)
}
