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

// Все маршруты требуют аутентификации
router.use(authenticateToken);

// Получить все уведомления пользователя
router.get('/', getAllNotifications);

// Получить количество непрочитанных уведомлений
router.get('/unread-count', getUnreadCount);

// Создать новое уведомление
router.post('/', createNotification);

// Отметить уведомление как прочитанное
router.patch('/:id/read', markNotificationAsRead);

// Отметить все уведомления как прочитанные
router.patch('/mark-all-read', markAllNotificationsAsRead);

// Удалить уведомление
router.delete('/:id', deleteNotification);

// Удалить все уведомления пользователя
router.delete('/', deleteAllNotifications);

export {router as notificationRoutes};
