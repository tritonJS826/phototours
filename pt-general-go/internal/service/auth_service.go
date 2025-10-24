package service

import (
	"context"
	"fmt"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/repository"
	"pt-general-go/pkg/utils"
	"strings"

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
	isExists, err := s.userRepository.CheckUserExistsByEmail(ctx, register.Email)
	if err != nil {
		s.logger.Error("Failed to check user existence", zap.Error(err), zap.String("email", register.Email))
		return nil, fmt.Errorf("failed to check user existence: %w", err)
	}

	if isExists {
		s.logger.Warn("Registration attempt with existing email", zap.String("email", register.Email))
		return nil, domain.ErrUserAlreadyExists
	}

	hashedPassword, err := utils.HashPassword(register.Password)
	if err != nil {
		s.logger.Error("Password hashing failed", zap.Error(err))
		return nil, fmt.Errorf("password hashing failed: %w", domain.ErrInvalidPassword)
	}
	register.Password = hashedPassword

	// Создание пользователя
	user, err := s.userRepository.CreateClient(ctx, register)
	if err != nil {
		s.logger.Error("Failed to create user", zap.Error(err), zap.String("email", register.Email))

		if strings.Contains(err.Error(), "duplicate key") || strings.Contains(err.Error(), "unique constraint") {
			return nil, domain.ErrUserAlreadyExists
		}
		return nil, fmt.Errorf("failed to create user: %w", err)
	}

	// Генерация токена
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
