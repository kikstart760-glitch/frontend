import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import AuthLayout from "./Layout/AuthLayout";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Otp from "./Pages/Otp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AuthLayout/>}>
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/otp" element={<Otp/>} />
          </Route>

          <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
