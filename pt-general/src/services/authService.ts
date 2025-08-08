import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from 'src/db/prisma';
import { createZohoService } from 'src/services/zohoService';
import { env } from 'src/config/env';

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
          message: 'User with this email already exists'
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
        message: 'User registered successfully'
      };

    } catch (error) {
      console.error('❌ Error registering user:', error);
      return {
        success: false,
        message: 'Error registering user'
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
          message: 'Invalid email or password'
        };
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(data.password, user.password);

      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Invalid email or password'
        };
      }

      // Generate JWT token
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
        message: 'Login successful'
      };

    } catch (error) {
      console.error('Error logging in user:', error);
      return {
        success: false,
        message: 'Error during authentication'
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
          message: 'User not found'
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
        message: 'Token is valid'
      };

    } catch (error) {
      console.error('Error validating token:', error);
      return {
        success: false,
        message: 'Invalid token'
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
        message: 'Profile updated successfully'
      };

    } catch (error) {
      console.error('Error updating profile:', error);
      return {
        success: false,
        message: 'Error updating profile'
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
          message: 'User not found'
        };
      }

      // Check current password
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

      if (!isCurrentPasswordValid) {
        return {
          success: false,
          message: 'Invalid current password'
        };
      }

      // Hash new password
      const hashedNewPassword = await bcrypt.hash(newPassword, this.SALT_ROUNDS);

      // Update password
      await prisma.user.update({
        where: { id: userId },
        data: {
          password: hashedNewPassword,
          updatedAt: new Date()
        }
      });

      return {
        success: true,
        message: 'Password changed successfully'
      };

    } catch (error) {
      console.error('Error changing password:', error);
      return {
        success: false,
        message: 'Error changing password'
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

 