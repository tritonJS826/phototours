import {storage} from 'src/config/cloudinary';
import multer from 'multer';

const FILES_LIMIT = 50;

export const upload = multer({
  storage,
  limits: {files: FILES_LIMIT},
});
