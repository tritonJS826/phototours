import bcrypt from 'bcryptjs';
import jwt, {JwtPayload} from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET ?? '';
const SALT_ROUNDS = 10;

export type DecodedUser = JwtPayload & {
  userId: number;
  email: string;
  role: string;
};

export function extractTokenFromHeader(authHeader: string | undefined): string | null {
  if (!authHeader) {
    return null;
  }
  if (!authHeader.startsWith('Bearer ')) {
    return null;
  }

  return authHeader.replace('Bearer ', '').trim();
}

export function verifyToken(token: string): DecodedUser {
  const decoded = jwt.verify(token, JWT_SECRET) as DecodedUser;

  return decoded;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, {expiresIn: '7d'});
}
