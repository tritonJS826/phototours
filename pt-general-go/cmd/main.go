package main

import (
	"context"
	"flag"
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

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	debugMode := flag.Bool("debug", false, "Enable debug logging")
	flag.Parse()

	logLevel := zapcore.InfoLevel
	if *debugMode {
		logLevel = zapcore.DebugLevel
	}

	logg, err := logger.NewLogger(logLevel)
	if err != nil {
		logg.Fatal("failed to initalize logger", zap.Error(err))
	}

	cfg, err := config.NewConfig(".env")
	if err != nil {
		logg.Fatal("failed to initalize config", zap.Error(err))
	}

	dbPool, err := database.NewPostgresDB(ctx, cfg.DatabaseURL)
	if err != nil {
		logg.Fatal("failed to connect to postgres", zap.Error(err))
	}
	defer dbPool.Close()

	cld, err := storage.NewCloudinaryClient(&cfg.CloudinaryConfig)
	if err != nil {
		logg.Fatal("failed to connect to postgres", zap.Error(err))
	}

	repositories := repository.NewRepository(cfg, dbPool, cld)
	services := service.NewService(repositories, cfg, logg)
	handlers := handler.NewHandler(cfg, services, logg)

	serv := server.NewServer()
	go func() {
		err := serv.Start(handlers.SetupRoutes(), cfg.ServerPort)
		if err != nil {
			logg.Fatal("failed to connect to postgres", zap.Error(err))
		}
	}()

	logg.Info("server started")

	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGTERM, syscall.SIGINT)
	<-stop

	logg.Info("Shutdown signal received, shutting down...")
	cancel()

	logg.Info("server shutdown")

	shutdownCtx, shutdownCancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer shutdownCancel()

	err = serv.Shutdown(shutdownCtx)
	if err != nil {
		logg.Error("error occured on server shutting down", zap.Error(err))
	} else {
		logg.Info("HTTP server stopped gracefully")
	}

	logg.Info("Application stopped")
}
