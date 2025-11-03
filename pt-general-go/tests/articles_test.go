package tests

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"time"

	"pt-general-go/internal/handler/dto"
)

func (s *APITestSuite) createArticle(slug, title string) {
	_, err := s.pgPool.Exec(
		context.TODO(),
		`INSERT INTO articles (slug, title, excerpt, content, cover_url, alt, author, featured, published_at)
		 VALUES ($1, $2, 'excerpt', 'content', 'http://img', 'alt', 'Tester', false, $3)`,
		slug, title, time.Now(),
	)
	s.Require().NoError(err, fmt.Sprintf("failed to insert article: %s", slug))
}

func (s *APITestSuite) TestArticlesRoutes() {
	// создаем 2 статьи прямо в БД
	s.createArticle("first-article", "First article")
	s.createArticle("second-article", "Second article")

	// --- GET /articles list (public endpoint) ---
	listURL, err := url.Parse(s.basePath + "/articles?page=1&limit=10")
	s.Require().NoError(err)
	reqList, err := http.NewRequest("GET", listURL.String(), nil)
	s.Require().NoError(err)

	respList := s.doRequest(reqList, http.StatusOK)

	var articles []dto.ArticleSummaryDTO
	s.Require().NoError(json.Unmarshal(respList, &articles))
	s.True(len(articles) >= 2)
	s.Equal("first-article", articles[1].Slug)

	// --- GET /articles/:slug valid ---
	req, err := http.NewRequest("GET", s.basePath+"/articles/first-article", nil)
	s.Require().NoError(err)
	resp := s.doRequest(req, http.StatusOK)

	var article dto.ArticleDetailDTO
	s.Require().NoError(json.Unmarshal(resp, &article))
	s.Equal("first-article", article.Slug)
	s.Equal("First article", article.Title)

	// --- GET /articles/:slug invalid ---
	req404, err := http.NewRequest("GET", s.basePath+"/articles/not-found", nil)
	s.Require().NoError(err)
	s.doRequest(req404, http.StatusNotFound)
}
