import {prisma} from 'src/db/prisma';
import type {AuthRequest} from 'src/middleware/auth';
import {cloudinaryService} from 'src/services/cloudinaryService';
import {logger} from 'src/utils/logger';
import type {Response} from 'express';

const HTTP = {OK: 200, BAD_REQUEST: 400, UNAUTHORIZED: 401, NOT_FOUND: 404, INTERNAL: 500} as const;

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MIN_LIMIT = 1;
const DEC_RADIX = 10;
const PAGE_OFFSET = 1;
const MS_IN_SECOND = 1000;
const SEC_IN_MINUTE = 60;
const ONE_MINUTE_MS = MS_IN_SECOND * SEC_IN_MINUTE;

type ListQuery = {page?: string; limit?: string};
type UploadQuery = {isPrivate?: string};

type MulterFile = Express.Multer.File;
type AdapterFileWithUrl = {url?: string};
type AdapterFileWithPath = {path?: string};
type AdapterFileWithPublicId = {public_id?: string};

export const listMyPhotos = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const {page, limit} = req.query as ListQuery;
    const pageNum = Number.parseInt(page ?? String(DEFAULT_PAGE), DEC_RADIX);
    const limitNum = Number.parseInt(limit ?? String(DEFAULT_LIMIT), DEC_RADIX);

    const take = Number.isFinite(limitNum) && limitNum >= MIN_LIMIT ? limitNum : DEFAULT_LIMIT;
    const safePage = Number.isFinite(pageNum) && pageNum >= DEFAULT_PAGE ? pageNum : DEFAULT_PAGE;
    const skip = (safePage - PAGE_OFFSET) * take;

    const [items, total] = await Promise.all([
      prisma.userPhoto.findMany({
        where: {userId: user.userId},
        orderBy: {createdAt: 'desc'},
        skip,
        take,
      }),
      prisma.userPhoto.count({where: {userId: user.userId}}),
    ]);

    const pages = Math.ceil(total / take);

    return res.status(HTTP.OK).json({photos: items, pagination: {page: safePage, limit: take, total, pages}});
  } catch (error) {
    logger.error('listMyPhotos failed', error);

    return res.status(HTTP.INTERNAL).json({error: 'Failed to load photos'});
  }
};

export const uploadMyPhoto = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const file = req.file as MulterFile | undefined;
    if (!file) {
      return res.status(HTTP.BAD_REQUEST).json({error: 'File is required'});
    }

    const {isPrivate} = req.query as UploadQuery;
    const privateFlag = (isPrivate ?? '').toLowerCase() === 'true';

    const fromUrl = (file as unknown as AdapterFileWithUrl).url;
    const fromPath = (file as unknown as AdapterFileWithPath).path;
    const originalUrl = fromUrl ?? fromPath ?? '';

    const publicId = (file as unknown as AdapterFileWithPublicId).public_id ?? undefined;

    const created = await prisma.userPhoto.create({
      data: {
        userId: user.userId,
        fileName: file.originalname,
        originalUrl,
        format: file.mimetype,
        fileSize: file.size,
        isPrivate: privateFlag,
        publicId,
      },
    });

    return res.status(HTTP.OK).json({photo: created});
  } catch (error) {
    logger.error('uploadMyPhoto failed', error);

    return res.status(HTTP.INTERNAL).json({error: 'Failed to upload photo'});
  }
};

export const deleteMyPhoto = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const photoId = req.params.photoId;
    if (!photoId) {
      return res.status(HTTP.BAD_REQUEST).json({error: 'Photo ID is required'});
    }

    const photo = await prisma.userPhoto.findUnique({where: {id: photoId}});
    if (!photo || photo.userId !== user.userId) {
      return res.status(HTTP.NOT_FOUND).json({error: 'Photo not found'});
    }

    if (photo.publicId) {
      await cloudinaryService.deletePhoto(photo.publicId);
    }
    await prisma.userPhoto.delete({where: {id: photoId}});

    return res.status(HTTP.OK).json({success: true});
  } catch (error) {
    logger.error('deleteMyPhoto failed', error);

    return res.status(HTTP.INTERNAL).json({error: 'Failed to delete photo'});
  }
};

export const getUploadSignature = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const expireAt = Date.now() + ONE_MINUTE_MS;
    const signature = cloudinaryService.createSignedUploadParams({
      folder: `users/${user.userId}`,
      expireAt,
    });

    return res.status(HTTP.OK).json(signature);
  } catch (error) {
    logger.error('getUploadSignature failed', error);

    return res.status(HTTP.INTERNAL).json({error: 'Failed to get signature'});
  }
};
