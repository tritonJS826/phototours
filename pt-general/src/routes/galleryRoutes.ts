import {
  confirmUpload,
  deleteMyImage,
  getMyGallery,
  getPublicGallery,
  getUploadSignature,
} from 'src/controllers/galleryController';
import {Router} from 'express';

export const galleryRoutes = Router();

galleryRoutes.get('/signature', getUploadSignature);
galleryRoutes.get('/my', getMyGallery);
galleryRoutes.get('/public/:userId', getPublicGallery);
galleryRoutes.post('/confirm', confirmUpload);
galleryRoutes.delete('/my', deleteMyImage);
