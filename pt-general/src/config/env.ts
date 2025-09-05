import {cleanEnv, port, str, url} from 'envalid';

export const env = cleanEnv(process.env, {
  SERVER_PORT: port(),
  CORS_ORIGIN: url(),
  JWT_SECRET: str(),
  JWT_EXPIRES_IN: str(),
  DATABASE_URL: str(),
  CLOUDINARY_CLOUD_NAME: str(),
  CLOUDINARY_API_KEY: str(),
  CLOUDINARY_API_SECRET: str(),
  CLOUDINARY_UPLOAD_FOLDER: str({default: 'uploads'}),
  ZOHO_REFRESH_TOKEN: str({default: ''}),
  ZOHO_CLIENT_ID: str({default: ''}),
  ZOHO_CLIENT_SECRET: str({default: ''}),
  ZOHO_REDIRECT_URI: str({default: ''}),
});
