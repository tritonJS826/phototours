import React from "react";
import {Navigate} from "react-router-dom";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      >
        Loading...
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to={PATHS.HOME}
        replace
      />
    );
  }

  return (
    <>
      {children}
    </>
  );
};

