import {env} from "src/env";
import {AuthResponse, ChangePasswordData, LoginData, RegisterData, User} from "src/types/auth";

const API_BASE_URL = env.VITE_API_BASE_URL;

class AuthService {

  public async register(data: RegisterData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/general/auth/register`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Ошибка при регистрации");
    }

    return response.json();
  }

  public async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/general/auth/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Ошибка при входе");
    }

    return response.json();
  }

  public async changePassword(data: ChangePasswordData): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/general/auth/change-password`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Ошибка при смене пароля");
    }

    return response.json();
  }

  public async getProfile(): Promise<{ user: User }> {
    const response = await fetch(`${API_BASE_URL}/general/auth/profile`, {
      method: "GET",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Ошибка при получении профиля");
    }

    return response.json();
  }

  public logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  public setAuthData(token: string, user: User): void {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
  }

  public getStoredToken(): string | null {
    return localStorage.getItem("token");
  }

  public getStoredUser(): User | null {
    const userStr = localStorage.getItem("user");

    return userStr ? JSON.parse(userStr) : null;
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem("token");

    return {
      "Content-Type": "application/json",
      ...(token && {Authorization: `Bearer ${token}`}),
    };
  }

}

export const authService = new AuthService();
