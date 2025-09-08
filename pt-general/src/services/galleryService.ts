import {env} from 'src/config/env';
import {prisma} from 'src/db/prisma';
import crypto from 'crypto';

const ONE_HOUR = 3600;
const MS_IN_SECOND = 1000;
const PROTOCOL = 'https://';
const CDN_HOST_PART = 'res.cloudinary.com';
const PATH_IMAGE = 'image';
const PATH_UPLOAD = 'upload';
const SLASH = '/';
const ZERO = 0;

type SaveMeta = {
  userId: number;
  publicId: string;
  bytes: number;
  width?: number;
  height?: number;
  format?: string;
  uploadedAt: number;
  secureUrl?: string;
};

function buildPublicUrl(publicId: string): string {
  const head = [
    PROTOCOL,
    CDN_HOST_PART,
    SLASH,
    env.CLOUDINARY_CLOUD_NAME,
    SLASH,
    PATH_IMAGE,
    SLASH,
    PATH_UPLOAD,
    SLASH,
  ].join('');

  return head + publicId;
}

export function getSignaturePayload() {
  const timestamp = Math.floor(Date.now() / (ONE_HOUR * MS_IN_SECOND)) * ONE_HOUR;
  const base = `folder=${env.CLOUDINARY_UPLOAD_FOLDER}&timestamp=${timestamp}`;
  const toSign = `${base}${env.CLOUDINARY_API_SECRET}`;
  const signature = crypto.createHash('sha1').update(toSign).digest('hex');

  return {
    cloudName: env.CLOUDINARY_CLOUD_NAME,
    apiKey: env.CLOUDINARY_API_KEY,
    folder: env.CLOUDINARY_UPLOAD_FOLDER,
    timestamp,
    signature,
  };
}

export async function saveImageMeta(meta: SaveMeta) {
  const u = await prisma.user.findUnique({where: {id: meta.userId}});
  if (!u) {
    throw new Error('User not found');
  }

  const url = typeof meta.secureUrl === 'string' && meta.secureUrl.length > 0
    ? meta.secureUrl
    : buildPublicUrl(meta.publicId);

  const width = typeof meta.width === 'number' ? meta.width : ZERO;
  const height = typeof meta.height === 'number' ? meta.height : ZERO;
  const format = typeof meta.format === 'string' ? meta.format : '';

  const created = await prisma.galleryImage.create({
    data: {
      userId: meta.userId,
      url,
      publicId: meta.publicId,
      bytes: meta.bytes,
      width,
      height,
      format,
      createdAt: new Date(meta.uploadedAt * MS_IN_SECOND),
    },
  });

  return created;
}

export async function listMyImages(userId: number) {
  const rows = await prisma.galleryImage.findMany({
    where: {userId},
    orderBy: {createdAt: 'desc'},
  });

  return rows.map(r => ({
    id: r.id,
    publicId: r.publicId,
    url: r.url,
    bytes: r.bytes,
    width: r.width,
    height: r.height,
    format: r.format,
    createdAt: r.createdAt,
  }));
}

export async function listPublicImages(userId: number) {
  const rows = await prisma.galleryImage.findMany({
    where: {userId},
    orderBy: {createdAt: 'desc'},
  });

  return rows.map(r => ({
    id: r.id,
    publicId: r.publicId,
    url: r.url,
    bytes: r.bytes,
    width: r.width,
    height: r.height,
    format: r.format,
    createdAt: r.createdAt,
  }));
}

export async function removeMyImage(userId: number, publicId: string) {
  const deleted = await prisma.galleryImage.deleteMany({where: {userId, publicId}});

  return deleted.count > ZERO;
}
