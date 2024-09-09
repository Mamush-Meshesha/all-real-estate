import { createBrowserRouter } from "react-router-dom";
import Cookie from "js-cookie";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./pages/home";
import Detail from "./pages/detail";
import ProUPload from "./pages/proUpload";
import ProtectedRoute from "./ProtectedRoutes";
import Cookies from 'js-cookie';
const getAccessToken = () => {
  return Cookie.get("token");
  
};
const token = Cookies.get("token"); // 'token' is the cookie name

if (token) {
  console.log("Token found:", token);
  // Use the token in your app, e.g., in API requests or state management
} else {
  console.log("Token not found");
}

const isAuthenticated = () => {
  return !!getAccessToken();
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/upload",
        element: <ProUPload />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
