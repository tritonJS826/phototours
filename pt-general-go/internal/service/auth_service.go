package service

import (
	"context"
	"fmt"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"pt-general-go/internal/handler/dto"
	"pt-general-go/internal/repository"
	"pt-general-go/pkg/utils"

	"go.uber.org/zap"
)

type AuthService struct {
	userRepository   *repository.UserRepository
	uploadRepository *repository.UploadRepository
	cfg              *config.Config
	logger           *zap.Logger
}

func NewAuthService(
	userRepository *repository.UserRepository,
	uploadRepository *repository.UploadRepository,
	cfg *config.Config,
	logger *zap.Logger,
) *AuthService {
	return &AuthService{
		userRepository:   userRepository,
		uploadRepository: uploadRepository,
		cfg:              cfg,
		logger:           logger,
	}
}

func (s *AuthService) Register(ctx context.Context, register *domain.Register) (*domain.AuthResult, error) {
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

	return &domain.AuthResult{
		User:  user,
		Token: token,
	}, nil
}

func (s *AuthService) Login(ctx context.Context, login *domain.Login) (*domain.AuthResult, error) {
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

	return &domain.AuthResult{
		User:  user,
		Token: token,
	}, nil
}

func (s *AuthService) GetProfile(ctx context.Context, userID int32) (*domain.User, error) {
	return s.userRepository.GetUserByID(ctx, userID)
}

func (s *AuthService) ChangePassword(ctx context.Context, changePasswordDTO *dto.ChangePasswordDTO) (*domain.User, error) {
	user, err := s.userRepository.GetUserByID(ctx, changePasswordDTO.ID)
	if err != nil {
		s.logger.Error("Failed to get user", zap.Error(err), zap.Int32("user_id", changePasswordDTO.ID))
		return nil, domain.ErrInternal
	}
	if user == nil {
		return nil, domain.ErrInvalidCredentials
	}

	if !utils.VerifyPassword(changePasswordDTO.CurrentPassword, user.Password) {
		return nil, domain.ErrInvalidCredentials
	}

	hashedPassword, err := utils.HashPassword(changePasswordDTO.NewPassword)
	if err != nil {
		s.logger.Error("Password hashing failed", zap.Error(err))
		return nil, fmt.Errorf("password hashing failed: %w", domain.ErrInvalidPassword)
	}
	user.Password = hashedPassword

	return s.userRepository.UpdateUserPassword(ctx, user.ID, hashedPassword)
}

func (s *AuthService) UpdateProfile(ctx context.Context, input *domain.UpdateProfileInput) (*domain.User, error) {
	updateProfile := &domain.UpdateProfile{
		ID:        input.ID,
		FirstName: input.FirstName,
		LastName:  input.LastName,
		Phone:     input.Phone,
		Bio:       input.Bio,
	}

	if input.File != nil {
		url, err := s.uploadRepository.UploadAvatar(ctx, input.File)
		if err != nil {
			return nil, fmt.Errorf("upload avatar: %w", err)
		}
		updateProfile.UploadedPath = &url
	}

	return s.userRepository.UpdateUserByID(ctx, updateProfile)
}
