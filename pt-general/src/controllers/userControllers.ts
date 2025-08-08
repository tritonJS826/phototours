import {prisma} from 'src/db/prisma';
import {Role} from 'src/generated/prisma';
import {Request, Response} from 'express';

const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
const HTTP_STATUS_BAD_REQUEST = 400;

export const createUser = async (req: Request, res: Response) => {
  try {
    const {email, firstName, lastName, role, password} = req.body;

    if (!email || !firstName || !password) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Email, firstName and password are required'});
    }

    // Проверяем, если передали роль, чтобы она была валидной
    if (role && !Object.values(Role).includes(role)) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Invalid role value'});
    }
    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
        role: role || undefined,
      },
    });

    return res.status(HTTP_STATUS_CREATED).json(user);
  } catch {
    return res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};
