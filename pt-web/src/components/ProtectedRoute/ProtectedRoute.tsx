import React from "react";
import {Navigate} from "react-router-dom";
import {PATHS} from "../../constants/routes.js";
import {useAuth} from "../../hooks/useAuth.js";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const {isAuthenticated, isLoading} = useAuth();

  // Показываем загрузку, пока проверяем авторизацию
  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      >
        Загрузка...
      </div>
    );
  }

  // Если пользователь не авторизован, перенаправляем на главную
  if (!isAuthenticated) {
    return (
      <Navigate
        to={PATHS.HOME}
        replace
      />
    );
  }

  // Если авторизован, показываем защищенный контент
  return (
    <>
      {children}
    </>
  );
};

