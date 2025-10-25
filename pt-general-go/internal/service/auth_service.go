package service

import (
	"context"
	"fmt"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"
	"pt-general-go/pkg/utils"

	"go.uber.org/zap"
)

type AuthService struct {
	userRepository *repository.UserRepository
	cfg            *config.Config
	logger         *zap.Logger
}

func NewAuthService(userRepository *repository.UserRepository, cfg *config.Config, logger *zap.Logger) *AuthService {
	return &AuthService{
		userRepository: userRepository,
		cfg:            cfg,
		logger:         logger,
	}
}

func (s *AuthService) Register(ctx context.Context, register *domain.Register) (*domain.RegisterResult, error) {
	hashedPassword, err := utils.HashPassword(register.Password)
	if err != nil {
		s.logger.Error("Password hashing failed", zap.Error(err))
		return nil, fmt.Errorf("password hashing failed: %w", domain.ErrInvalidPassword)
	}
	register.Password = hashedPassword

	user, err := s.userRepository.CreateUser(ctx, register)
	if err != nil {
		s.logger.Error("Failed to create user", zap.Error(err), zap.String("email", register.Email))
		return nil, err
	}

	token, err := utils.GenerateToken(user.ID, s.cfg.JWTConfig.Secret, s.cfg.JWTConfig.ExpiresIn)
	if err != nil {
		s.logger.Error("Token generation failed", zap.Error(err), zap.Int32("user_id", user.ID))
		return nil, fmt.Errorf("failed to generate token: %w", err)
	}

	return &domain.RegisterResult{
		User:  user,
		Token: token,
	}, nil
}

func (s *AuthService) Login(ctx context.Context, login *domain.Login) (*domain.RegisterResult, error) {
	user, err := s.userRepository.GetUserByEmail(ctx, login.Email)
	if err != nil {
		s.logger.Error("Failed to get user", zap.Error(err), zap.String("email", login.Email))
		return nil, domain.ErrInternal
	}
	if user == nil {
		return nil, domain.ErrInvalidCredentials
	}

	if !utils.VerifyPassword(login.Password, user.Password) {
		return nil, domain.ErrInvalidCredentials
	}

	token, err := utils.GenerateToken(user.ID, s.cfg.JWTConfig.Secret, s.cfg.JWTConfig.ExpiresIn)
	if err != nil {
		s.logger.Error("Failed to generate token", zap.Error(err))
		return nil, fmt.Errorf("token generation error: %w", err)
	}

	return &domain.RegisterResult{
		User:  user,
		Token: token,
	}, nil
}

func (s *AuthService) GetProfile(ctx context.Context, userID int32) (*domain.User, error) {
	return s.userRepository.GetUserByID(ctx, userID)
}
