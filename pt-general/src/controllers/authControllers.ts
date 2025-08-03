import { Request, Response } from 'express';
import { AuthService, authMiddleware, roleMiddleware } from '../services/authService';

const authService = new AuthService();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Регистрация нового пользователя
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - name
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email пользователя
 *               name:
 *                 type: string
 *                 description: Имя пользователя
 *               password:
 *                 type: string
 *                 minLength: 6
 *                 description: Пароль (минимум 6 символов)
 *               phone:
 *                 type: string
 *                 description: Номер телефона (опционально)
 *               company:
 *                 type: string
 *                 description: Компания (опционально)
 *     responses:
 *       200:
 *         description: Пользователь успешно зарегистрирован
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                     role:
 *                       type: string
 *                 token:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Ошибка валидации данных
 *       409:
 *         description: Пользователь с таким email уже существует
 *       500:
 *         description: Внутренняя ошибка сервера
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { email, name, password, phone, company } = req.body;

    // Валидация данных
    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email, имя и пароль обязательны'
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Пароль должен содержать минимум 6 символов'
      });
    }

    // Проверка формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Неверный формат email'
      });
    }

    const result = await authService.register({
      email,
      name,
      password,
      phone,
      company
    });

    if (!result.success) {
      const statusCode = result.message.includes('уже существует') ? 409 : 400;
      return res.status(statusCode).json(result);
    }

    res.status(201).json(result);
  } catch (error) {
    console.error('❌ Error in register controller:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
};

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Авторизация пользователя
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email пользователя
 *               password:
 *                 type: string
 *                 description: Пароль пользователя
 *     responses:
 *       200:
 *         description: Успешная авторизация
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                     role:
 *                       type: string
 *                 token:
 *                   type: string
 *                 message:
 *                   type: string
 *       400:
 *         description: Неверные данные для входа
 *       401:
 *         description: Неверный email или пароль
 *       500:
 *         description: Внутренняя ошибка сервера
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Валидация данных
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email и пароль обязательны'
      });
    }

    const result = await authService.login({ email, password });

    if (!result.success) {
      return res.status(401).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('❌ Error in login controller:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
};

/**
 * @swagger
 * /auth/me:
 *   get:
 *     summary: Получение информации о текущем пользователе
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Информация о пользователе
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                     email:
 *                       type: string
 *                     name:
 *                       type: string
 *                     role:
 *                       type: string
 *                 message:
 *                   type: string
 *       401:
 *         description: Недействительный токен
 *       500:
 *         description: Внутренняя ошибка сервера
 */
export const getMe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.substring(7);
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Токен не предоставлен'
      });
    }

    const result = await authService.validateToken(token);

    if (!result.success) {
      return res.status(401).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('❌ Error in getMe controller:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
};

/**
 * @swagger
 * /auth/profile:
 *   put:
 *     summary: Обновление профиля пользователя
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Новое имя пользователя
 *               bio:
 *                 type: string
 *                 description: Биография пользователя
 *               profilePicUrl:
 *                 type: string
 *                 description: URL аватара пользователя
 *     responses:
 *       200:
 *         description: Профиль успешно обновлен
 *       401:
 *         description: Недействительный токен
 *       500:
 *         description: Внутренняя ошибка сервера
 */
export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { name, bio, profilePicUrl } = req.body;

    const result = await authService.updateProfile(userId, {
      name,
      bio,
      profilePicUrl
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('❌ Error in updateProfile controller:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
};

/**
 * @swagger
 * /auth/change-password:
 *   post:
 *     summary: Смена пароля пользователя
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *             properties:
 *               currentPassword:
 *                 type: string
 *                 description: Текущий пароль
 *               newPassword:
 *                 type: string
 *                 minLength: 6
 *                 description: Новый пароль (минимум 6 символов)
 *     responses:
 *       200:
 *         description: Пароль успешно изменен
 *       400:
 *         description: Неверный текущий пароль или короткий новый пароль
 *       401:
 *         description: Недействительный токен
 *       500:
 *         description: Внутренняя ошибка сервера
 */
export const changePassword = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { currentPassword, newPassword } = req.body;

    // Валидация данных
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Текущий и новый пароль обязательны'
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Новый пароль должен содержать минимум 6 символов'
      });
    }

    const result = await authService.changePassword(userId, currentPassword, newPassword);

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error('❌ Error in changePassword controller:', error);
    res.status(500).json({
      success: false,
      message: 'Внутренняя ошибка сервера'
    });
  }
};

// Экспортируем middleware для использования в роутах
export { authMiddleware, roleMiddleware }; 