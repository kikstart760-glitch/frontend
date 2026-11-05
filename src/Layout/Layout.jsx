import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/NavbarComponent/NavbarComponent";
import Sidebar from "../Components/SidebarComponent/SidebarComponent";
import "../Layout/Layout.css";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <Sidebar collapsed={collapsed} />

      {/* Main Content */}
      <div className={`main ${collapsed ? "expanded" : ""}`}>

        <Navbar
          toggleSidebar={toggleSidebar}
          collapsed={collapsed}
        />

        {/* Nested Routes */}
        <div className="content-container">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;
