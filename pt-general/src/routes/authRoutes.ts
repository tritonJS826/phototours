import { Router } from 'express';
import { 
  register, 
  login, 
  getMe, 
  updateProfile, 
  changePassword,
  authMiddleware 
} from '../controllers/authControllers';

const router = Router();

// Публичные роуты (не требуют авторизации)
router.post('/register', register);
router.post('/login', login);

// Защищенные роуты (требуют авторизации)
router.get('/me', authMiddleware, getMe);
router.put('/profile', authMiddleware, updateProfile);
router.post('/change-password', authMiddleware, changePassword);

export { router as authRoutes }; 