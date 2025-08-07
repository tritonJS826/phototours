import dotenv from 'dotenv';
import {cleanEnv, port, str, url} from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  DATABASE_URL: url(),
  SERVER_PORT: port(),
  ENV_TYPE: str({choices: ['dev', 'prod']}),
  WEBAPP_DOMAIN: str(),


  // JWT Configuration
  JWT_SECRET: str(),
  JWT_EXPIRES_IN: str({ default: '7d' }),

  // Zoho API Configuration (опционально)
  ZOHO_CLIENT_ID: str(),
  ZOHO_CLIENT_SECRET: str(),
  ZOHO_REDIRECT_URI: str(),
  ZOHO_REFRESH_TOKEN: str(),

  // Cloudinary Configuration
  CLOUDINARY_CLOUD_NAME: str(),
  CLOUDINARY_API_KEY: str(),
  CLOUDINARY_API_SECRET: str(),
  CLOUDINARY_UPLOAD_FOLDER: str(),

});
