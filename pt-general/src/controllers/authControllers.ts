import { Request, Response } from "express";
import { AuthService } from "src/services/authService";
import { AuthenticatedRequest } from "src/middleware/authMiddleware";

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

    // Validate data
    if (!email || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "Email, name and password are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must contain at least 6 characters",
      });
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    const result = await authService.register({
      email,
      name,
      password,
      phone,
      company,
    });

    if (!result.success) {
      const statusCode = result.message.includes("already exists") ? 409 : 400;
      return res.status(statusCode).json(result);
    }

    res.status(201).json(result);
  } catch (error) {
    console.error("Error in register controller:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
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

    // Validate data
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const result = await authService.login({ email, password });

    if (!result.success) {
      return res.status(401).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({
      success: false,
      message: "Внутренняя ошибка сервера",
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
export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    const result = await authService.validateToken(req.headers.authorization?.substring(7) || '');

    if (!result.success) {
      return res.status(401).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error("Error in getMe controller:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
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
export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    
    const { name, bio, profilePicUrl } = req.body;

    const result = await authService.updateProfile(userId, {
      name,
      bio,
      profilePicUrl,
    });

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error("Error in updateProfile controller:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
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
export const changePassword = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    
    if (!req.body.currentPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password is required",
      });
    }

    // Validate new password
    if (!req.body.newPassword) {
      return res.status(400).json({
        success: false,
        message: "New password is required",
      });
    }

    if (req.body.currentPassword === req.body.newPassword) {
      return res.status(400).json({
        success: false,
        message: "New password must be different from current password",
      });
    }

    const result = await authService.changePassword(
      userId,
      req.body.currentPassword,
      req.body.newPassword
    );

    if (!result.success) {
      return res.status(400).json(result);
    }

    res.json(result);
  } catch (error) {
    console.error("Error in changePassword controller:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
