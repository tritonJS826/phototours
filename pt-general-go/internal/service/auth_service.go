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
	if err := register.Validate(); err != nil {
		return nil, err
	}

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

	token, err := utils.GenerateToken(user.ID, string(user.Role), s.cfg.JWTConfig.Secret, s.cfg.JWTConfig.ExpiresIn)
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
	if err := login.Validate(); err != nil {
		return nil, err
	}

	user, err := s.userRepository.GetUserByEmail(ctx, login.Email)
	if err != nil {
		s.logger.Error("Failed to get user", zap.Error(err), zap.String("email", login.Email))
		return nil, err
	}
	if user == nil {
		return nil, domain.ErrInvalidCredentials
	}

	if !utils.VerifyPassword(login.Password, user.Password) {
		return nil, domain.ErrInvalidCredentials
	}

	token, err := utils.GenerateToken(user.ID, string(user.Role), s.cfg.JWTConfig.Secret, s.cfg.JWTConfig.ExpiresIn)
	if err != nil {
		s.logger.Error("Failed to generate token", zap.Error(err))
		return nil, fmt.Errorf("token generation error: %w", err)
	}

	return &domain.AuthResult{
		User:  user,
		Token: token,
	}, nil
}

func (s *AuthService) ChangePassword(ctx context.Context, changePassword *domain.ChangePassword) (*domain.User, error) {
	if err := changePassword.Validate(); err != nil {
		return nil, err
	}

	user, err := s.userRepository.GetUserByID(ctx, changePassword.ID)
	if err != nil {
		s.logger.Error("Failed to get user", zap.Error(err), zap.Int32("user_id", changePassword.ID))
		return nil, err
	}
	if user == nil {
		return nil, domain.ErrInvalidCredentials
	}

	if !utils.VerifyPassword(changePassword.CurrentPassword, user.Password) {
		return nil, domain.ErrInvalidCredentials
	}

	hashedPassword, err := utils.HashPassword(changePassword.NewPassword)
	if err != nil {
		s.logger.Error("Password hashing failed", zap.Error(err))
		return nil, fmt.Errorf("password hashing failed: %w", domain.ErrInvalidPassword)
	}
	user.Password = hashedPassword

	return s.userRepository.UpdateUserPassword(ctx, user.ID, hashedPassword)
}

func (s *AuthService) UpdateProfile(ctx context.Context, input *domain.UpdateProfileInput) (*domain.User, error) {
	if err := input.Validate(); err != nil {
		return nil, err
	}

	var uploadedAvatarURL *string
	if input.File != nil {
		u, err := s.uploadRepository.UploadAvatar(ctx, input.File)
		if err != nil {
			return nil, fmt.Errorf("upload avatar: %w", err)
		}
		uploadedAvatarURL = &u
	}

	updateProfile := &domain.UpdateProfile{
		ID:           input.ID,
		FirstName:    input.FirstName,
		LastName:     input.LastName,
		Phone:        input.Phone,
		Bio:          input.Bio,
		UploadedPath: uploadedAvatarURL,
	}

	return s.userRepository.UpdateUserByID(ctx, updateProfile)
}
