import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./pages/home";
import Detail from "./pages/detail";
import { ProtectedRoutes, PublicRoutes } from "./routeGuard";
import StripePayment from "./pages/stripePayment";

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap everything inside Router */}
      <Routes>
        {/* Protected routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:_id" element={<Detail />} />
          <Route path="/stripe" element={<StripePayment />} />
        </Route>

        {/* Public routes */}
        <Route element={<PublicRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
