import dotenv from 'dotenv';
import {cleanEnv, port, str, url} from 'envalid';

dotenv.config();

export const env = cleanEnv(process.env, {
  DATABASE_URL: url(),
  SERVER_PORT: port(),
  ENV_TYPE: str({choices: ['dev', 'prod']}),
  WEBAPP_DOMAIN: str(),

  // Zoho API Configuration
  ZOHO_CLIENT_ID: str(),
  ZOHO_CLIENT_SECRET: str(),
  ZOHO_REDIRECT_URI: str(),
  ZOHO_REFRESH_TOKEN: str({default: ''}),
});
