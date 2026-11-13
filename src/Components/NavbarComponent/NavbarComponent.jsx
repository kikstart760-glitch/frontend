
import React, { useState, useEffect, useRef } from "react";
import "../NavbarComponent/NavbarComponent.css";

import {
  FaBell,
  FaSearch,
  FaBars,
  FaEnvelope,
  FaCrown,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
  FaChevronRight,
  FaChevronDown
} from "react-icons/fa";

function NavbarComponent({ toggleSidebar, collapsed }) {

  const [showProfile, setShowProfile] = useState(false);
  const profileRef = useRef(null);

  // Close profile popup when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (
    <div className={`navbar ${collapsed ? "collapsed-navbar" : ""}`}>

      {/* LEFT SECTION */}
      <div className="nav-left">

        <FaBars
          className="menu-icon"
          onClick={toggleSidebar}
        />

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search anything..."
          />

        </div>

      </div>

      {/* RIGHT SECTION */}
      <div className="nav-right">

        {/* NOTIFICATION */}
        <div className="icon">
          <FaBell />
        </div>

        {/* MESSAGES */}
        <div className="icon">
          <FaEnvelope />
          <span className="badge">3</span>
        </div>

        {/* PROFILE SECTION */}
        <div className="profile-wrapper" ref={profileRef}>

          <div
            className={`profile ${showProfile ? "active" : ""}`}
            onClick={() => setShowProfile(!showProfile)}
          >

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
            />

            <div className="profile-info">

              <p className="name">John Admin</p>

              <span className="role">Super Admin</span>

            </div>

            {/* DROPDOWN ARROW */}
            <FaChevronDown className="profile-arrow" />

          </div>

          {/* PROFILE MODAL */}
          {showProfile && (

            <div className="profile-modal">

              {/* PROFILE HEADER */}
              <div className="modal-profile-header">

                <img
                  src="https://i.pravatar.cc/100"
                  alt="Sarah Johnson"
                />

                <div className="modal-user-info">

                  <h3>Sarah Johnson</h3>

                  <p>sarah.johnson@example.com</p>

                  <span className="premium-badge">
                    <FaCrown />
                    Premium Traveler
                  </span>

                </div>

              </div>

              {/* USER DETAILS */}
              <div className="modal-details">

                <div className="detail-item">
                  <FaMapMarkerAlt />
                  <span>New York, USA</span>
                </div>

                <div className="detail-item">
                  <FaCalendarAlt />
                  <span>Member since May 2024</span>
                </div>

              </div>

              {/* VIEW PROFILE BUTTON */}
              <button
                className="view-profile-btn"
                onClick={() => {
                  setShowProfile(false);
                  // Add profile page navigation here
                }}
              >

                <FaUser />

                <span>View Profile</span>

                <FaChevronRight className="view-arrow" />

              </button>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default NavbarComponent;
