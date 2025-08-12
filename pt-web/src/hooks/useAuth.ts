import {useCallback, useEffect, useState} from "react";
import {authService} from "src/services/authService";
import {AuthState, ChangePasswordData, LoginData, RegisterData} from "src/types/auth";

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

  // Инициализация состояния из localStorage
  useEffect(() => {
    const token = authService.getStoredToken();
    const user = authService.getStoredUser();

    if (token && user) {
      setAuthState({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(prev => ({...prev, isLoading: false}));
    }
  }, []);

  const register = useCallback(async (data: RegisterData) => {
    try {
      setAuthState(prev => ({...prev, isLoading: true}));
      const response = await authService.register(data);

      authService.setAuthData(response.token, response.user);
      setAuthState({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoading: false,
      });

      return response;
    } catch (error) {
      setAuthState(prev => ({...prev, isLoading: false}));
      throw error;
    }
  }, []);

  const login = useCallback(async (data: LoginData) => {
    try {
      setAuthState(prev => ({...prev, isLoading: true}));
      const response = await authService.login(data);

      authService.setAuthData(response.token, response.user);
      setAuthState({
        user: response.user,
        token: response.token,
        isAuthenticated: true,
        isLoading: false,
      });

      return response;
    } catch (error) {
      setAuthState(prev => ({...prev, isLoading: false}));
      throw error;
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const changePassword = useCallback(async (data: ChangePasswordData) => {
    const response = await authService.changePassword(data);

    return response;
  }, []);

  const refreshProfile = useCallback(async () => {
    try {
      const response = await authService.getProfile();
      setAuthState(prev => ({
        ...prev,
        user: response.user,
      }));

      return response.user;
    } catch (error) {
      // Если профиль не удалось получить, возможно токен истек
      logout();
      throw error;
    }
  }, [logout]);

  const refreshFromStorage = useCallback(() => {
    const token = authService.getStoredToken();
    const user = authService.getStoredUser();

    if (token && user) {
      setAuthState({
        user,
        token,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  }, []);

  return {
    ...authState,
    register,
    login,
    logout,
    changePassword,
    refreshProfile,
    refreshFromStorage,
  };
};
