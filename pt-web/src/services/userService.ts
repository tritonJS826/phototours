import {buildApiUrl} from "src/utils/apiBase";

export interface CreateUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  createdAt: string;
}

export interface PublicUserProfile {
  id: number;
  firstName: string;
  lastName: string;
  profilePicUrl: string | null;
  createdAt: string;
  bio?: string;
}

export class UserService {

  public static async createUser(userData: CreateUserRequest): Promise<User> {
    const baseUrl = process.env.VITE_API_BASE_URL || "http://localhost:8000";
    const response = await fetch(`${baseUrl}${API_ROUTES.USERS.CREATE}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      throw new Error(`Failed to create user: ${res.status} ${res.statusText}. ${msg}`);
    }

    return res.json();
  }

  public static async getUsers(): Promise<User[]> {
    const baseUrl = process.env.VITE_API_BASE_URL || "http://localhost:8000";
    const response = await fetch(`${baseUrl}${API_ROUTES.USERS.GET_ALL}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}. ${errorData.message || ""}`,
      );
    }

    return res.json();
  }

  public static async getPublicProfile(userId: number): Promise<PublicUserProfile> {
    const baseUrl = process.env.VITE_API_BASE_URL || "http://localhost:8000";
    const response = await fetch(`${baseUrl}/users/${userId}/public`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    });

    if (!response.ok) {
      throw new Error("Failed to fetch user profile");
    }

    return res.json();
  }

}

export const userService = UserService;
