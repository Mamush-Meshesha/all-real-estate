import { Navigate, Outlet, useLocation } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const isAuthenticated = () => {
  return false;
};

export const PublicRoutes = () => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export const ProtectedRoutes = () => {
  const location = useLocation();

  return isAuthenticated() ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
