import {prisma} from 'src/db/prisma';
import {AuthRequest} from 'src/middlewares/auth';
import {Response} from 'express';

const HTTP = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CREATED: 201,
  INTERNAL: 500,
} as const;

export const getAllNotifications = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const rows = await prisma.notification.findMany({
      where: {userId},
      orderBy: {createdAt: 'desc'},
    });

    return res.json(rows);
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};

export const createNotification = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const title = req.body.title;
    const message = req.body.message;
    const type = req.body.type;
    const category = req.body.category;

    if (!title || !message || !type || !category) {
      return res.status(HTTP.BAD_REQUEST).json({error: 'Missing required fields'});
    }

    const row = await prisma.notification.create({data: {userId, title, message, type, category}});

    return res.status(HTTP.CREATED).json(row);
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};

export const markNotificationAsRead = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const idNum = Number(req.params.id);

    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const result = await prisma.notification.updateMany({
      where: {id: idNum, userId},
      data: {isRead: true},
    });

    if (result.count === 0) {
      return res.status(HTTP.NOT_FOUND).json({error: 'Notification not found'});
    }

    return res.json({message: 'Notification marked as read'});
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};

export const markAllNotificationsAsRead = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    await prisma.notification.updateMany({
      where: {userId, isRead: false},
      data: {isRead: true},
    });

    return res.json({message: 'All notifications marked as read'});
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};

export const deleteNotification = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const idNum = Number(req.params.id);

    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const result = await prisma.notification.deleteMany({where: {id: idNum, userId}});

    if (result.count === 0) {
      return res.status(HTTP.NOT_FOUND).json({error: 'Notification not found'});
    }

    return res.json({message: 'Notification deleted'});
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};

export const deleteAllNotifications = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    await prisma.notification.deleteMany({where: {userId}});

    return res.json({message: 'All notifications deleted'});
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};

export const getUnreadCount = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const count = await prisma.notification.count({where: {userId, isRead: false}});

    return res.json({unreadCount: count});
  } catch {
    return res.status(HTTP.INTERNAL).json({error: 'Internal server error'});
  }
};
