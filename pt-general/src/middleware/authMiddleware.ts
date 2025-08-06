import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';
import {env} from 'src/config/env';

export interface AuthenticatedRequest extends Request {
  userId?: number;
  userRole?: string;
}

/**
 * Middleware для проверки JWT токена
 * Добавляет userId и userRole в объект запроса
 */
export const authMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access token not provided',
      });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    if (!env.JWT_SECRET) {
      console.error('JWT_SECRET not configured in environment variables');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error',
      });
    }

    const decoded = jwt.verify(token, env.JWT_SECRET) as any;
    
    req.userId = decoded.userId;
    req.userRole = decoded.role;
    
    next();
  } catch (error) {
    console.error('Error in authMiddleware:', error);
    
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        success: false,
        message: 'Token expired',
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Authentication error',
    });
  }
};

/**
 * Middleware для проверки роли пользователя
 * @param allowedRoles - массив разрешенных ролей
 */
export const roleMiddleware = (allowedRoles: string[]) => {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.userRole) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated',
      });
    }

    if (!allowedRoles.includes(req.userRole)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions for this operation',
      });
    }

    next();
  };
};

/**
 * Middleware для проверки, что пользователь является владельцем ресурса или имеет роль GUIDE
 */
export const ownerOrGuideMiddleware = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({
        success: false,
        message: 'User not authenticated',
      });
    }

    // If user has GUIDE role, allow access
    if (req.userRole === 'GUIDE') {
      return next();
    }

    // Check if user is the resource owner
    const resourceUserId = parseInt(req.params.userId || req.body.userId);
    
    if (req.userId === resourceUserId) {
      return next();
    }

    return res.status(403).json({
      success: false,
      message: 'Insufficient permissions for this operation',
    });
  } catch (error) {
    console.error('Error in ownerOrGuideMiddleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}; 