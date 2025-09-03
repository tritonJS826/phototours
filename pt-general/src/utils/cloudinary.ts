import {v2 as cloudinary} from 'cloudinary';

const ZERO = 0;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ?? '',
  api_key: process.env.CLOUDINARY_API_KEY ?? '',
  api_secret: process.env.CLOUDINARY_API_SECRET ?? '',
  secure: true,
});

export function uploadStream(folder: string) {
  return cloudinary.uploader.upload_stream({folder});
}

export function destroy(publicId: string) {
  return cloudinary.uploader.destroy(publicId);
}

export function signedDownloadUrl(publicId: string): string {
  const version = Date.now().toString();
  const url = cloudinary.url(publicId, {type: 'upload', version, sign_url: true, resource_type: 'image'});

  return url;
}

export type CloudinaryUploadResult = {
  public_id: string;
  secure_url: string;
  bytes: number;
  width?: number;
  height?: number;
  format?: string;
};

export const EMPTY = ZERO;
