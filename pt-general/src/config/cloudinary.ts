import {env} from 'src/config/env';
import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: (_req, file) => {

    return {
      folder: env.CLOUDINARY_UPLOAD_FOLDER,
      resource_type: 'auto',
      public_id: `${file.fieldname}_${Date.now()}_${file.originalname.split('.')[0]}`,
    };
  },
});

export {cloudinary, storage};
