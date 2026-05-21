import React, { useEffect , useState }from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMutation } from '@tanstack/react-query';
import { FaUserCircle } from "react-icons/fa";

import logo from '../../assets/logo.png';
import '../Header/Header.css';

import { logout, logoutAll } from '../../Api/Authapi';

function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>  window.removeEventListener("scroll", handleScroll); 
  }, []);

  console.log (isScrolled);

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  });

  const logoutAllMutation = useMutation({
    mutationFn: logoutAll,
    onSuccess: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
  });

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`custom-navbar ${isScrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>

        {/* LOGO */}
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="logo-img" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          {/* CENTER NAV */}
          <Nav className="mx-auto nav-center">
            <Nav.Link onClick={() => navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/company")}>Company Info</Nav.Link>
            <Nav.Link onClick={() => navigate("/about")}>About Me</Nav.Link>
            <Nav.Link onClick={() => navigate("/blog")}>Travel Blog</Nav.Link>
          </Nav>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-3">

            {!isLoggedIn ? (
              <>
                {/* SIGN UP */}
                <button
                  className="signup-btn"
                  onClick={() => navigate("/signup")}
                >
                  Sign Up
                </button>

                {/* LOGIN */}
                <button
                  className="consult-btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </>
            ) : (
              <NavDropdown
                align="end"
                title={
                  <span className="d-flex align-items-center gap-2 text-white">
                    <FaUserCircle size={22} />
                    {user?.name}
                  </span>
                }
              >
                <NavDropdown.Item onClick={() => navigate("/profile")}>
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => logoutMutation.mutate()}>
                  Logout
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => logoutAllMutation.mutate()}>
                  Logout All Devices
                </NavDropdown.Item>
              </NavDropdown>
            )}

          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;