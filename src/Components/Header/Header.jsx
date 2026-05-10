import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useMutation } from '@tanstack/react-query';

import { FaUserCircle } from "react-icons/fa";

import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { logout, logoutAll } from '../../Api/Authapi';

function Header() {

  const navigate = useNavigate();

  // ✅ user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ login check
  const isLoggedIn = !!user;

  // ---------------- LOGOUT ----------------
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");

      navigate("/login");
    }
  });

  // ---------------- LOGOUT ALL ----------------
  const logoutAllMutation = useMutation({
    mutationFn: logoutAll,
    onSuccess: () => {

      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");

      navigate("/login");
    }
  });

  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>

        {/* LEFT SIDE */}
        <div className="d-flex align-items-center gap-3">

          <Navbar.Brand
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            MyApp
          </Navbar.Brand>

          {/* LOGIN / LOGOUT BUTTON */}
          {!isLoggedIn ? (
            <ButtonComponent
              text="Login"
              variant="signup"
              type="button"
              onClick={() => navigate("/login")}
            />
          ) : (
            <ButtonComponent
              text="Logout"
              variant="signup"
              type="button"
              loading={logoutMutation.isPending}
              onClick={() => logoutMutation.mutate()}
            />
          )}

        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          {/* CENTER NAV */}
          <Nav className="mx-auto">
            <Nav.Link onClick={() => navigate("/")}>
              Home
            </Nav.Link>

            <Nav.Link onClick={() => navigate("/about")}>
              About
            </Nav.Link>
          </Nav>

          {/* USER SECTION */}
          {isLoggedIn && (
            <Nav>

              <NavDropdown
                align="end"
                id="user-dropdown"
                title={
                  <span className="d-flex align-items-center gap-2">

                    {/* React Icon */}
                    <FaUserCircle size={24} />

                    {/* Username */}
                    <span>{user?.name}</span>

                  </span>
                }
              >

                <NavDropdown.Item
                  onClick={() => navigate("/profile")}
                >
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() => logoutMutation.mutate()}
                >
                  Logout
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() => logoutAllMutation.mutate()}
                >
                  Logout All Devices
                </NavDropdown.Item>

              </NavDropdown>

            </Nav>
          )}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;