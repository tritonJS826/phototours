import {logger} from '../utils/logger';
import crypto from 'crypto';

const RES_HOST = 'https://res.cloudinary.com/';
const SEGMENT_UPLOAD = 'image/upload';
const TRANSFORM_FILL = 'c_fill';
const QUALITY_AUTO = 'q_auto';
const HTTP_OK = 200;
const MS_IN_SECOND = 1000;

const BYTES_IN_KB = 1024;
const KB_IN_MB = 1024;
const TEN_MB = 10;
const MAX_FILE_BYTES = TEN_MB * BYTES_IN_KB * KB_IN_MB;

const SIZE_150 = 150;
const SIZE_300 = 300;
const SIZE_600 = 600;
const SIZE_1200 = 1200;

type UploadResult = {
  public_id: string;
  secure_url: string;
  bytes: number;
  width: number;
  height: number;
  format: string;
};

type SignedParams = {
  signature: string;
  timestamp: number;
  folder: string;
};

export class CloudinaryService {

  private readonly cloudName: string;

  private readonly apiKey: string;

  private readonly apiSecret: string;

  constructor() {
    this.cloudName = process.env.CLOUDINARY_CLOUD_NAME ?? '';
    this.apiKey = process.env.CLOUDINARY_API_KEY ?? '';
    this.apiSecret = process.env.CLOUDINARY_API_SECRET ?? '';
  }

  public validateFile(file: File): { isValid: boolean; error?: string } {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (file.size > MAX_FILE_BYTES) {
      return {isValid: false, error: 'File size exceeds 10MB limit'};
    }
    if (!allowed.includes(file.type)) {
      return {isValid: false, error: 'File type not supported. Use JPEG, PNG, or WebP'};
    }

    return {isValid: true};
  }

  public async uploadToCloudinary(
    file: File,
    signature: string,
    timestamp: number,
    folder: string,
  ): Promise<UploadResult> {
    return new Promise((resolve, reject) => {
      const fd = new FormData();
      fd.append('file', file);
      fd.append('signature', signature);
      fd.append('timestamp', String(timestamp));
      fd.append('api_key', this.apiKey);
      fd.append('folder', folder);

      const xhr = new XMLHttpRequest();
      xhr.addEventListener('load', () => {
        if (xhr.status === HTTP_OK) {
          try {
            resolve(JSON.parse(xhr.responseText) as UploadResult);
          } catch {
            reject(new Error('Invalid response from Cloudinary'));
          }
        } else {
          reject(new Error(`Upload failed with status: ${xhr.status}`));
        }
      });
      xhr.addEventListener('error', () => reject(new Error('Upload failed')));

      xhr.open('POST', `${RES_HOST}${this.cloudName}/${SEGMENT_UPLOAD}`);
      xhr.send(fd);
    });
  }

  public generateThumbnail(publicId: string, w: number, h: number): string {
    return `${RES_HOST}${this.cloudName}/${SEGMENT_UPLOAD}/${TRANSFORM_FILL},w_${w},h_${h},${QUALITY_AUTO}/${publicId}`;
  }

  public generateResponsiveUrls(publicId: string) {
    return {
      thumbnail: this.generateThumbnail(publicId, SIZE_150, SIZE_150),
      small: this.generateThumbnail(publicId, SIZE_300, SIZE_300),
      medium: this.generateThumbnail(publicId, SIZE_600, SIZE_600),
      large: this.generateThumbnail(publicId, SIZE_1200, SIZE_1200),
      original: `${RES_HOST}${this.cloudName}/${SEGMENT_UPLOAD}/${QUALITY_AUTO}:best/${publicId}`,
    };
  }

  public createSignedUploadParams({folder, expireAt}: {folder: string; expireAt: number}): SignedParams {
    const timestamp = Math.floor(expireAt / MS_IN_SECOND);
    const toSign = `folder=${folder}&timestamp=${timestamp}${this.apiSecret ? `&api_key=${this.apiKey}` : ''}`;
    const signature = crypto.createHash('sha1').update(toSign).digest('hex');

    return {signature, timestamp, folder};
  }

  public async deletePhoto(_publicId: string): Promise<void> {
    await Promise.resolve();
    logger.debug('cloudinary deletePhoto noop', {publicId: _publicId});
  }

  public async batchDeletePhotos(_publicIds: string[]): Promise<void> {
    await Promise.resolve();
    logger.debug('cloudinary batchDeletePhotos noop', {count: _publicIds.length});
  }

}

export const cloudinaryService = new CloudinaryService();
