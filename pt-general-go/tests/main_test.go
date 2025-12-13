package tests

import (
	"context"
	"errors"
	"flag"
	"fmt"
	"net/http"
	"os"
	"pt-general-go/internal/config"
	"pt-general-go/internal/handler"
	"pt-general-go/internal/repository"
	"pt-general-go/internal/server"
	"pt-general-go/internal/service"
	"pt-general-go/pkg/database"
	"pt-general-go/pkg/logger"
	"testing"
	"time"

	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/stretchr/testify/suite"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

const (
	GeneralEndpoint  = "/general"
	HealthEndpoint   = GeneralEndpoint + "/health"
	DevResetEndpoint = GeneralEndpoint + "/dev/reset-db"
)

type APITestSuite struct {
	suite.Suite
	pgPool   *pgxpool.Pool
	repo     *repository.Repository
	serv     *server.Server
	logger   *zap.Logger
	config   *config.Config
	basePath string
}

func TestAPISuite(t *testing.T) {
	if testing.Short() {
		t.Skip()
	}
	suite.Run(t, new(APITestSuite))
}

func TestMain(m *testing.M) {
	rc := m.Run()
	os.Exit(rc)
}

// Вызывается один раз перед всеми тестами, где выполняются «тяжелые» операции (миграции, запуск сервера).
func (s *APITestSuite) SetupSuite() {
	s.initConfig()
	s.initDBConnections()

	debugMode := flag.Bool("debug", false, "Enable debug logging")
	flag.Parse()

	logLevel := zapcore.InfoLevel
	if *debugMode {
		logLevel = zapcore.DebugLevel
	}

	zapLogger, err := logger.NewLogger(logLevel)
	if err != nil {
		s.FailNowf("error initialization logger: %v", err.Error())
	}
	s.logger = zapLogger
}

func (s *APITestSuite) TearDownSuite() {
	s.pgPool.Close()
}

// Вызывается перед каждым тестом — создание изолированного окружения.
func (s *APITestSuite) SetupTest() {
	ready := make(chan bool)
	s.startTestServer(ready)

	select {
	case <-ready:
		s.T().Log("Server started successfully")
	case <-time.After(30 * time.Second):
		s.FailNow("Timed out waiting for server to start")
	}

	s.cleanupDB()
}

func (s *APITestSuite) TearDownTest() {
	err := s.serv.Shutdown(context.Background())
	if err != nil {
		s.FailNow("Failed to shutdown server", err)
	}
	s.serv = nil
}

func (s *APITestSuite) startTestServer(ready chan<- bool) {
	repositories := repository.NewRepository(s.config, s.pgPool, nil)
	s.repo = repositories
	services := service.NewService(repositories, s.config, s.logger)
	handlers := handler.NewHandler(s.config, services, s.logger)

	serv := server.NewServer()
	s.serv = serv
	s.basePath = "http://localhost:" + s.config.ServerPort

	go func() {
		defer func() {
			if r := recover(); r != nil {
				s.logger.Error("Server panicked", zap.Any("panic", r))
				ready <- false
			}
		}()

		if err := serv.Start(handlers.SetupRoutes(), s.config.ServerPort); err != nil && !errors.Is(err, http.ErrServerClosed) {
			s.logger.Error("Error starting server", zap.Error(err))
			ready <- false
			return
		}
	}()

	go func() {
		client := http.Client{Timeout: 100 * time.Millisecond}
		start := time.Now()

		for time.Since(start) < 30*time.Second {
			resp, err := client.Get(fmt.Sprintf("http://localhost:%s%s", s.config.ServerPort, HealthEndpoint))
			if err == nil {
				func() {
					defer func() {
						if err := resp.Body.Close(); err != nil {
							s.T().Errorf("failed to close response body: %v", err)
						}
					}()

					if resp.StatusCode == http.StatusOK {
						ready <- true
						return
					}
				}()
			}
			time.Sleep(100 * time.Millisecond)
		}
		ready <- false
	}()
}

func (s *APITestSuite) initConfig() {
	appConfig, err := config.NewConfig(".env.test")
	if err != nil {
		s.FailNowf("error config init: %s", err.Error())
	}
	s.config = appConfig
}

func (s *APITestSuite) initDBConnections() {
	pgPool, err := database.NewPostgresDB(context.TODO(), s.config.DatabaseURL)
	if err != nil {
		s.FailNow("mysql initialization error", zap.Error(err))
	}
	s.pgPool = pgPool
}

func (s *APITestSuite) cleanupDB() {
	resp, err := http.Get(fmt.Sprintf("http://localhost:%s%s", s.config.ServerPort, DevResetEndpoint))
	if err != nil {
		s.FailNow("Request to reset DB failed", zap.Error(err))
	}
	defer func() {
		if err := resp.Body.Close(); err != nil {
			s.T().Errorf("failed to close response body: %v", err)
		}
	}()

	if resp.StatusCode != http.StatusOK {
		s.FailNow(fmt.Sprintf("Unexpected status: %d", resp.StatusCode))
	}
}
