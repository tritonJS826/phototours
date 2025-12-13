package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type TourService struct {
	categoryRepository     *repository.CategoryRepository
	guideRepository        *repository.GuideRepository
	photoRepository        *repository.PhotoRepository
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

	result := make([]domain.TourFull, 0, len(tours))
	for _, tour := range tours {
		tourFull, err := s.buildTourFull(ctx, &tour)
		if err != nil {
			return nil, err
		}
		result = append(result, *tourFull)
	}

	return result, nil
}

func (s *TourService) buildTourFull(ctx context.Context, tour *domain.Tour) (*domain.TourFull, error) {
	var guide domain.Guide
	if tour.GuideID != nil {
		g, err := s.guideRepository.GetGuidesByTourID(ctx, *tour.GuideID)
		if err != nil {
			return nil, err
		}
		guide = *g
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

	return &domain.TourFull{
		Tour:       *tour,
		Videos:     videos,
		Photos:     photos,
		Dates:      tourDates,
		Materials:  tourMaterials,
		Tags:       tags,
		Categories: categories,
		Guide:      guide,
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
