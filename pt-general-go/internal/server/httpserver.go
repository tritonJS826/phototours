package server

import (
	"context"
	"net/http"
	"time"
)

type Server struct {
	httpServer *http.Server
}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) Start(handler http.Handler, port string) error {
	s.httpServer = &http.Server{
		Handler:      handler,
		Addr:         ":" + port,
		WriteTimeout: 3 * time.Minute,
		ReadTimeout:  3 * time.Minute,
	}
	return s.httpServer.ListenAndServe()
}

func (s *Server) Shutdown(ctx context.Context) error {
	return s.httpServer.Shutdown(ctx)
}
