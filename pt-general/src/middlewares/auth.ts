import {env} from 'src/config/env';
import {NextFunction, Request, Response} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

const CODE_UNAUTHORIZED = 401;
const BEARER_PREFIX = 'Bearer ';

export type AuthRequest = Request & { userId?: number; role?: string };

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = req.headers.authorization ?? '';
    if (!auth.startsWith(BEARER_PREFIX)) {
      res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});

      return;
    }

    const token = auth.slice(BEARER_PREFIX.length).trim();
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload | string;

    const sub = typeof decoded === 'string' ? undefined : decoded.sub;
    const num = typeof sub === 'number' ? sub : typeof sub === 'string' ? Number(sub) : undefined;

    if (!num || !Number.isFinite(num)) {
      res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});

      return;
    }

    (req as AuthRequest).userId = num;

    if (typeof decoded !== 'string' && decoded.role) {
      (req as AuthRequest).role = decoded.role as string;
    }

    next();
  } catch {
    res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});
  }
}

export function requireRole(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req as AuthRequest;
    if (!user.role || !roles.includes(user.role)) {
      return res.status(CODE_UNAUTHORIZED).json({error: 'Forbidden'});
    }
    next();
  };
}
