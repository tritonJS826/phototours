import {DecodedUser, extractTokenFromHeader, verifyToken} from 'src/utils/auth';
import {NextFunction, Request, Response} from 'express';

const HTTP_UNAUTHORIZED = 401;
const HTTP_FORBIDDEN = 403;

export type AuthRequest = Request & {
  user?: DecodedUser;
};

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const token = extractTokenFromHeader(typeof req.headers.authorization === 'string' ? req.headers.authorization : '');

  if (!token) {
    return res.status(HTTP_UNAUTHORIZED).json({error: 'Access token required'});
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;

    return next();
  } catch {
    return res.status(HTTP_FORBIDDEN).json({error: 'Invalid or expired token'});
  }
}

export function requireRole(roles: readonly string[]) {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(HTTP_UNAUTHORIZED).json({error: 'Authentication required'});
    }
    if (!roles.includes(req.user.role)) {
      return res.status(HTTP_FORBIDDEN).json({error: 'Insufficient permissions'});
    }

    return next();
  };
}
