import {env} from 'src/config/env.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface JWTPayload {
  userId: number;
  email: string;
  role: string;
}

export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 12;

  return bcrypt.hash(password, saltRounds);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN});
};

export const verifyToken = (token: string): JWTPayload => {
  return jwt.verify(token, env.JWT_SECRET) as JWTPayload;
};

const BEARER_PREFIX_LENGTH = 7;

export const extractTokenFromHeader = (authorization?: string): string | null => {
  if (!authorization?.startsWith('Bearer ')) {
    return null;
  }

  return authorization.substring(BEARER_PREFIX_LENGTH);
};
