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

type StripeConfig struct {
	SecretKey     string `env:"STRIPE_SECRET_KEY,required"`
	WebhookSecret string `env:"STRIPE_WEBHOOK_SECRET,required"`
}

const EnvTypeProd = "prod"

type Config struct {
	ServerPort       string `env:"SERVER_PORT,required"`
	WebappDomain     string `env:"WEBAPP_DOMAIN,required"`
	EnvType          string `env:"ENV_TYPE,required"`
	CORSOrigins      string `env:"CORS_ORIGIN,required"`
	DatabaseURL      string `env:"DATABASE_URL,required"`
	DBSchemaPath     string `env:"DB_SCHEMA_PATH"`
	TestDataPath     string `env:"TEST_DATA_PATH"`
	ZohoConfig       ZohoConfig
	JWTConfig        JWTConfig
	CloudinaryConfig CloudinaryConfig
	StripeConfig     StripeConfig
}

func NewConfig(path string) (*Config, error) {
	if err := godotenv.Load(path); err != nil {
		fmt.Println("No .env file found or error loading .env file, proceeding with system environment variables")
	}

	cfg := new(Config)
	if err := env.Parse(cfg); err != nil {
		return nil, fmt.Errorf("error parsing env vars: %w", err)
	}

	return cfg, nil
}
