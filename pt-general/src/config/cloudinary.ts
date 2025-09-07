import {env} from 'src/config/env';
import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

export const CLOUDINARY_UPLOAD_FOLDER = env.CLOUDINARY_UPLOAD_FOLDER;

export const storage = new CloudinaryStorage({
  cloudinary,
  params: (_req, file) => {
    const name = `${Date.now()}-${file.originalname}`;

    return {
      public_id: `${CLOUDINARY_UPLOAD_FOLDER}/${name}`,
      resource_type: 'auto',
    };
  },
});

export {cloudinary};
