package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func (h *Handler) SetupRoutes() *gin.Engine {
	router := gin.New()
	router.Use(gin.Logger())
	router.Use(gin.Recovery())

	// Настройка CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{h.cfg.CORSOrigins},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "X-User-Id", "x-user-id"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// Health check
	router.GET("/health", func(c *gin.Context) {
		c.String(http.StatusOK, "OK")
	})

	if h.cfg.EnvType == "dev" {
		dev := router.Group("/dev")
		{
			dev.GET("/reset-db", h.ResetSchema)
		}
	}

	auth := router.Group("/auth")
	{
		auth.POST("/register", h.Register)
		auth.POST("/login", h.Login)

		auth.Use(h.AuthMiddleware())
		{
			auth.POST("/change-password", h.ChangePassword)
			auth.GET("/profile", h.GetProfile)
			auth.PUT("/profile", h.UpdateProfile)
		}
	}

	pageMetadata := router.Group("/page-metadata", h.AuthMiddleware())
	{
		pageMetadata.GET("", h.GetPageMetadata)

		pageMetadataAdmin := pageMetadata.Group("", RequireRole(domain.RoleAdmin))
		{
			pageMetadataAdmin.POST("", h.CreatePageMetadata)
			pageMetadataAdmin.PATCH("", h.UpdatePageMetadata)
			pageMetadataAdmin.DELETE("", h.DeletePageMetadata)
		}
	}

	users := router.Group("/users")
	{
		users.GET("/:id/public", h.GetPublicProfile)
		users.GET("", h.AuthMiddleware(), RequireRole(domain.RoleAdmin), h.GetAllUsers)
	}

	articles := router.Group("/articles")
	{
		articles.GET("", h.GetArticles)
		articles.GET("/:slug", h.GetArticleBySlug)
	}

	return router
}
