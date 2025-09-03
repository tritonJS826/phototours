import {storage} from 'src/config/cloudinary';
import multer from 'multer';

export const upload = multer({storage});
