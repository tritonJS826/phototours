import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";

export function ProtectedPageLayout() {
  const {isAuthenticated, isLoading} = useAuth();

  if (isLoading) {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "60vh"}}>
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
    <div className="page">
      <Outlet />
    </div>
  );
}
