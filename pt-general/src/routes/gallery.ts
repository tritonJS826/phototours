import {
  downloadLink,
  listAll,
  listMy,
  removeAny,
  removeMine,
  uploadMany,
} from 'src/controllers/galleryController';
import {authenticateToken} from 'src/middlewares/auth';
import {Router} from 'express';
import multer from 'multer';

const MAX_FILES = 10;
const FIELD = 'files';
const upload = multer({storage: multer.memoryStorage()});

export const galleryRouter = Router();

galleryRouter.use(authenticateToken);
galleryRouter.get('/', listMy);
galleryRouter.post('/', upload.array(FIELD, MAX_FILES), uploadMany);
galleryRouter.delete('/:id', removeMine);

galleryRouter.get('/admin', listAll);
galleryRouter.delete('/admin/:id', removeAny);
galleryRouter.get('/admin/:id/download', downloadLink);
