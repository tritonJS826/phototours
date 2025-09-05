import {changePassword, getProfile, login, register, updateProfile} from 'src/controllers/authControllers';
import {authenticateToken} from 'src/middlewares/auth';
import {upload} from 'src/middlewares/upload';
import {Router} from 'express';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/change-password', authenticateToken, changePassword);
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, upload.single('avatar'), updateProfile);

export {router as authRouter};
