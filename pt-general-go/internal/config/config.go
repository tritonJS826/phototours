package config

import (
	"fmt"

	"github.com/caarlos0/env/v9"
	"github.com/joho/godotenv"
)

type ZohoConfig struct {
	ClientID     string `env:"ZOHO_CLIENT_ID,required"`
	ClientSecret string `env:"ZOHO_CLIENT_SECRET,required"`
	RedirectURI  string `env:"ZOHO_REDIRECT_URI,required"`
	RefreshToken string `env:"ZOHO_REFRESH_TOKEN,required"`
}

type JWTConfig struct {
	Secret    string `env:"JWT_SECRET,required"`
	ExpiresIn string `env:"JWT_EXPIRES_IN,required"`
}

type CloudinaryConfig struct {
	CloudName    string `env:"CLOUDINARY_CLOUD_NAME,required"`
	APIKey       string `env:"CLOUDINARY_API_KEY,required"`
	APISecret    string `env:"CLOUDINARY_API_SECRET,required"`
	UploadFolder string `env:"CLOUDINARY_UPLOAD_FOLDER,required"`
}

type Config struct {
	ServerPort  string `env:"SERVER_PORT,required"`
	EnvType     string `env:"ENV_TYPE,required"`
	CORSOrigins string `env:"CORS_ORIGIN,required"`
	DatabaseURL string `env:"DATABASE_URL,required"`
	// ZohoConfig       ZohoConfig       `envPrefix:"ZOHO_"`
	JWTConfig JWTConfig
	// CloudinaryConfig CloudinaryConfig `envPrefix:"CLOUDINARY_"`
}

func NewConfig() (*Config, error) {
	if err := godotenv.Load(); err != nil {
		return nil, err
	}

	cfg := new(Config)
	if err := env.Parse(cfg); err != nil {
		return nil, fmt.Errorf("error parsing env vars: %w", err)
	}

	return cfg, nil
}

// WEBAPP_DOMAIN=localhost
// ORIGIN_PORT=5173

// DATABASE_URL="postgresql://root:secret@localhost:5432/phototours_db"

// JWT_SECRET=your_super_secret_jwt_key_here_change_this_in_production
// JWT_EXPIRES_IN=7d

// POSTGRES_USER=root
// POSTGRES_PASSWORD=secret
// POSTGRES_DB=phototours_db

// CORS_ORIGIN=http://localhost:5173
// ZOHO_CLIENT_ID="1000.PHOCM1CA1QXOYZRVTOEYFBB1KU49FX"
// ZOHO_CLIENT_SECRET="1b19c682c51d51f6c0b769fc5174b88d6967c312e8"
// ZOHO_REFRESH_TOKEN="1000.c5254ebe6ed124d1ccfbb33dc0429dc0.81a626892accc25b4ca9448430426789"
// ZOHO_REDIRECT_URI="http://localhost:8000/auth/zoho/callback"
// SALT_ROUNDS=12

// CLOUDINARY_CLOUD_NAME=dpmgvfdta
// CLOUDINARY_API_KEY=946944336417467
// CLOUDINARY_API_SECRET=sfmWtPy-X-mKWwx2AWX01xaDEdA
// CLOUDINARY_UPLOAD_FOLDER=phototours
