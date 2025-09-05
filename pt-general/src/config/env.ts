import {config} from 'dotenv';
config();

const SERVER_PORT = 8000;

const must = (name: string) => {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Missing env ${name}`);
  }

  return v;
};

export const env = {
  SERVER_PORT: Number(process.env.SERVER_PORT ?? SERVER_PORT),
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? '*',
  JWT_SECRET: must('JWT_SECRET'),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '7d',
};
