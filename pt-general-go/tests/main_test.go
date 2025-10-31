package tests

import (
	"bytes"
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"io"
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

type APITestSuite struct {
	suite.Suite

	pgPool *pgxpool.Pool
	repo   *repository.Repository

	serv   *server.Server
	logger *zap.Logger
	config *config.Config
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

	go func() {
		defer func() {
			if r := recover(); r != nil {
				s.logger.Error("Server panicked", zap.Any("panic", r))
				ready <- false
			}
		}()

		if err := serv.Start(handlers.SetupRoutes(), s.config.ServerPort); err != nil && err != http.ErrServerClosed {
			s.logger.Error("Error starting server", zap.Error(err))
			ready <- false
			return
		}
	}()

	go func() {
		client := http.Client{Timeout: 100 * time.Millisecond}
		start := time.Now()
		for time.Since(start) < 30*time.Second {
			resp, err := client.Get(fmt.Sprintf("http://localhost:%s/health", s.config.ServerPort))
			if err == nil && resp.StatusCode == http.StatusOK {
				resp.Body.Close()
				ready <- true
				return
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
	resp, err := http.Get(fmt.Sprintf("http://localhost:%s/dev/reset-db", s.config.ServerPort))
	if err != nil {
		s.FailNow("", zap.Error(err))
	}
	if resp.StatusCode != http.StatusOK {
		s.FailNow("", zap.Error(err))
	}
}

// Requests

func (s *APITestSuite) postJSON(url string, payload any, expectedStatus int) []byte {
	jsonData, err := json.Marshal(payload)
	s.Require().NoError(err)

	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	s.Require().NoError(err)
	req.Header.Set("Content-Type", "application/json")

	return s.doRequest(req, expectedStatus)
}

func (s *APITestSuite) doRequest(req *http.Request, expectedStatus int) []byte {
	resp, err := http.DefaultClient.Do(req)
	s.Require().NoError(err)
	defer resp.Body.Close()

	body, _ := io.ReadAll(resp.Body)
	bodyStr := string(body)

	if resp.StatusCode != expectedStatus {
		s.T().Logf(
			"Unexpected status %d (expected %d). URL: %s %s\nResponse: %s\n",
			resp.StatusCode, expectedStatus, req.Method, req.URL.String(), bodyStr,
		)
	}

	// Проверяем, что статус совпадает, показывая тело в случае неудачи
	s.Require().Equal(expectedStatus, resp.StatusCode, "Response body: %s", bodyStr)

	return body
}

func (s *APITestSuite) postJSONAuth(url, token string, payload any, expectedStatus int) []byte {
	jsonData, _ := json.Marshal(payload)
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)

	return s.doRequest(req, expectedStatus)
}

func (s *APITestSuite) patchJSONAuth(url, token string, payload any, expectedStatus int) []byte {
	jsonData, _ := json.Marshal(payload)
	req, _ := http.NewRequest("PATCH", url, bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+token)

	return s.doRequest(req, expectedStatus)
}
