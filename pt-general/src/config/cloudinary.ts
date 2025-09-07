import {env} from 'src/config/env';
import {v2 as cloudinary} from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';

const WIDTH = 1920;
const HEIGHT = 1080;

type CloudinaryParams = {
  folder?: string;
  resource_type?: 'image' | 'raw' | 'video' | 'auto';
  transformation?: Array<Record<string, unknown>>;
  public_id?: string;
};

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: () => {
    const name = String(Date.now());
    const params: CloudinaryParams = {
      folder: env.CLOUDINARY_UPLOAD_FOLDER,
      resource_type: 'auto',
      transformation: [
        {width: WIDTH, height: HEIGHT, crop: 'limit'},
        {quality: 'auto:good'},
      ],
      public_id: name,
    };

    return params;
  },
});

export {cloudinary, storage};
