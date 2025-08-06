import {API_ROUTES} from "src/config/apiRoutes";
import {env} from "src/utils/env/env";

// Types for user data
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
  password: string; // Generated password
  role: string;
  createdAt: string;
}

/**
 * User service for handling user-related API operations
 */
export class UserService {

  /**
   * Create a new user
   * @param userData - User data to create
   * @returns Promise with created user data
   */
  public static async createUser(userData: CreateUserRequest): Promise<User> {
    const response = await fetch(`${env.API_BASE_PATH}${API_ROUTES.USERS.CREATE}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to create user: ${response.status} ${response.statusText}. ${errorData.message || ""}`,
      );
    }

    return response.json();
  }

  /**
   * Get all users (for future use)
   * @returns Promise with array of users
   */
  public static async getUsers(): Promise<User[]> {
    const response = await fetch(`${env.API_BASE_PATH}${API_ROUTES.USERS.GET_ALL}`);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Failed to fetch users: ${response.status} ${response.statusText}. ${errorData.message || ""}`,
      );
    }

    return response.json();
  }
}
