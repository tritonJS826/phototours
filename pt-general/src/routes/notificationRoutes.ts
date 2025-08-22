import {
  createNotification,
  deleteAllNotifications,
  deleteNotification,
  getAllNotifications,
  getUnreadCount,
  markAllNotificationsAsRead,
  markNotificationAsRead,
} from 'src/controllers/notificationControllers';
import {authenticateToken} from 'src/middleware/auth';
import {Router} from 'express';

const router = Router();

router.use(authenticateToken);

router.get('/', getAllNotifications);

router.get('/unread-count', getUnreadCount);

router.post('/', createNotification);

router.patch('/:id/read', markNotificationAsRead);

router.patch('/mark-all-read', markAllNotificationsAsRead);

router.delete('/:id', deleteNotification);

router.delete('/', deleteAllNotifications);

export {router as notificationRoutes};
