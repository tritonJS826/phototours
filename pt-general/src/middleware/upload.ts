// Multer instance configured with Cloudinary storage for handling file uploads (photos, videos, avatars).
// Used as middleware to process multipart/form-data and upload files directly to Cloudinary.

import {storage} from 'src/config/cloudinary';
import multer from 'multer';

export const upload = multer({storage});
