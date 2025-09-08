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
    const res = await fetch(buildApiUrl("/users"), {
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
    const res = await fetch(buildApiUrl("/users"));
    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}. ${msg}`);
    }

    return res.json();
  }

  public static async getPublicProfile(userId: number): Promise<PublicUserProfile> {
    const res = await fetch(buildApiUrl(`/users/${userId}/public`), {headers: {"Content-Type": "application/json"}});
    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      throw new Error(msg || "Failed to fetch user profile");
    }

    return res.json();
  }

  public static async getMyProfile(): Promise<PublicUserProfile> {
    const res = await fetch(buildApiUrl("/me"), {
      headers: {"Content-Type": "application/json"},
      credentials: "include",
    });
    if (!res.ok) {
      const msg = await res.text().catch(() => "");
      throw new Error(msg || "Failed to fetch my profile");
    }

    return res.json();
  }

}

export const userService = UserService;
