import {Navigate, Outlet, useLocation} from "react-router-dom";
import {Loader} from "src/components/Loader/Loader";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";

export function ProtectedPageLayout() {
  const {isAuthenticated, isLoading, user} = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "60vh"}}>
        <Loader />
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

  const isAdminRoute = location.pathname.startsWith("/admin") && location.pathname !== PATHS.ADMIN_LOGIN;
  if (isAdminRoute && user?.role !== "ADMIN") {
    return (
      <Navigate
        to={PATHS.ADMIN_LOGIN}
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
