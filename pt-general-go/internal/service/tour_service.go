package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

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
	tourDateRepository     *repository.TourDateRepository
	tourMaterialRepository *repository.TourMaterialRepository
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
	tourDateRepository *repository.TourDateRepository,
	tourMaterialRepository *repository.TourMaterialRepository,
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
		tourMaterialRepository: tourMaterialRepository,
		videoRepository:        videoRepository,
		logger:                 logger,
	}
}

func (s *TourService) CreateTour(ctx context.Context, createTour *domain.CreateTourParams) (*domain.Tour, error) {
	return s.tourRepository.CreateTour(ctx, createTour)
}

func (s *TourService) GetTourFullByID(ctx context.Context, id int32) (*domain.TourFull, error) {
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
	tours, err := s.tourRepository.GetTours(ctx, limit, offset, filters)
	if err != nil {
		return nil, err
	}

	if len(tours) == 0 {
		return []domain.TourFull{}, nil
	}

	tourIDs := make([]int32, len(tours))
	guideIDsMap := make(map[int32]bool)
	for i, tour := range tours {
		tourIDs[i] = tour.ID
		if tour.GuideID != nil {
			guideIDsMap[*tour.GuideID] = true
		}
	}

	guideIDs := make([]int32, 0, len(guideIDsMap))
	for guideID := range guideIDsMap {
		guideIDs = append(guideIDs, guideID)
	}

	errGroup, ctx := errgroup.WithContext(ctx)
	var (
		guidesMap        map[int32]*domain.Guide
		videosMap        map[int32][]domain.Video
		photosMap        map[int32][]domain.Photo
		tourDatesMap     map[int32][]domain.TourDate
		tourMaterialsMap map[int32][]domain.TourMaterial
		tagsMap          map[int32][]domain.Tag
		categoriesMap    map[int32][]domain.Category
		reviewsMap       map[int32][]domain.Review
		reviewInfoMap    map[int32]*domain.ReviewInfo
	)

	errGroup.Go(func() error {
		var err error
		guidesMap, err = s.guideRepository.GetGuidesByIDs(ctx, guideIDs)
		return err
	})

	errGroup.Go(func() error {
		var err error
		videosMap, err = s.videoRepository.GetVideosByTourIDs(ctx, tourIDs)
		return err
	})

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
		tourMaterialsMap, err = s.tourMaterialRepository.GetTourMaterialsByTourIDs(ctx, tourIDs)
		return err
	})

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

	if err := errGroup.Wait(); err != nil {
		return nil, err
	}

	result := make([]domain.TourFull, len(tours))
	for i, tour := range tours {
		var guide *domain.Guide
		if tour.GuideID != nil {
			guide = guidesMap[*tour.GuideID]
		}

		reviewInfo := reviewInfoMap[tour.ID]
		if reviewInfo == nil {
			reviewInfo = &domain.ReviewInfo{
				ReviewAmount: 0,
				StarAmount:   0,
			}
		}

		result[i] = domain.TourFull{
			Tour:         tour,
			Videos:       videosMap[tour.ID],
			Photos:       photosMap[tour.ID],
			Dates:        tourDatesMap[tour.ID],
			Materials:    tourMaterialsMap[tour.ID],
			Tags:         tagsMap[tour.ID],
			Categories:   categoriesMap[tour.ID],
			Guide:        guide,
			Reviews:      reviewsMap[tour.ID],
			StarAmount:   reviewInfo.StarAmount,
			ReviewAmount: reviewInfo.ReviewAmount,
		}
	}

	return result, nil
}

func (s *TourService) buildTourFull(ctx context.Context, tour *domain.Tour) (*domain.TourFull, error) {
	guide, err := s.guideRepository.GetGuidesByTourID(ctx, *tour.GuideID)
	if err != nil {
		return nil, err
	}

	videos, err := s.videoRepository.GetVideosByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	tourMaterials, err := s.tourMaterialRepository.GetTourMaterialsByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	photos, err := s.photoRepository.GetPhotosByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	tourDates, err := s.tourDateRepository.GetTourDatesByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	tags, err := s.tagRepository.GetTagsByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	categories, err := s.categoryRepository.GetCategoriesByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	reviews, err := s.reviewRepository.GetReviewsByTourID(ctx, tour.ID)
	if err != nil {
		return nil, err
	}

	reviewInfo, err := s.reviewRepository.GetReviewInfo(ctx, tour.ID)
	if err != nil {
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
		StarAmount:   reviewInfo.StarAmount,
		ReviewAmount: reviewInfo.ReviewAmount,
	}, nil
}

func (s *TourService) UpdateTourByID(ctx context.Context, id int32, updateTourRequest *domain.UpdateTourParams) (*domain.TourFull, error) {
	tour, err := s.tourRepository.UpdateTourByID(ctx, id, updateTourRequest)
	if err != nil {
		return nil, err
	}
	return s.buildTourFull(ctx, tour)
}

func (s *TourService) DeleteTourByID(ctx context.Context, id int32) error {
	return s.tourRepository.DeleteTourByID(ctx, id)
}
