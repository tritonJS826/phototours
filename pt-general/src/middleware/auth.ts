import {extractTokenFromHeader, verifyToken} from 'src/utils/auth.js';
import {NextFunction, Request, Response} from 'express';

// HTTP Status Codes
const HTTP_STATUS_UNAUTHORIZED = 401;
const HTTP_STATUS_FORBIDDEN = 403;

export interface AuthRequest extends Request {
  user?: {
    userId: number;
    email: string;
    role: string;
  };
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = extractTokenFromHeader(req.headers.authorization);

  if (!token) {
    return res.status(HTTP_STATUS_UNAUTHORIZED).json({error: 'Access token required'});
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    return res.status(HTTP_STATUS_FORBIDDEN).json({error: 'Invalid or expired token'});
  }
};

export const requireRole = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(HTTP_STATUS_UNAUTHORIZED).json({error: 'Authentication required'});
    }

    if (!roles.includes(req.user.role)) {
      return res.status(HTTP_STATUS_FORBIDDEN).json({error: 'Insufficient permissions'});
    }

    next();
  };
};
