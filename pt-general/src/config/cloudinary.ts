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
  params: (req, file) => {
    let folder = env.CLOUDINARY_UPLOAD_FOLDER;

    if (file.fieldname === 'avatar' || file.mimetype.startsWith('image/')) {
      folder = `${env.CLOUDINARY_UPLOAD_FOLDER}/avatars`;
    }

    return {
      folder,
      resource_type: 'auto',
      transformation: [
        {width: 1920, height: 1080, crop: 'limit'},
        {quality: 'auto:good'},
      ],
      public_id: `${file.fieldname}_${Date.now()}_${file.originalname.split('.')[0]}`,
    };
  },
});

export {cloudinary, storage};
