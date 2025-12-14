package main

import (
	"context"
	"errors"
	"log"
	"net/http"
	"os"
	"os/signal"
	"pt-general-go/internal/config"
	"pt-general-go/internal/handler"
	"pt-general-go/internal/repository"
	"pt-general-go/internal/server"
	"pt-general-go/internal/service"
	"pt-general-go/pkg/database"
	"pt-general-go/pkg/logger"
	"pt-general-go/pkg/storage"
	"syscall"
	"time"

	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

// @title PhotoTours API
// @version 1.0
// @description API for PhotoTours platform
// @host localhost:8000
// @BasePath /general
// @schemes http https
// @securityDefinitions.apikey BearerAuth
// @in header
// @name Authorization
// @description Type "Bearer" followed by a space and JWT token.
func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	cfg, err := config.NewConfig(".env")
	if err != nil {
		log.Fatalf("failed to initialize config: %v", err)
	}

	logLevel := zapcore.InfoLevel
	if cfg.EnvType != config.EnvTypeProd {
		logLevel = zapcore.DebugLevel
	}

	zapLogger, err := logger.NewLogger(logLevel)
	if err != nil {
		log.Fatalf("failed to initialize logger %v", err)
	}
	defer zapLogger.Sync()

	dbPool, err := database.NewPostgresDB(ctx, cfg.DatabaseURL)
	if err != nil {
		zapLogger.Error("failed to connect to postgres", zap.Error(err))
		return
	}
	defer dbPool.Close()

	cld, err := storage.NewCloudinaryClient(&cfg.CloudinaryConfig)
	if err != nil {
		zapLogger.Error("failed to connect to cloudinary", zap.Error(err))
		return
	}

	repositories := repository.NewRepository(cfg, dbPool, cld)
	services := service.NewService(repositories, cfg, zapLogger)
	handlers := handler.NewHandler(cfg, services, zapLogger)

	serv := server.NewServer()
	go func() {
		err := serv.Start(handlers.SetupRoutes(), cfg.ServerPort)
		if err != nil && !errors.Is(err, http.ErrServerClosed) {
			zapLogger.Error("server error", zap.Error(err))
			cancel()
		}
	}()

	zapLogger.Info("server started", zap.String("port", cfg.ServerPort))

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGTERM, syscall.SIGINT)

	select {
	case sig := <-stop:
		zapLogger.Info("shutdown signal received", zap.String("signal", sig.String()))
	case <-ctx.Done():
		zapLogger.Info("context cancelled, initiating shutdown")
	}

	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer shutdownCancel()

	err = serv.Shutdown(shutdownCtx)
	if err != nil {
		zapLogger.Error("error occurred on server shutting down", zap.Error(err))
	} else {
		zapLogger.Info("HTTP server stopped gracefully")
	}

	zapLogger.Info("Application stopped")
}
