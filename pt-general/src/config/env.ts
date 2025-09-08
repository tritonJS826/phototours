function mustEnv(key: string): string {
  const value = process.env[key];
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Missing required env var: ${key}`);
  }

  return value;
}

function toNumber(value: string | undefined, fallback: number): number {
  const n = typeof value === 'string' ? Number(value) : NaN;

  return Number.isFinite(n) ? n : fallback;
}

const DEFAULT_SERVER_PORT = 8000;

export const env = {
  SERVER_PORT: toNumber(process.env.SERVER_PORT, DEFAULT_SERVER_PORT),
  CORS_ORIGIN: mustEnv('CORS_ORIGIN'),
  JWT_SECRET: mustEnv('JWT_SECRET'),
  JWT_EXPIRES_IN: mustEnv('JWT_EXPIRES_IN'),
  DATABASE_URL: mustEnv('DATABASE_URL'),
  CLOUDINARY_CLOUD_NAME: mustEnv('CLOUDINARY_CLOUD_NAME'),
  CLOUDINARY_API_KEY: mustEnv('CLOUDINARY_API_KEY'),
  CLOUDINARY_API_SECRET: mustEnv('CLOUDINARY_API_SECRET'),
  CLOUDINARY_UPLOAD_FOLDER: mustEnv('CLOUDINARY_UPLOAD_FOLDER'),
  ZOHO_CLIENT_ID: mustEnv('ZOHO_CLIENT_ID'),
  ZOHO_CLIENT_SECRET: mustEnv('ZOHO_CLIENT_SECRET'),
  ZOHO_REDIRECT_URI: mustEnv('ZOHO_REDIRECT_URI'),
  ZOHO_REFRESH_TOKEN: mustEnv('ZOHO_REFRESH_TOKEN'),
} as const;
