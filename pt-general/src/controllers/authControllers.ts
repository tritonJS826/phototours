import {env} from 'src/config/env';
import {prisma} from 'src/db/prisma';
import type {AuthRequest} from 'src/middlewares/auth';
import {hashPassword, verifyPassword} from 'src/utils/password';
import {Prisma, Role} from '@prisma/client';
import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {z} from 'zod';

const CODE_OK = 200;
const CODE_CREATED = 201;
const CODE_BAD_REQUEST = 400;
const CODE_CONFLICT = 409;
const CODE_SERVER_ERROR = 500;

const MIN_REQUIRED = 1;
const MIN_PASSWORD = 6;

const DUPLICATE_CODE = 'P2002';
const TARGET_EMAIL = 'email';

const MESSAGE_REGISTERED = 'Registered';
const MESSAGE_LOGGED_IN = 'Logged in';
const MESSAGE_CHANGED = 'Password changed';
const MESSAGE_UPDATED = 'Profile updated';

const ERROR_EXISTS = 'User already exists';
const ERROR_INVALID = 'Invalid data';
const ERROR_CREDENTIALS = 'Invalid credentials';
const ERROR_UNAUTHORIZED = 'Unauthorized';
const ERROR_REGISTER = 'Register failed';
const ERROR_LOGIN = 'Login failed';
const ERROR_CHANGE = 'Password change failed';
const ERROR_PROFILE = 'Failed to get profile';
const ERROR_UPDATE = 'Profile update failed';

const PATH_UPLOADS = '/uploads';

const RegisterDto = z.object({
  firstName: z.string().min(MIN_REQUIRED),
  lastName: z.string().min(MIN_REQUIRED),
  email: z.string().email(),
  password: z.string().min(MIN_PASSWORD),
  phone: z.string().optional().default(''),
});

const LoginDto = z.object({
  email: z.string().email(),
  password: z.string().min(MIN_REQUIRED),
});

const ChangePasswordDto = z.object({
  currentPassword: z.string().min(MIN_REQUIRED),
  newPassword: z.string().min(MIN_PASSWORD),
});

const UpdateProfileDto = z.object({
  firstName: z.string().min(MIN_REQUIRED).optional(),
  lastName: z.string().min(MIN_REQUIRED).optional(),
  phone: z.string().nullable().optional(),
  bio: z.string().nullable().optional(),
});

function sign(userId: number) {
  return jwt.sign({sub: String(userId)}, env.JWT_SECRET, {expiresIn: env.JWT_EXPIRES_IN});
}

type DbUserPick = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  role: string;
  profilePicUrl: string | null;
  bio: string | null;
  createdAt: Date;
};

function safeUser(u: DbUserPick) {
  return {
    id: u.id,
    firstName: u.firstName,
    lastName: u.lastName,
    email: u.email,
    phone: u.phone ?? '',
    role: u.role,
    profilePicUrl: u.profilePicUrl ?? '',
    bio: u.bio ?? '',
    createdAt: u.createdAt.toISOString(),
  };
}

export async function register(req: Request, res: Response) {
  try {
    const dto = RegisterDto.parse(req.body);
    const exists = await prisma.user.findUnique({where: {email: dto.email}});
    if (exists) {
      res.status(CODE_CONFLICT).json({error: ERROR_EXISTS});

      return;
    }
    const passwordHash = await hashPassword(dto.password);
    const phoneValue = dto.phone === '' ? null : dto.phone;
    const created = await prisma.user.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        email: dto.email,
        password: passwordHash,
        phone: phoneValue,
        role: Role.CLIENT,
      },
    });
    const token = sign(created.id);
    res.status(CODE_CREATED).json({message: MESSAGE_REGISTERED, user: safeUser(created as DbUserPick), token});
  } catch (e) {
    if ((e as {name?: string}).name === 'ZodError') {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_INVALID});

      return;
    }
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const meta = e.meta as {target?: string[]};
      const target = meta?.target ?? [];
      const dup = e.code === DUPLICATE_CODE && target.includes(TARGET_EMAIL);
      if (dup) {
        res.status(CODE_CONFLICT).json({error: ERROR_EXISTS});

        return;
      }
    }
    res.status(CODE_SERVER_ERROR).json({error: ERROR_REGISTER});
  }
}

export async function login(req: Request, res: Response) {
  try {
    const dto = LoginDto.parse(req.body);
    const user = await prisma.user.findUnique({where: {email: dto.email}});
    if (!user) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_CREDENTIALS});

      return;
    }
    const ok = await verifyPassword(dto.password, user.password);
    if (!ok) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_CREDENTIALS});

      return;
    }
    const token = sign(user.id);
    res.status(CODE_OK).json({message: MESSAGE_LOGGED_IN, user: safeUser(user as DbUserPick), token});
  } catch (e) {
    if ((e as {name?: string}).name === 'ZodError') {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_INVALID});

      return;
    }
    res.status(CODE_SERVER_ERROR).json({error: ERROR_LOGIN});
  }
}

export async function changePassword(req: AuthRequest, res: Response) {
  try {
    const dto = ChangePasswordDto.parse(req.body);
    const userId = req.userId;
    if (!userId) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});

      return;
    }
    const user = await prisma.user.findUnique({where: {id: userId}});
    if (!user) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});

      return;
    }
    const ok = await verifyPassword(dto.currentPassword, user.password);
    if (!ok) {
      res.status(CODE_BAD_REQUEST).json({error: 'Invalid current password'});

      return;
    }
    const newHash = await hashPassword(dto.newPassword);
    await prisma.user.update({where: {id: userId}, data: {password: newHash}});
    res.status(CODE_OK).json({message: MESSAGE_CHANGED});
  } catch (e) {
    if ((e as {name?: string}).name === 'ZodError') {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_INVALID});

      return;
    }
    res.status(CODE_SERVER_ERROR).json({error: ERROR_CHANGE});
  }
}

export async function getProfile(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});

      return;
    }
    const user = await prisma.user.findUnique({where: {id: userId}});
    if (!user) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});

      return;
    }
    res.status(CODE_OK).json({user: safeUser(user as DbUserPick)});
  } catch {
    res.status(CODE_SERVER_ERROR).json({error: ERROR_PROFILE});
  }
}

type UploadedFileLike = { url?: string; path?: string; filename?: string };

function resolveUploadedPath(file?: UploadedFileLike): string | undefined {
  if (file?.url) {
    return file.url;
  }
  if (file?.path) {
    return file.path;
  }
  if (file?.filename) {
    return `${PATH_UPLOADS}/${file.filename}`;
  }

  return undefined;
}

export async function updateProfile(req: AuthRequest, res: Response) {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_UNAUTHORIZED});

      return;
    }
    const dto = UpdateProfileDto.parse(req.body);
    const fileObj = (req as unknown as {file?: UploadedFileLike}).file;
    const uploadedPath = resolveUploadedPath(fileObj);
    const data = {
      ...(dto.firstName !== undefined ? {firstName: dto.firstName} : {}),
      ...(dto.lastName !== undefined ? {lastName: dto.lastName} : {}),
      ...(dto.phone !== undefined ? {phone: dto.phone} : {}),
      ...(dto.bio !== undefined ? {bio: dto.bio} : {}),
      ...(uploadedPath !== undefined ? {profilePicUrl: uploadedPath} : {}),
    };
    const updated = await prisma.user.update({where: {id: userId}, data});
    res.status(CODE_OK).json({message: MESSAGE_UPDATED, user: safeUser(updated as DbUserPick)});
  } catch (e) {
    if ((e as {name?: string}).name === 'ZodError') {
      res.status(CODE_BAD_REQUEST).json({error: ERROR_INVALID});

      return;
    }
    res.status(CODE_SERVER_ERROR).json({error: ERROR_UPDATE});
  }
}
