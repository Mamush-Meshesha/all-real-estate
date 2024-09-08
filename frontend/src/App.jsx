import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
import ProUPload from "./pages/proUpload";
import { BrowserRouter as Router,Routes,Route, useLocation } from "react-router-dom";

function App() {


  const Layout = () => {
  const location = useLocation();
    const hideHeader = ["/login", "/register"]
    const showHeader = !hideHeader.includes(location.pathname)
     return (
       <>
         {showHeader && <Header />}
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/:id" element={<Detail />} />
           <Route path="/upload" element={<ProUPload />} />
         </Routes>
       </>
     );
  }
  return (
    <>
      <Router>
      <Layout />
      </Router>
    </>
 )
}

export default App
