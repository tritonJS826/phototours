import {prisma} from 'src/db/prisma';
import {Request, Response} from 'express';

// HTTP status codes
const HTTP_STATUS = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CREATED: 201,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const getAllNotifications = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const notifications = await prisma.notification.findMany({
      where: {userId},
      orderBy: {createdAt: 'desc'},
    });

    res.json(notifications);
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const createNotification = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const {title, message, type, category} = req.body;

    if (!title || !message || !type || !category) {
      return res.status(HTTP_STATUS.BAD_REQUEST).json({error: 'Missing required fields'});
    }

    const notification = await prisma.notification.create({
      data: {
        userId,
        title,
        message,
        type,
        category,
      },
    });

    res.status(HTTP_STATUS.CREATED).json(notification);
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const markNotificationAsRead = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const {id} = req.params;

    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const notification = await prisma.notification.updateMany({
      where: {
        id: parseInt(id),
        userId,
      },
      data: {isRead: true},
    });

    if (notification.count === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({error: 'Notification not found'});
    }

    res.json({message: 'Notification marked as read'});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const markAllNotificationsAsRead = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    await prisma.notification.updateMany({
      where: {userId, isRead: false},
      data: {isRead: true},
    });

    res.json({message: 'All notifications marked as read'});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const deleteNotification = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    const {id} = req.params;

    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const notification = await prisma.notification.deleteMany({
      where: {
        id: parseInt(id),
        userId,
      },
    });

    if (notification.count === 0) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({error: 'Notification not found'});
    }

    res.json({message: 'Notification deleted'});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const deleteAllNotifications = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    await prisma.notification.deleteMany({where: {userId}});

    res.json({message: 'All notifications deleted'});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};

export const getUnreadCount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(HTTP_STATUS.UNAUTHORIZED).json({error: 'Unauthorized'});
    }

    const count = await prisma.notification.count({where: {userId, isRead: false}});

    res.json({unreadCount: count});
  } catch {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({error: 'Internal server error'});
  }
};
