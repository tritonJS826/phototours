import {prisma} from 'src/db/prisma';
import {Role} from 'src/generated/prisma';
import {logger} from 'src/utils/logger';
import {Request, Response} from 'express';

const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_NOT_FOUND = 404;
const NAME_SPLIT_INDEX = 1;

export const createUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const role = req.body.role;
    const password = req.body.password;

    if (!email || !name || !password) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Email and name are required'});
    }

    // Check if role was passed, to ensure it's valid
    if (role && !Object.values(Role).includes(role)) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Invalid role value'});
    }
    const user = await prisma.user.create({
      data: {
        email,
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(NAME_SPLIT_INDEX).join(' ') || '',
        password,
        role: role || undefined,
      },
    });

    return res.status(HTTP_STATUS_CREATED).json(user);
  } catch {
    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const getPublicProfile = async (req: Request, res: Response) => {
  try {
    const userId = parseInt(req.params.id);

    if (isNaN(userId)) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Invalid user ID'});
    }

    const user = await prisma.user.findUnique({
      where: {id: userId},
      select: {
        id: true,
        firstName: true,
        lastName: true,
        profilePicUrl: true,
        createdAt: true,
        bio: true,
      },
    });

    if (!user) {
      return res.status(HTTP_STATUS_NOT_FOUND).json({error: 'User not found'});
    }

    return res.json(user);
  } catch (error) {
    logger.error('Error fetching public profile:', error);

    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};
