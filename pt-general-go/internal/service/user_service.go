package service

import (
	"context"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"

	"go.uber.org/zap"
)

type UserService struct {
	userRepository *repository.UserRepository
	logger         *zap.Logger
}

func NewUserService(
	userRepository *repository.UserRepository,
	logger *zap.Logger,
) *UserService {
	return &UserService{
		userRepository: userRepository,
		logger:         logger,
	}
}

func (s *UserService) GetUserByID(ctx context.Context, userID int32) (*domain.User, error) {
	return s.userRepository.GetUserByID(ctx, userID)
}

func (s *UserService) GetUsers(ctx context.Context, limit, offset int) ([]domain.User, error) {
	return s.userRepository.GetUsers(ctx, limit, offset)
}
