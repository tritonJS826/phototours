import {env} from 'src/config/env';
import {NextFunction, Request, Response} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

const CODE_UNAUTHORIZED = 401;
const BEARER_PREFIX = 'Bearer ';

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
    const maybeNumber = typeof sub === 'number' ? sub : typeof sub === 'string' ? Number(sub) : undefined;

    if (!Number.isFinite(maybeNumber)) {
      res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});

      return;
    }

    req.userId = maybeNumber as number;
    next();
  } catch {
    res.status(CODE_UNAUTHORIZED).json({error: 'Unauthorized'});
  }
}
