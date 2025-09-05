import {storage} from 'src/config/cloudinary';
import multer from 'multer';

const upload = multer({storage});

export {upload};
