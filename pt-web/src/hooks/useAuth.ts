import {useCallback, useEffect, useState} from "react";
import {authService} from "src/services/authService";
import type {AuthState, ChangePasswordData, LoginData, RegisterData, User} from "src/types/auth";

type AuthSuccess = {
  user: User;
  token: string;
};

type ProfileSuccess = {
  user: User;
};

type ChangePasswordSuccess = {
  message: string;
};

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true,
  });

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

  const register = useCallback(
    async (data: RegisterData): Promise<AuthSuccess> => {
      try {
        setAuthState(prev => ({...prev, isLoading: true}));
        const response = await authService.register(data) as AuthSuccess;

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
    },
    [],
  );

  const login = useCallback(
    async (data: LoginData): Promise<AuthSuccess> => {
      try {
        setAuthState(prev => ({...prev, isLoading: true}));

        localStorage.removeItem("notifications");
        localStorage.removeItem("bankAccounts");

        const response = await authService.login(data) as AuthSuccess;

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
    },
    [],
  );

  const logout = useCallback(() => {
    authService.logout();
    setAuthState({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
    });
  }, []);

  const changePassword = useCallback(
    async (data: ChangePasswordData): Promise<ChangePasswordSuccess> => {
      const response = (await authService.changePassword(data)) as ChangePasswordSuccess;

      return response;
    },
    [],
  );

  const refreshProfile = useCallback(async (): Promise<User> => {
    try {
      const response = (await authService.getProfile()) as ProfileSuccess;

      localStorage.setItem("user", JSON.stringify(response.user));

      setAuthState(prev => ({
        ...prev,
        user: response.user,
        isAuthenticated: Boolean(prev.token),
      }));

      return response.user;
    } catch (error) {
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
