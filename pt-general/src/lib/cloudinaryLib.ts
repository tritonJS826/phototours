import {env} from 'src/config/env';
import {UploadApiErrorResponse, UploadApiResponse, v2 as cloudinary} from 'cloudinary';

const DEFAULT_WIDTH = 1920;
const DEFAULT_HEIGHT = 1080;

type UploadResult = UploadApiResponse;
type UploadError = UploadApiErrorResponse;

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

export async function uploadBuffer(
  buffer: Buffer,
  folder: string,
  publicId?: string,
): Promise<UploadResult> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        public_id: publicId,
        resource_type: 'auto',
        transformation: [{width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT, crop: 'limit'}, {quality: 'auto:good'}],
      },
      (error?: UploadError, result?: UploadResult) => {
        if (error) {
          reject(error);

          return;
        }
        if (!result) {
          reject(new Error('Empty Cloudinary response'));

          return;
        }
        resolve(result);
      },
    );
    stream.end(buffer);
  });
}

export async function deleteByPublicId(publicId: string): Promise<{result: string}> {
  const res = await cloudinary.uploader.destroy(publicId, {resource_type: 'image'});

  return {result: String(res.result)};
}
