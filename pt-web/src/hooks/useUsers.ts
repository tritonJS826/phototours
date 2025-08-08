import {useState} from "react";
import {CreateUserRequest, UserService} from "src/services/userService";

/**
 * Custom hook for managing users data and API operations
 * @returns Object with users data, loading state, error state, and operations
 */
export const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Create a new user
   * @param userData - User data to create
   */
  const createUser = async (userData: CreateUserRequest) => {
    setLoading(true);
    setError(null);

    try {
      const newUser = await UserService.createUser(userData);

      return newUser;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create user";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    createUser,
  };
};
