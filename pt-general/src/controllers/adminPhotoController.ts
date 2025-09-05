import {prisma} from 'src/db/prisma';
import type {AuthRequest} from 'src/middlewares/auth';
import {cloudinaryService} from 'src/services/cloudinaryService';
import {logger} from 'src/utils/logger';
import type {Response} from 'express';

const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const MIN_LIMIT = 1;
const PAGE_INDEX_OFFSET = 1;
const DECIMAL_RADIX = 10;
const MS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const ONE_MINUTE_MS = MS_PER_SECOND * SECONDS_PER_MINUTE;

type ListQuery = { page?: string; limit?: string };
type UploadQuery = { isPrivate?: string };

type MulterFile = Express.Multer.File;
type AdapterWithUrl = { url?: string };
type AdapterWithPath = { path?: string };
type AdapterWithPublicId = { public_id?: string };

export const listMyPhotos = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const {page, limit} = req.query as ListQuery;

    const pageNum = Number.parseInt(page ?? String(DEFAULT_PAGE), DECIMAL_RADIX);
    const limitNum = Number.parseInt(limit ?? String(DEFAULT_LIMIT), DECIMAL_RADIX);

    const take = Number.isFinite(limitNum) && limitNum >= MIN_LIMIT ? limitNum : DEFAULT_LIMIT;
    const safePage = Number.isFinite(pageNum) && pageNum >= DEFAULT_PAGE ? pageNum : DEFAULT_PAGE;
    const skip = (safePage - PAGE_INDEX_OFFSET) * take;

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

    return res.status(HTTP_STATUS.OK).json({
      photos: items,
      pagination: {page: safePage, limit: take, total, pages},
    });
  } catch (error) {
    logger.error('listMyPhotos failed', error);

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Failed to load photos'});
  }
};

export const uploadMyPhoto = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const file = req.file as MulterFile | undefined;
    if (!file) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({error: 'File is required'});
    }

    const {isPrivate} = req.query as UploadQuery;
    const privateFlag = (isPrivate ?? '').toLowerCase() === 'true';

    const urlFromAdapter =
      (file as unknown as AdapterWithUrl).url ??
      (file as unknown as AdapterWithPath).path ??
      '';

    const publicId = (file as unknown as AdapterWithPublicId).public_id ?? undefined;

    const created = await prisma.userPhoto.create({
      data: {
        userId: user.userId,
        fileName: file.originalname,
        originalUrl: urlFromAdapter,
        format: file.mimetype,
        fileSize: file.size,
        isPrivate: privateFlag,
        publicId,
      },
    });

    return res.status(HTTP_STATUS.OK).json({photo: created});
  } catch (error) {
    logger.error('uploadMyPhoto failed', error);

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Failed to upload photo'});
  }
};

export const deleteMyPhoto = async (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const photoId = req.params.photoId;
    if (!photoId) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({error: 'Photo ID is required'});
    }

    const photo = await prisma.userPhoto.findUnique({where: {id: photoId}});
    if (!photo || photo.userId !== user.userId) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({error: 'Photo not found'});
    }

    if (photo.publicId) {
      await cloudinaryService.deletePhoto(photo.publicId);
    }

    await prisma.userPhoto.delete({where: {id: photoId}});

    return res.status(HTTP_STATUS.OK).json({success: true});
  } catch (error) {
    logger.error('deleteMyPhoto failed', error);

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Failed to delete photo'});
  }
};

export const getUploadSignature = (req: AuthRequest, res: Response) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const expireAt = Date.now() + ONE_MINUTE_MS;

    const signature = cloudinaryService.createSignedUploadParams({
      folder: `users/${user.userId}`,
      expireAt,
    });

    return res.status(HTTP_STATUS.OK).json(signature);
  } catch (error) {
    logger.error('getUploadSignature failed', error);

    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Failed to get signature'});
  }
};
