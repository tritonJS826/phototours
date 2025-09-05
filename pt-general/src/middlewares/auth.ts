import {env} from 'src/config/env';
import {NextFunction, Request, Response} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

const CODE_UNAUTHORIZED = 401;
const BEARER_PREFIX = 'Bearer ';

export type AuthRequest = Request & { userId?: number };

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  try {
    const auth = req.headers.authorization ?? '';
    const starts = auth.startsWith(BEARER_PREFIX);
    if (!starts) {
      res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});

      return;
    }
    const token = auth.slice(BEARER_PREFIX.length).trim();
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload | string;
    const sub = typeof decoded === 'string' ? undefined : decoded.sub;
    const num = typeof sub === 'number' ? sub : typeof sub === 'string' ? Number(sub) : undefined;
    const ok = typeof num === 'number' && Number.isFinite(num);
    if (!ok) {
      res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});

      return;
    }
    (req as AuthRequest).userId = num as number;
    next();
  } catch {
    res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});
  }
}
