import {
  adminDeletePhoto,
  adminDownloadPhoto,
  getAllUserPhotos,
  getPhotoStats,
} from 'src/controllers/adminPhotoController';
import {authenticateToken, requireRole} from 'src/middlewares/auth';
import express from 'express';

const router = express.Router();

const ADMIN_ROLE = 'ADMIN';
const ADMIN_ONLY = [ADMIN_ROLE];

router.use(authenticateToken);
router.use(requireRole(ADMIN_ONLY));

router.get('/', getAllUserPhotos);
router.get('/stats', getPhotoStats);
router.get('/:photoId/download', adminDownloadPhoto);
router.delete('/:photoId', adminDeletePhoto);

export {router as adminPhotoRoutes};
