import {PrismaClient} from '@prisma/client';
import {Router} from 'express';

const prisma = new PrismaClient();
export const publicGallery = Router();

const CODE_BAD_REQUEST = 400;

publicGallery.get('/:userId', async (req, res) => {
  const userId = Number(req.params.userId);
  if (!Number.isFinite(userId)) {
    res.status(CODE_BAD_REQUEST).json({error: 'Invalid user id'});

    return;
  }

  const rows = await prisma.galleryImage.findMany({
    where: {userId},
    orderBy: {createdAt: 'desc'},
  });

  res.json(rows);
});
