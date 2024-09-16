import { Navigate, Outlet, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// eslint-disable-next-line react-refresh/only-export-components
export const isAuthenticated = () => {
  const token = document.cookie.split("; ").find(row => row.startsWith("token="))?.split("=")[1]
  
  if (!token) {
    return false
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000
    if (decodedToken.exp < currentTime) {
      return false; // Token expired
    }
    return true; 
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    return false
  }
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