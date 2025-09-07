import {changePassword, getProfile, login, register, updateProfile} from 'src/controllers/authControllers';
import {authenticateToken} from 'src/middlewares/auth';
import {UploadApiOptions, v2 as cloudinary} from 'cloudinary';
import {Router} from 'express';
import multer from 'multer';
import {CloudinaryStorage} from 'multer-storage-cloudinary';

const AVATAR_FIELD = 'avatar';
const FOLDER_AVATARS = 'phototours/avatars';
const RESOURCE_IMAGE = 'image';

const storage = new CloudinaryStorage({
  cloudinary,
  params: (): UploadApiOptions => ({
    folder: FOLDER_AVATARS,
    resource_type: RESOURCE_IMAGE,
  }),
});

const upload = multer({storage});

export const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/profile', authenticateToken, getProfile);
authRouter.put('/profile', authenticateToken, upload.single(AVATAR_FIELD), updateProfile);
authRouter.post('/change-password', authenticateToken, changePassword);
