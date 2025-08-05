import axios from "axios";

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

// API base URL from environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {"Content-Type": "application/json"},
});

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
    try {
      const response = await apiClient.post<User>("/users", userData);

      return response.data;
    } catch {
      throw new Error("Failed to create user");
    }
  }

  /**
   * Get all users (for future use)
   * @returns Promise with array of users
   */
  public static async getUsers(): Promise<User[]> {
    try {
      const response = await apiClient.get<User[]>("/users");

      return response.data;
    } catch {
      throw new Error("Failed to fetch users");
    }
  }

}
