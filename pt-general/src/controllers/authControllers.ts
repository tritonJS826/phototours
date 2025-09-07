import {prisma} from 'src/db/prisma.js';
import {AuthRequest} from 'src/middlewares/auth.js';
import {comparePassword, generateToken, hashPassword} from 'src/utils/auth.js';
import {logger} from 'src/utils/logger.js';
import {Request, Response} from 'express';

const HTTP_BAD_REQUEST = 400;
const HTTP_UNAUTHORIZED = 401;
const HTTP_NOT_FOUND = 404;
const HTTP_CONFLICT = 409;
const HTTP_CREATED = 201;
const HTTP_OK = 200;
const HTTP_SERVER_ERROR = 500;

export const register = async (req: Request, res: Response) => {
  try {
    const firstName = typeof req.body.firstName === 'string' ? req.body.firstName.trim() : '';
    const lastName = typeof req.body.lastName === 'string' ? req.body.lastName.trim() : '';
    const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
    const password = typeof req.body.password === 'string' ? req.body.password : '';
    const phone = typeof req.body.phone === 'string' ? req.body.phone.trim() : '';

    if (!firstName || !lastName || !email || !password) {
      return res.status(HTTP_BAD_REQUEST).json({error: 'firstName, lastName, email and password are required'});
    }

    const existing = await prisma.user.findUnique({where: {email}});
    if (existing) {
      return res.status(HTTP_CONFLICT).json({error: 'User with such email already exists'});
    }

    const hashed = await hashPassword(password);

    const user = await prisma.user.create({
      data: {firstName, lastName, email, password: hashed, phone: phone || null},
      select: {
        id: true, firstName: true, lastName: true, email: true, phone: true,
        role: true, profilePicUrl: true, bio: true, createdAt: true,
      },
    });

    const token = generateToken({userId: user.id, email: user.email, role: user.role});

    return res.status(HTTP_CREATED).json({message: 'User successfully registered', user, token});
  } catch (e) {
    logger.error('Registration error:', e);

    return res.status(HTTP_SERVER_ERROR).json({error: 'Registration error'});
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const email = typeof req.body.email === 'string' ? req.body.email.trim() : '';
    const password = typeof req.body.password === 'string' ? req.body.password : '';

    if (!email || !password) {
      return res.status(HTTP_BAD_REQUEST).json({error: 'email and password are required'});
    }

    const user = await prisma.user.findUnique({where: {email}});
    if (!user) {
      return res.status(HTTP_UNAUTHORIZED).json({error: 'Invalid credentials'});
    }

    const ok = await comparePassword(password, user.password);
    if (!ok) {
      return res.status(HTTP_UNAUTHORIZED).json({error: 'Invalid credentials'});
    }

    const token = generateToken({userId: user.id, email: user.email, role: user.role});

    const safeUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      profilePicUrl: user.profilePicUrl,
      bio: user.bio,
      createdAt: user.createdAt,
    };

    return res.status(HTTP_OK).json({message: 'Login successful', user: safeUser, token});
  } catch (e) {
    logger.error('Login error:', e);

    return res.status(HTTP_SERVER_ERROR).json({error: 'Login error'});
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_UNAUTHORIZED).json({error: 'Authentication required'});
    }

    const user = await prisma.user.findUnique({
      where: {id: userId},
      select: {
        id: true, firstName: true, lastName: true, email: true, phone: true,
        role: true, profilePicUrl: true, bio: true, createdAt: true,
      },
    });

    if (!user) {
      return res.status(HTTP_NOT_FOUND).json({error: 'User not found'});
    }

    return res.json({user});
  } catch (e) {
    logger.error('Get profile error:', e);

    return res.status(HTTP_SERVER_ERROR).json({error: 'Get profile error'});
  }
};

export const changePassword = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const currentPassword = typeof req.body.currentPassword === 'string' ? req.body.currentPassword : '';
    const newPassword = typeof req.body.newPassword === 'string' ? req.body.newPassword : '';

    if (!userId) {
      return res.status(HTTP_UNAUTHORIZED).json({error: 'Authentication required'});
    }
    if (!currentPassword || !newPassword) {
      return res.status(HTTP_BAD_REQUEST).json({error: 'currentPassword and newPassword are required'});
    }

    const user = await prisma.user.findUnique({where: {id: userId}});
    if (!user) {
      return res.status(HTTP_NOT_FOUND).json({error: 'User not found'});
    }

    const ok = await comparePassword(currentPassword, user.password);
    if (!ok) {
      return res.status(HTTP_BAD_REQUEST).json({error: 'Current password is incorrect'});
    }

    const hashed = await hashPassword(newPassword);
    await prisma.user.update({where: {id: userId}, data: {password: hashed}});

    return res.json({message: 'Password successfully changed'});
  } catch (e) {
    logger.error('Password change error:', e);

    return res.status(HTTP_SERVER_ERROR).json({error: 'Password change error'});
  }
};

export const updateProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_UNAUTHORIZED).json({error: 'Authentication required'});
    }

    const firstNameRaw = typeof req.body.firstName === 'string' ? req.body.firstName.trim() : '';
    const lastNameRaw = typeof req.body.lastName === 'string' ? req.body.lastName.trim() : '';
    const bioRaw = typeof req.body.bio === 'string' ? req.body.bio.trim() : '';

    const fileObj = req.file as unknown as { path?: string } | undefined;
    const uploadedUrl = fileObj && typeof fileObj.path === 'string' ? fileObj.path : '';

    const data: {
      firstName?: string;
      lastName?: string;
      bio?: string | null;
      profilePicUrl?: string;
    } = {};

    if (firstNameRaw) {
      data.firstName = firstNameRaw;
    }
    if (lastNameRaw) {
      data.lastName = lastNameRaw;
    }
    if (bioRaw || req.body.bio === '') {
      data.bio = bioRaw;
    }
    if (uploadedUrl) {
      data.profilePicUrl = uploadedUrl;
    }

    if (Object.keys(data).length === 0) {
      return res.status(HTTP_BAD_REQUEST).json({error: 'No changes'});
    }

    const user = await prisma.user.findUnique({where: {id: userId}});
    if (!user) {
      return res.status(HTTP_NOT_FOUND).json({error: 'User not found'});
    }

    const updatedUser = await prisma.user.update({
      where: {id: userId},
      data,
      select: {
        id: true, firstName: true, lastName: true, email: true, phone: true,
        role: true, profilePicUrl: true, bio: true, createdAt: true,
      },
    });

    return res.json({message: 'Profile updated', user: updatedUser});
  } catch (e) {
    logger.error('Update profile error:', e);

    return res.status(HTTP_SERVER_ERROR).json({error: 'Update profile error'});
  }
};
