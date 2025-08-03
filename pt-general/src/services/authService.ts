import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../db/prisma';
import { createZohoService } from './zohoService';
import { env } from '../config/env';

export interface RegisterData {
  email: string;
  name: string;
  password: string;
  phone?: string;
  company?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: {
    id: number;
    email: string;
    name: string;
    role: string;
    profilePicUrl?: string;
  };
  token?: string;
  message: string;
}

export class AuthService {
  private readonly SALT_ROUNDS = 12;
  private readonly JWT_SECRET = env.JWT_SECRET;
  private readonly JWT_EXPIRES_IN = env.JWT_EXPIRES_IN || '7d';

  /**
   * Регистрация нового пользователя
   */
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      // Проверяем, существует ли пользователь с таким email
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
      });

      if (existingUser) {
        return {
          success: false,
          message: 'Пользователь с таким email уже существует'
        };
      }

      // Хешируем пароль
      const hashedPassword = await bcrypt.hash(data.password, this.SALT_ROUNDS);

      // Создаем пользователя в базе данных
      const user = await prisma.user.create({
        data: {
          email: data.email,
          name: data.name,
          password: hashedPassword, // Сохраняем только хешированный пароль
        },
      });

      // Создаем лид в Zoho CRM (без пароля)
      try {
        const zohoService = createZohoService();
        const leadData = {
          First_Name: data.name.split(' ')[0] || data.name,
          Last_Name: data.name.split(' ').slice(1).join(' ') || '',
          Email: data.email,
          Phone: data.phone || '',
          Company: data.company || '',
          Lead_Source: 'PhotoTours Website Registration',
          Description: `Новый пользователь зарегистрировался через форму на сайте. Email: ${data.email}`
        };
        
        const leadResult = await zohoService.createLead(leadData);
        console.log('✅ Lead created in Zoho CRM:', leadResult);
      } catch (zohoError) {
        console.error('❌ Error creating lead in Zoho:', zohoError);
        // Не прерываем регистрацию, если Zoho недоступен
      }

      // Генерируем JWT токен
      const token = this.generateToken(user.id);

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profilePicUrl: user.profilePicUrl || undefined,
        },
        token,
        message: 'Пользователь успешно зарегистрирован'
      };

    } catch (error) {
      console.error('❌ Error registering user:', error);
      return {
        success: false,
        message: 'Ошибка при регистрации пользователя'
      };
    }
  }

  /**
   * Авторизация пользователя
   */
  async login(data: LoginData): Promise<AuthResponse> {
    try {
      // Ищем пользователя по email
      const user = await prisma.user.findUnique({
        where: { email: data.email }
      });

      if (!user) {
        return {
          success: false,
          message: 'Неверный email или пароль'
        };
      }

      // Проверяем пароль
      const isPasswordValid = await bcrypt.compare(data.password, user.password);

      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Неверный email или пароль'
        };
      }

      // Генерируем JWT токен
      const token = this.generateToken(user.id);

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profilePicUrl: user.profilePicUrl || undefined,
        },
        token,
        message: 'Успешная авторизация'
      };

    } catch (error) {
      console.error('❌ Error logging in user:', error);
      return {
        success: false,
        message: 'Ошибка при авторизации'
      };
    }
  }

  /**
   * Валидация JWT токена
   */
  async validateToken(token: string): Promise<AuthResponse> {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as { userId: number };
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      });

      if (!user) {
        return {
          success: false,
          message: 'Пользователь не найден'
        };
      }

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profilePicUrl: user.profilePicUrl || undefined,
        },
        message: 'Токен валиден'
      };

    } catch (error) {
      console.error('❌ Error validating token:', error);
      return {
        success: false,
        message: 'Недействительный токен'
      };
    }
  }

  /**
   * Обновление профиля пользователя
   */
  async updateProfile(userId: number, data: Partial<{ name: string; bio: string; profilePicUrl: string }>): Promise<AuthResponse> {
    try {
      const user = await prisma.user.update({
        where: { id: userId },
        data: {
          name: data.name,
          bio: data.bio,
          profilePicUrl: data.profilePicUrl,
          updatedAt: new Date()
        }
      });

      return {
        success: true,
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profilePicUrl: user.profilePicUrl || undefined,
        },
        message: 'Профиль успешно обновлен'
      };

    } catch (error) {
      console.error('❌ Error updating profile:', error);
      return {
        success: false,
        message: 'Ошибка при обновлении профиля'
      };
    }
  }

  /**
   * Смена пароля
   */
  async changePassword(userId: number, currentPassword: string, newPassword: string): Promise<AuthResponse> {
    try {
      // Получаем пользователя
      const user = await prisma.user.findUnique({
        where: { id: userId }
      });

      if (!user) {
        return {
          success: false,
          message: 'Пользователь не найден'
        };
      }

      // Проверяем текущий пароль
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

      if (!isCurrentPasswordValid) {
        return {
          success: false,
          message: 'Неверный текущий пароль'
        };
      }

      // Хешируем новый пароль
      const hashedNewPassword = await bcrypt.hash(newPassword, this.SALT_ROUNDS);

      // Обновляем пароль
      await prisma.user.update({
        where: { id: userId },
        data: {
          password: hashedNewPassword,
          updatedAt: new Date()
        }
      });

      return {
        success: true,
        message: 'Пароль успешно изменен'
      };

    } catch (error) {
      console.error('❌ Error changing password:', error);
      return {
        success: false,
        message: 'Ошибка при смене пароля'
      };
    }
  }

  /**
   * Генерация JWT токена
   */
  private generateToken(userId: number): string {
    return jwt.sign(
      { userId },
      this.JWT_SECRET,
      { expiresIn: this.JWT_EXPIRES_IN }
    );
  }
}

/**
 * Middleware для проверки авторизации
 */
export function authMiddleware(req: any, res: any, next: any) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Токен авторизации не предоставлен'
    });
  }

  const token = authHeader.substring(7); // Убираем 'Bearer '
  
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as { userId: number };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Недействительный токен'
    });
  }
}

/**
 * Middleware для проверки роли
 */
export function roleMiddleware(allowedRoles: string[]) {
  return async (req: any, res: any, next: any) => {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.userId }
      });

      if (!user || !allowedRoles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message: 'Недостаточно прав для выполнения операции'
        });
      }

      next();
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: 'Ошибка при проверке прав доступа'
      });
    }
  };
} 