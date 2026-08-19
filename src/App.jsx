import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Otp from "./Pages/Otp";
import Forgotpassword from "./Pages/Forgotpassword";
import Resetpassword from "./Pages/Resetpassword";
import Dashboard from "./Pages/Dashboard";
import Emailsms from "./Pages/Emailsms";
import ProtectedRoute from "./Helper/ProtectedRoute";
import BookConsultation from "./Pages/BookConsultation";
import Destination from "./Pages/Destination";
import CompanyInfo from "./Pages/CompanyInfo";
import Blog from "./Pages/Blog";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/otp" element={<Otp/>} />
            <Route path="/emailsms" element={<Emailsms/>} />
            <Route path="/forgot-password" element={<Forgotpassword/>} />
            <Route path="/reset-password/:token" element={<Resetpassword/>} />
          </Route>

          <Route path="/" element={<MainLayout/>}>
            <Route element={<ProtectedRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
            <Route index element={<Home/>} />
            <Route path="/about-me" element={<About />} />
            <Route path="/book" element={<BookConsultation />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/company-info" element={<CompanyInfo />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
