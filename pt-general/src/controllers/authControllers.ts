import {prisma} from 'src/db/prisma.js';
import {AuthRequest} from 'src/middleware/auth.js';
import {comparePassword, generateToken, hashPassword} from 'src/utils/auth.js';
import {logger} from 'src/utils/logger.js';
import {Request, Response} from 'express';
import {createZohoService} from 'src/services/zohoService.js';

// HTTP Status Codes
const HTTP_STATUS_BAD_REQUEST = 400;
const HTTP_STATUS_UNAUTHORIZED = 401;
const HTTP_STATUS_NOT_FOUND = 404;
const HTTP_STATUS_CONFLICT = 409;
const HTTP_STATUS_CREATED = 201;
const HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;

export const register = async (req: Request, res: Response) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const phone = req.body.phone;

    // Check that all required fields are filled
    if (!firstName || !lastName || !email || !password) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'firstName, lastName, email and password are required'});
    }

    // Check that user with such email doesn't exist
    const existingUser = await prisma.user.findUnique({where: {email}});

    if (existingUser) {
      return res.status(HTTP_STATUS_CONFLICT).json({error: 'User with such email already exists'});
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user (password is not sent to Zoho)
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        phone: phone || null,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        role: true,
        createdAt: true,
      },
    });

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Create lead in Zoho CRM
    try {
      const zohoService = createZohoService();
      const leadData = {
        First_Name: user.firstName,
        Last_Name: user.lastName,
        Email: user.email,
        Phone: user.phone || '',
        Lead_Source: 'PhotoTours Website Registration',
        Description: `New user registered through website form. Email: ${user.email}`,
      };

      await zohoService.createLead(leadData);
      logger.info(`Lead created in Zoho CRM for user: ${user.email}`);
    } catch (zohoError) {
      logger.error('Failed to create lead in Zoho CRM:', zohoError);
      // Don't fail registration if Zoho is unavailable
    }

    res.status(HTTP_STATUS_CREATED).json({
      message: 'User successfully registered',
      user,
      token,
    });
  } catch (error) {
    logger.error('Registration error:', error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Registration error'});
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Check that all required fields are filled
    if (!email || !password) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'email and password are required'});
    }

    // Find user by email
    const user = await prisma.user.findUnique({where: {email}});

    if (!user) {
      return res.status(HTTP_STATUS_UNAUTHORIZED).json({error: 'Invalid credentials'});
    }

    // Check password
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(HTTP_STATUS_UNAUTHORIZED).json({error: 'Invalid credentials'});
    }

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Return user data without password
    const userWithoutPassword = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      createdAt: user.createdAt,
    };

    res.json({
      message: 'Login successful',
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    logger.error('Login error:', error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Login error'});
  }
};

export const changePassword = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const currentPassword = req.body.currentPassword;
    const newPassword = req.body.newPassword;

    if (!userId) {
      return res.status(HTTP_STATUS_UNAUTHORIZED).json({error: 'Authentication required'});
    }

    if (!currentPassword || !newPassword) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'currentPassword and newPassword are required'});
    }

    // Find user
    const user = await prisma.user.findUnique({where: {id: userId}});

    if (!user) {
      return res.status(HTTP_STATUS_NOT_FOUND).json({error: 'User not found'});
    }

    // Verify current password
    const isCurrentPasswordValid = await comparePassword(currentPassword, user.password);

    if (!isCurrentPasswordValid) {
      return res.status(HTTP_STATUS_BAD_REQUEST).json({error: 'Current password is incorrect'});
    }

    // Hash new password
    const hashedNewPassword = await hashPassword(newPassword);

    // Update password
    await prisma.user.update({
      where: {id: userId},
      data: {password: hashedNewPassword},
    });

    res.json({message: 'Password successfully changed'});
  } catch (error) {
    logger.error('Password change error:', error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Password change error'});
  }
};

export const getProfile = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(HTTP_STATUS_UNAUTHORIZED).json({error: 'Authentication required'});
    }

    const user = await prisma.user.findUnique({
      where: {id: userId},
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        role: true,
        profilePicUrl: true,
        bio: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(HTTP_STATUS_NOT_FOUND).json({error: 'User not found'});
    }

    res.json({user});
  } catch (error) {
    logger.error('Get profile error:', error);
    res.status(HTTP_STATUS_INTERNAL_SERVER_ERROR).json({error: 'Get profile error'});
  }
};
