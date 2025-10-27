package utils

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func GenerateToken(userID int32, jwtSecret, expiresIn string) (string, error) {
	duration, err := parseDuration(expiresIn)
	if err != nil {
		return "", fmt.Errorf("invalid expiresIn format: %w", err)
	}

	claims := jwt.MapClaims{
		"sub": userID,
		"exp": time.Now().Add(duration).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString([]byte(jwtSecret))
	if err != nil {
		return "", fmt.Errorf("failed to sign token: %w", err)
	}

	return tokenString, nil
}

func parseDuration(s string) (time.Duration, error) {
	s = strings.TrimSpace(s)
	if strings.HasSuffix(s, "d") {
		daysStr := strings.TrimSuffix(s, "d")
		days, err := strconv.Atoi(daysStr)
		if err != nil {
			return 0, errors.New("invalid duration format")
		}
		return time.Duration(days) * 24 * time.Hour, nil
	}
	return time.ParseDuration(s) // поддерживает "1h", "30m", "15s" и т.д.
}

func ParseToken(tokenStr string, jwtSecret string) (int64, error) {
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		return []byte(jwtSecret), nil
	})
	if err != nil {
		return 0, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		id := int64(claims["sub"].(float64))
		return id, nil
	}

	return 0, err
}
