package handler

import (
	"net/http"
	"pt-general-go/internal/domain"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"

	_ "pt-general-go/docs"
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
		ExposeHeaders:    []string{"Content-Length", "Location"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))

	general := router.Group("/general")

	// Health check
	general.GET("/health", func(c *gin.Context) {
		c.String(http.StatusOK, "OK")
	})

	if h.cfg.EnvType == "dev" {
		dev := general.Group("/dev")
		{
			dev.GET("/reset-db", h.ResetSchema)
		}
	}

	auth := general.Group("/auth")
	{
		auth.POST("/register", h.Register)
		auth.POST("/login", h.Login)

		auth.Use(h.AuthMiddleware())
		{
			auth.POST("/change-password", h.ChangePassword)
			auth.GET("/profile", h.GetProfile)
			auth.PUT("/profile", h.UpdateProfile)
		}

		authAdmin := auth.Group("", h.AuthMiddleware(), RequireRole(domain.RoleAdmin))
		{
			authAdmin.POST("/create-user", h.CreateUser)
		}
	}

	pageMetadata := general.Group("/page-metadata")
	{
		pageMetadata.GET("", h.GetPageMetadata)
		pageMetadataAdmin := pageMetadata.Group("", h.AuthMiddleware(), RequireRole(domain.RoleAdmin))
		{
			pageMetadataAdmin.POST("", h.CreatePageMetadata)
			pageMetadataAdmin.PATCH("", h.UpdatePageMetadata)
			pageMetadataAdmin.DELETE("", h.DeletePageMetadata)
		}
	}

	users := general.Group("/users")
	{
		users.GET("/:id/public", h.GetPublicProfile)
		users.GET("", h.AuthMiddleware(), RequireRole(domain.RoleAdmin), h.GetAllUsers)
	}

	articles := general.Group("/articles")
	{
		articles.GET("", h.GetArticles)
		articles.GET("/:slug", h.GetArticleBySlug)

		articlesAdmin := articles.Group("/admin", h.AuthMiddleware(), RequireRole(domain.RoleAdmin))
		{
			articlesAdmin.GET("", h.GetArticlesAdmin)
			articlesAdmin.GET("/:id", h.GetArticleByID)
			articlesAdmin.POST("", h.CreateArticle)
			articlesAdmin.PUT("/:id", h.UpdateArticle)
			articlesAdmin.DELETE("/:id", h.DeleteArticle)
		}
	}

	// Guides
	// Material
	// Categories

	tours := general.Group("/tours")
	{
		tours.GET("/slug/:slug", h.GetTourBySlug)
		tours.GET("/:id/similar", h.GetSimilarToursByTourID)
		tours.GET("/:id", h.GetTourByID)
		tours.GET("", h.GetAllTours)
		toursAdmin := tours.Group("/admin", h.AuthMiddleware(), RequireRole(domain.RoleAdmin))
		{
			toursAdmin.GET("", h.GetAllTours)
			toursAdmin.POST("", h.CreateTour)
			toursAdmin.PUT("/:id", h.UpdateTourByID)
			toursAdmin.DELETE("/:id", h.DeleteTourByID)
		}
	}

	reviews := general.Group("/reviews")
	{
		reviews.GET("/main", h.GetReviewsForMain)
	}

	bookings := general.Group("/bookings")
	{
		bookings.POST("", h.CreateBookingRequest)
		bookings.POST("/deposit-succeeded", h.StripeDepositSucceededWebhook)
	}

	contact := general.Group("/contact")
	{
		contact.POST("/me", h.ContactMe)
	}

	general.POST("/subscribe", h.Subscribe)

	return router
}
