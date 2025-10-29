package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
)

type UserClaims struct {
	UserID int32       `json:"sub"`
	Role   domain.Role `json:"role"`
}

func GetUserClaimsFromContext(ctx *gin.Context) (*UserClaims, error) {
	val, exists := ctx.Get("user")
	if !exists {
		return nil, domain.ErrUnauthorized
	}

	userClaims, ok := val.(*UserClaims)
	if !ok {
		return nil, domain.ErrInvalidClaims
	}

	return userClaims, nil
}

func (h *Handler) AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "authorization header required"})
			return
		}

		parts := strings.SplitN(authHeader, " ", 2)
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid authorization header format"})
			return
		}

		token, err := jwt.Parse(parts[1], func(token *jwt.Token) (any, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, jwt.ErrSignatureInvalid
			}
			return []byte(h.cfg.JWTConfig.Secret), nil
		})
		if err != nil || !token.Valid {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid or expired token"})
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid token claims"})
			return
		}

		user := &UserClaims{}

		sub, ok := claims["sub"].(float64)
		if !ok {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "missing user id"})
			return
		}
		user.UserID = int32(sub)

		roleStr, ok := claims["role"].(string)
		if !ok || !domain.IsValidRole(roleStr) {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "invalid or missing role"})
			return
		}
		user.Role = domain.Role(roleStr)

		c.Set("user", user)
		c.Next()
	}
}

func RequireRole(role domain.Role) gin.HandlerFunc {
	return func(c *gin.Context) {
		val, ok := c.Get("user")
		if !ok {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "unauthorized"})
			return
		}

		user, ok := val.(*UserClaims)
		if !ok || user.Role != role {
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{"error": "insufficient permissions"})
			return
		}

		c.Next()
	}
}
