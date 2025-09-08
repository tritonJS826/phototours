import {authenticateToken} from 'src/middlewares/auth';
import {PrismaClient} from '@prisma/client';
import {Router} from 'express';

const prisma = new PrismaClient();
export const adminUsers = Router();

adminUsers.use(authenticateToken);

adminUsers.get('/', async (_req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      createdAt: true,
      profilePicUrl: true,
    },
    orderBy: {createdAt: 'desc'},
  });

  res.json(users);
});
