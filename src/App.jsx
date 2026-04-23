import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
