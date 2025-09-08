import {deleteByPublicId, uploadBuffer} from 'src/lib/cloudinaryLib';
import {authenticateToken, AuthRequest} from 'src/middlewares/auth';
import {upload} from 'src/middlewares/upload';
import {PrismaClient} from '@prisma/client';
import {Router} from 'express';

const prisma = new PrismaClient();

const CODE_BAD_REQUEST = 400;
const CODE_CREATED = 201;
const CODE_NOT_FOUND = 404;

export const adminUserPhotos = Router();

adminUserPhotos.use(authenticateToken);

adminUserPhotos.get('/:userId/photos', async (req, res) => {
  const id = Number(req.params.userId);
  if (!Number.isFinite(id)) {
    res.status(CODE_BAD_REQUEST).json({error: 'Invalid user id'});

    return;
  }

  const photos = await prisma.galleryImage.findMany({
    where: {userId: id},
    orderBy: {createdAt: 'desc'},
  });

  res.json(photos);
});

adminUserPhotos.post(
  '/:userId/photos',
  upload.single('file'),
  async (req: AuthRequest, res) => {
    const id = Number(req.params.userId);
    if (!Number.isFinite(id)) {
      res.status(CODE_BAD_REQUEST).json({error: 'Invalid user id'});

      return;
    }
    if (!req.file) {
      res.status(CODE_BAD_REQUEST).json({error: 'File is required'});

      return;
    }

    const up = await uploadBuffer(req.file.buffer, 'users', undefined);

    const saved = await prisma.galleryImage.create({
      data: {
        userId: id,
        url: up.secure_url,
        publicId: up.public_id,
        bytes: up.bytes ?? 0,
        width: up.width ?? 0,
        height: up.height ?? 0,
        format: up.format ?? 'jpg',
      },
    });

    res.status(CODE_CREATED).json(saved);
  },
);

adminUserPhotos.delete('/:userId/photos/:photoId', async (req, res) => {
  const userId = Number(req.params.userId);
  const photoId = Number(req.params.photoId);
  if (!Number.isFinite(userId) || !Number.isFinite(photoId)) {
    res.status(CODE_BAD_REQUEST).json({error: 'Invalid ids'});

    return;
  }

  const photo = await prisma.galleryImage.findFirst({where: {id: photoId, userId}});
  if (!photo) {
    res.status(CODE_NOT_FOUND).json({error: 'Photo not found'});

    return;
  }

  await deleteByPublicId(photo.publicId);
  await prisma.galleryImage.delete({where: {id: photo.id}});

  res.json({ok: true});
});
