import React from "react";
import "../SidebarComponent/SidebarComponent.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import {
  LayoutDashboard,
  CalendarDays,
  Heart,
  Settings,
  LogOut,
  MonitorOff,
} from "lucide-react";

import logopic from "../../assets/logo.png";
import { logout, logoutAll } from "../../Api/Authapi";

function SidebarComponent({ collapsed }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogoutSuccess = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    navigate("/login", { replace: true });
  };

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: handleLogoutSuccess,
  });

  const logoutAllMutation = useMutation({
    mutationFn: logoutAll,
    onSuccess: handleLogoutSuccess,
  });

  const isLoggingOut =
    logoutMutation.isPending || logoutAllMutation.isPending;

  const logoutFailed =
    logoutMutation.isError || logoutAllMutation.isError;

  const handleLogout = (allDevices = false) => {
    if (isLoggingOut) return;

    logoutMutation.reset();
    logoutAllMutation.reset();

    if (allDevices) {
      logoutAllMutation.mutate();
    } else {
      logoutMutation.mutate();
    }
  };

  const isActive = (path) => (pathname === path ? "active" : "");

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div>
        <h2 className="logo">
          <img src={logopic} alt="Logo" />
        </h2>

        <p className="section-title">MAIN</p>

        <button
          type="button"
          className={`menu-item ${isActive("/dashboard")}`}
          onClick={() => navigate("/dashboard")}
          title="Dashboard"
          aria-label="Dashboard"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>

        <p className="section-title">MY BOOKING</p>

        <button
          type="button"
          className={`menu-item ${isActive("/bookings")}`}
          onClick={() => navigate("/bookings")}
          title="My Booking"
          aria-label="My Booking"
        >
          <CalendarDays size={20} />
          <span>My Booking</span>
        </button>

        <button
          type="button"
          className={`menu-item ${isActive("/wishlist")}`}
          onClick={() => navigate("/wishlist")}
          title="Wishlist"
          aria-label="Wishlist"
        >
          <Heart size={20} />
          <span>Wishlist</span>
        </button>

        <p className="section-title">SETTINGS</p>

        <button
          type="button"
          className={`menu-item ${isActive("/settings")}`}
          onClick={() => navigate("/settings")}
          title="Settings"
          aria-label="Settings"
        >
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>

      <div className="sidebar-logout">
        <button
          type="button"
          className="menu-item logout"
          onClick={() => handleLogout()}
          disabled={isLoggingOut}
          title="Logout"
          aria-label="Logout"
        >
          <LogOut size={20} />
          <span>
            {logoutMutation.isPending ? "Logging out..." : "Logout"}
          </span>
        </button>

        <button
          type="button"
          className="menu-item logout"
          onClick={() => handleLogout(true)}
          disabled={isLoggingOut}
          title="Logout All Devices"
          aria-label="Logout All Devices"
        >
          <MonitorOff size={20} />
          <span>
            {logoutAllMutation.isPending
              ? "Logging out..."
              : "Logout All Devices"}
          </span>
        </button>

        {logoutFailed && (
          <p className="logout-error" role="alert">
            {collapsed ? "Retry logout" : "Logout failed. Please try again."}
          </p>
        )}
      </div>
    </aside>
  );
}

export default SidebarComponent;