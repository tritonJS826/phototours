package repository

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"pt-general-go/internal/config"
	"pt-general-go/internal/domain"
	"strings"
	"sync"
	"time"
)

const (
	zohoHost       = "https://accounts.zoho.eu"
	zohoAPIHost    = "https://www.zohoapis.eu"
	oauthAuthorize = zohoHost + "/oauth/v2/auth"
	oauthToken     = zohoHost + "/oauth/v2/token"
	apiOrg         = zohoAPIHost + "/crm/v3/org"
	apiLeads       = zohoAPIHost + "/crm/v3/Leads"
	apiContacts    = zohoAPIHost + "/crm/v3/Contacts"
	apiDeals       = zohoAPIHost + "/crm/v3/Deals"
)

var zohoScopes = []string{
	"ZohoCRM.modules.ALL",
	"ZohoCRM.settings.ALL",
	"ZohoCRM.org.READ",
}

type TokenResponse struct {
	AccessToken  string `json:"access_token"`
	RefreshToken string `json:"refresh_token,omitempty"`
	APIDomain    string `json:"api_domain"`
	TokenType    string `json:"token_type"`
	ExpiresIn    int    `json:"expires_in"`
	ExpiresInSec int    `json:"expires_in_sec"`
}

type LeadCreateResponse struct {
	Data []struct {
		Code    string `json:"code"`
		Details struct {
			ID string `json:"id"`
		} `json:"details"`
		Message string `json:"message"`
		Status  string `json:"status"`
	} `json:"data"`
}

type BookingCreateResponse struct {
	Data []struct {
		Code    string `json:"code"`
		Details struct {
			ID string `json:"id"`
		} `json:"details"`
		Message string `json:"message"`
		Status  string `json:"status"`
	} `json:"data"`
}

type OrganizationInfo struct {
	Org []map[string]any `json:"org"`
}

type ZohoRepository struct {
	config         *config.ZohoConfig
	httpClient     *http.Client
	accessToken    string
	refreshToken   string
	tokenExpiresAt time.Time
	mu             sync.RWMutex
}

func NewZohoRepository(cfg *config.ZohoConfig) *ZohoRepository {
	return &ZohoRepository{
		config: cfg,
		httpClient: &http.Client{
			Timeout: 10 * time.Second,
		},
		refreshToken: cfg.RefreshToken,
	}
}

func (r *ZohoRepository) GetAuthURL() string {
	params := url.Values{
		"client_id":     {r.config.ClientID},
		"response_type": {"code"},
		"redirect_uri":  {r.config.RedirectURI},
		"scope":         {strings.Join(zohoScopes, ",")},
		"access_type":   {"offline"},
		"prompt":        {"consent"},
	}
	return oauthAuthorize + "?" + params.Encode()
}

func (r *ZohoRepository) ExchangeCodeForTokens(ctx context.Context, code string) (*TokenResponse, error) {
	// Safety margin before token expiration
	const tokenSafetyMargin = 6 * time.Hour

	data := url.Values{
		"code":          {code},
		"client_id":     {r.config.ClientID},
		"client_secret": {r.config.ClientSecret},
		"redirect_uri":  {r.config.RedirectURI},
		"grant_type":    {"authorization_code"},
	}

	req, err := http.NewRequestWithContext(
		ctx,
		http.MethodPost,
		oauthToken,
		strings.NewReader(data.Encode()),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("exchange code request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, fmt.Errorf("failed to read error response body: %w", err)
		}
		return nil, fmt.Errorf("failed to exchange code for tokens: %d %s - %s",
			resp.StatusCode, resp.Status, string(body))
	}

	var tokenResp TokenResponse
	if err := json.NewDecoder(resp.Body).Decode(&tokenResp); err != nil {
		return nil, fmt.Errorf("failed to decode token response: %w", err)
	}

	r.mu.Lock()
	r.accessToken = tokenResp.AccessToken
	r.refreshToken = tokenResp.RefreshToken
	// Set token expiration time with safety margin
	r.tokenExpiresAt = time.Now().Add(time.Duration(tokenResp.ExpiresIn) * time.Second).Add(-tokenSafetyMargin)
	r.mu.Unlock()

	return &tokenResp, nil
}

func (r *ZohoRepository) RefreshAccessToken(ctx context.Context) (string, error) {
	r.mu.RLock()
	refreshToken := r.refreshToken
	r.mu.RUnlock()

	if refreshToken == "" {
		return "", errors.New("no refresh token available")
	}

	data := url.Values{
		"refresh_token": {refreshToken},
		"client_id":     {r.config.ClientID},
		"client_secret": {r.config.ClientSecret},
		"grant_type":    {"refresh_token"},
	}

	req, err := http.NewRequestWithContext(
		ctx,
		http.MethodPost,
		oauthToken,
		strings.NewReader(data.Encode()),
	)
	if err != nil {
		return "", fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Content-Type", "application/x-www-form-urlencoded")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		return "", fmt.Errorf("refresh token request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return "", fmt.Errorf("failed to read error response body: %w", err)
		}
		return "", fmt.Errorf("failed to refresh token: %d %s - %s",
			resp.StatusCode, resp.Status, string(body))
	}

	var tokenResp TokenResponse
	if err := json.NewDecoder(resp.Body).Decode(&tokenResp); err != nil {
		return "", fmt.Errorf("failed to decode token response: %w", err)
	}

	// Safety margin before token expiration (official expiration time 60min)
	const tokenSafetyMargin = 50 * time.Minute

	r.mu.Lock()
	r.accessToken = tokenResp.AccessToken
	// Set token expiration time with safety margin
	r.tokenExpiresAt = time.Now().Add(time.Duration(tokenResp.ExpiresIn) * time.Second).Add(-tokenSafetyMargin)
	r.mu.Unlock()

	return tokenResp.AccessToken, nil
}

func (r *ZohoRepository) GetOrganizationInfo(ctx context.Context) (*OrganizationInfo, error) {
	token, err := r.getValidAccessToken(ctx)
	if err != nil {
		return nil, err
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, apiOrg, nil)
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Zoho-oauthtoken "+token)
	req.Header.Set("Content-Type", "application/json")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("organization info request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		body, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, fmt.Errorf("failed to read error response body: %w", err)
		}
		return nil, fmt.Errorf("failed to get organization info: %d %s - %s",
			resp.StatusCode, resp.Status, string(body))
	}

	var orgInfo OrganizationInfo
	if err := json.NewDecoder(resp.Body).Decode(&orgInfo); err != nil {
		return nil, fmt.Errorf("failed to decode organization info: %w", err)
	}

	return &orgInfo, nil
}

func (r *ZohoRepository) CreateLead(ctx context.Context, lead *domain.LeadZoho) (*LeadCreateResponse, error) {
	token, err := r.getValidAccessToken(ctx)
	if err != nil {
		return nil, err
	}

	body := map[string][]*domain.LeadZoho{
		"data": {lead},
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal lead data: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, apiLeads, bytes.NewReader(jsonBody))
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Zoho-oauthtoken "+token)
	req.Header.Set("Content-Type", "application/json")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("create lead request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, fmt.Errorf("failed to read error response body: %w", err)
		}
		return nil, fmt.Errorf("failed to create lead: %d %s - %s",
			resp.StatusCode, resp.Status, string(respBody))
	}

	var createResp LeadCreateResponse
	if err := json.NewDecoder(resp.Body).Decode(&createResp); err != nil {
		return nil, fmt.Errorf("failed to decode create lead response: %w", err)
	}

	return &createResp, nil
}

func (r *ZohoRepository) CreateContact(
	ctx context.Context,
	contact *domain.ContactZoho,
) error {

	token, err := r.getValidAccessToken(ctx)
	if err != nil {
		return err
	}

	// гарантируем mandatory поле
	if strings.TrimSpace(contact.LastName) == "" {
		contact.LastName = "Website contact"
	}

	body := map[string][]*domain.ContactZoho{
		"data": {contact},
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		return fmt.Errorf("failed to marshal contact data: %w", err)
	}

	req, err := http.NewRequestWithContext(
		ctx,
		http.MethodPost,
		apiContacts,
		bytes.NewReader(jsonBody),
	)
	if err != nil {
		return fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Zoho-oauthtoken "+token)
	req.Header.Set("Content-Type", "application/json")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		return fmt.Errorf("create contact request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			return fmt.Errorf("failed to read error response body: %w", err)
		}
		return fmt.Errorf(
			"failed to create contact: %d %s - %s",
			resp.StatusCode,
			resp.Status,
			string(respBody),
		)
	}

	// if err := json.NewDecoder(resp.Body).Decode(&createResp); err != nil {
	// 	return fmt.Errorf("failed to decode create contact response: %w", err)
	// }

	return nil
}

func (r *ZohoRepository) CreateDeal(
	ctx context.Context,
	deal *domain.DealZoho,
) error {

	token, err := r.getValidAccessToken(ctx)
	if err != nil {
		// return nil, err
		return err
	}

	// mandatory defaults
	if strings.TrimSpace(deal.DealName) == "" {
		deal.DealName = "Website Deal"
	}
	if strings.TrimSpace(deal.Stage) == "" {
		deal.Stage = "Qualification"
	}
	if strings.TrimSpace(deal.ClosingDate) == "" {
		deal.ClosingDate = time.Now().AddDate(0, 0, 14).Format("2006-01-02")
	}

	body := map[string][]*domain.DealZoho{
		"data": {deal},
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		// return nil, fmt.Errorf("failed to marshal deal data: %w", err)
		return fmt.Errorf("failed to marshal deal data: %w", err)
	}

	req, err := http.NewRequestWithContext(
		ctx,
		http.MethodPost,
		apiDeals,
		bytes.NewReader(jsonBody),
	)
	if err != nil {
		// return nil, fmt.Errorf("failed to create request: %w", err)
		return fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Zoho-oauthtoken "+token)
	req.Header.Set("Content-Type", "application/json")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		// return nil, fmt.Errorf("create deal request failed: %w", err)
		return fmt.Errorf("create deal request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			// return nil, fmt.Errorf("failed to read error response body: %w", err)
			return fmt.Errorf("failed to read error response body: %w", err)
		}
		return fmt.Errorf(
			"failed to create deal: %d %s - %s",
			resp.StatusCode,
			resp.Status,
			string(respBody),
		)
	}

	// var createResp DealCreateResponse
	// if err := json.NewDecoder(resp.Body).Decode(&createResp); err != nil {
	// 	return nil, fmt.Errorf("failed to decode create deal response: %w", err)
	// }

	// return &createResp, nil
	return nil
}

func (r *ZohoRepository) CreateBookingRequest(ctx context.Context, booking *domain.BookingRequest) (*BookingCreateResponse, error) {
	token, err := r.getValidAccessToken(ctx)
	if err != nil {
		return nil, err
	}

	body := map[string][]*domain.BookingRequest{
		"data": {booking},
	}

	jsonBody, err := json.Marshal(body)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal booking data: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, apiContacts, bytes.NewReader(jsonBody))
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Authorization", "Zoho-oauthtoken "+token)
	req.Header.Set("Content-Type", "application/json")

	resp, err := r.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("create booking request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK && resp.StatusCode != http.StatusCreated {
		respBody, err := io.ReadAll(resp.Body)
		if err != nil {
			return nil, fmt.Errorf("failed to read error response body: %w", err)
		}
		return nil, fmt.Errorf("failed to create booking: %d %s - %s",
			resp.StatusCode, resp.Status, string(respBody))
	}

	var createResp BookingCreateResponse
	if err := json.NewDecoder(resp.Body).Decode(&createResp); err != nil {
		return nil, fmt.Errorf("failed to decode create booking response: %w", err)
	}

	return &createResp, nil
}

func (r *ZohoRepository) SetTokens(accessToken, refreshToken string) {
	r.mu.Lock()
	defer r.mu.Unlock()

	r.accessToken = accessToken
	if refreshToken != "" {
		r.refreshToken = refreshToken
	}
}

func (r *ZohoRepository) getValidAccessToken(ctx context.Context) (string, error) {
	r.mu.RLock()
	accessToken := r.accessToken
	refreshToken := r.refreshToken
	tokenExpiresAt := r.tokenExpiresAt
	r.mu.RUnlock()

	// Check if access token exists and is not expired
	if accessToken != "" && time.Now().Before(tokenExpiresAt) {
		return accessToken, nil
	}

	if refreshToken != "" {
		newToken, err := r.RefreshAccessToken(ctx)
		if err != nil {
			return "", fmt.Errorf("failed to refresh access token: %w", err)
		}
		return newToken, nil
	}

	return "", errors.New("no access token available, please authenticate first")
}
