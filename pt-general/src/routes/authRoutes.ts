import {
  login,
  register,
  getMe,
  updateProfile,
  changePassword,
} from 'src/controllers/authControllers';
import {authMiddleware} from 'src/middleware/authMiddleware';
import {Router} from 'express';

export const authRoutes = Router();

// Public authentication routes
authRoutes.post('/login', login);
authRoutes.post('/register', register);

// Protected user profile routes (require authentication)
authRoutes.get('/me', authMiddleware, getMe);
authRoutes.put('/profile', authMiddleware, updateProfile);
authRoutes.post('/change-password', authMiddleware, changePassword); 