
import React, { useState } from "react";
import {
  UserRound,
  User,
  LockKeyhole,
  CircleHelp,
  ChevronRight,
  Camera,
  Mail,
  Phone,
  CalendarDays,
  MapPin,
  ShieldCheck,
  CheckCircle,
  Eye,
  EyeOff,
  Save,
  X,
  Headphones,
  MessageCircle,
  FileText,
  CreditCard,
  Plane,
  ArrowUpRight,
  Edit3,
  KeyRound,
  LifeBuoy,
} from "lucide-react";

import "../SettingsComponent/SettingsComponent.css";

function SettingsComponent() {
  const [activeTab, setActiveTab] = useState("account");

  const [profile, setProfile] = useState({
    firstName: "Ashis",
    lastName: "Mondal",
    email: "ashis@example.com",
    phone: "+91 98765 43210",
    dob: "2002-05-15",
    gender: "Male",
    address: "Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    pincode: "700001",
  });

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });

  const [editing, setEditing] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  const menuItems = [
    {
      id: "account",
      title: "Account Settings",
      description: "Overview of your account",
      icon: UserRound,
    },
    {
      id: "personal",
      title: "Personal Information",
      description: "Manage your personal details",
      icon: User,
    },
    {
      id: "password",
      title: "Change Password",
      description: "Update your account password",
      icon: LockKeyhole,
    },
    {
      id: "support",
      title: "Help & Support",
      description: "Get help with your account",
      icon: CircleHelp,
    },
  ];

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setEditing(false);

    // Connect your backend API here to persist profile changes.
    alert("Personal information updated successfully!");
  };

  const updatePassword = (e) => {
    e.preventDefault();
    setPasswordMessage("");

    if (!password.current || !password.newPassword || !password.confirm) {
      setPasswordMessage("Please fill in all password fields.");
      return;
    }

    if (password.newPassword.length < 8) {
      setPasswordMessage("New password must contain at least 8 characters.");
      return;
    }

    if (password.newPassword !== password.confirm) {
      setPasswordMessage("New password and confirm password do not match.");
      return;
    }

    if (password.current === password.newPassword) {
      setPasswordMessage("New password must be different from current password.");
      return;
    }

    // Connect your password update API here.
    setPasswordMessage("Password validation successful. Connect your backend to update it.");

    setPassword({
      current: "",
      newPassword: "",
      confirm: "",
    });
  };

  const getInitials = () => {
    return `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase();
  };

  const renderAccountSettings = () => (
    <div className="settings-content">
      <div className="settings-page-heading">
        <div>
          <h2>Account Settings</h2>
          <p>Manage your TravelGo account and personal details.</p>
        </div>
      </div>

      <div className="settings-profile-card">
        <div className="settings-profile-left">
          <div className="settings-avatar">
            {getInitials()}
          </div>

          <div className="settings-profile-details">
            <h3>{profile.firstName} {profile.lastName}</h3>
            <p>{profile.email}</p>

            <span className="settings-active-status">
              <CheckCircle size={14} />
              Active Account
            </span>
          </div>
        </div>

        <button
          className="settings-edit-btn"
          onClick={() => setActiveTab("personal")}
        >
          <Edit3 size={15} />
          Edit Profile
        </button>
      </div>

      <div className="settings-section-title">
        <h3>Account Overview</h3>
        <p>Quick access to your account settings.</p>
      </div>

      <div className="settings-overview-grid">
        <div
          className="settings-overview-card"
          onClick={() => setActiveTab("personal")}
        >
          <div className="settings-overview-icon blue">
            <User size={21} />
          </div>

          <div>
            <h4>Personal Information</h4>
            <p>Update your name, email and contact details.</p>
          </div>

          <ChevronRight size={19} />
        </div>

        <div
          className="settings-overview-card"
          onClick={() => setActiveTab("password")}
        >
          <div className="settings-overview-icon purple">
            <KeyRound size={21} />
          </div>

          <div>
            <h4>Change Password</h4>
            <p>Keep your account protected with a strong password.</p>
          </div>

          <ChevronRight size={19} />
        </div>

        <div
          className="settings-overview-card"
          onClick={() => setActiveTab("support")}
        >
          <div className="settings-overview-icon orange">
            <Headphones size={21} />
          </div>

          <div>
            <h4>Help & Support</h4>
            <p>Find answers and get assistance.</p>
          </div>

          <ChevronRight size={19} />
        </div>

        <div className="settings-overview-card">
          <div className="settings-overview-icon green">
            <ShieldCheck size={21} />
          </div>

          <div>
            <h4>Account Status</h4>
            <p>Your TravelGo account is active and ready to use.</p>
          </div>

          <CheckCircle size={19} className="settings-card-check" />
        </div>
      </div>

      <div className="settings-info-box">
        <div className="settings-info-icon">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h4>Your account matters to us!</h4>
          <p>
            Keep your personal information updated and use a strong
            password to enjoy a smooth and secure travel experience.
          </p>
        </div>
      </div>
    </div>
  );

  const renderPersonalInformation = () => (
    <div className="settings-content">
      <div className="settings-page-heading">
        <div>
          <h2>Personal Information</h2>
          <p>View and manage your personal information.</p>
        </div>

        {!editing && (
          <button
            className="settings-edit-btn"
            onClick={() => setEditing(true)}
          >
            <Edit3 size={15} />
            Edit Details
          </button>
        )}
      </div>

      <form onSubmit={saveProfile}>
        <div className="settings-form-card">
          <div className="settings-form-heading">
            <div className="settings-form-heading-icon">
              <UserRound size={20} />
            </div>

            <div>
              <h3>Basic Information</h3>
              <p>Your basic personal details.</p>
            </div>
          </div>

          <div className="settings-photo-section">
            <div className="settings-avatar settings-avatar-large">
              {getInitials()}
            </div>

            <div>
              <h4>Profile Picture</h4>
              <p>Update your profile details.</p>
              <span className="settings-photo-note">
                Image upload can be connected separately.
              </span>
            </div>
          </div>

          <div className="settings-input-grid">
            <div className="settings-input-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleProfileChange}
                disabled={!editing}
                required
              />
            </div>

            <div className="settings-input-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleProfileChange}
                disabled={!editing}
                required
              />
            </div>

            <div className="settings-input-group">
              <label>Email Address</label>
              <div className="settings-input-with-icon">
                <Mail size={17} />
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  disabled={!editing}
                  required
                />
              </div>
            </div>

            <div className="settings-input-group">
              <label>Phone Number</label>
              <div className="settings-input-with-icon">
                <Phone size={17} />
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  disabled={!editing}
                  required
                />
              </div>
            </div>

            <div className="settings-input-group">
              <label>Date of Birth</label>
              <div className="settings-input-with-icon">
                <CalendarDays size={17} />
                <input
                  type="date"
                  name="dob"
                  value={profile.dob}
                  onChange={handleProfileChange}
                  disabled={!editing}
                />
              </div>
            </div>

            <div className="settings-input-group">
              <label>Gender</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleProfileChange}
                disabled={!editing}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        <div className="settings-form-card">
          <div className="settings-form-heading">
            <div className="settings-form-heading-icon">
              <MapPin size={20} />
            </div>

            <div>
              <h3>Address Information</h3>
              <p>Your current residential address.</p>
            </div>
          </div>

          <div className="settings-input-grid">
            <div className="settings-input-group full-width">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleProfileChange}
                disabled={!editing}
              />
            </div>

            <div className="settings-input-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={profile.city}
                onChange={handleProfileChange}
                disabled={!editing}
              />
            </div>

            <div className="settings-input-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={profile.state}
                onChange={handleProfileChange}
                disabled={!editing}
              />
            </div>

            <div className="settings-input-group">
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={profile.country}
                onChange={handleProfileChange}
                disabled={!editing}
              />
            </div>

            <div className="settings-input-group">
              <label>PIN Code</label>
              <input
                type="text"
                name="pincode"
                value={profile.pincode}
                onChange={handleProfileChange}
                disabled={!editing}
              />
            </div>
          </div>
        </div>

        {editing && (
          <div className="settings-form-actions">
            <button
              type="button"
              className="settings-cancel-btn"
              onClick={() => setEditing(false)}
            >
              <X size={16} />
              Cancel
            </button>

            <button type="submit" className="settings-save-btn">
              <Save size={16} />
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );

  const renderChangePassword = () => (
    <div className="settings-content">
      <div className="settings-page-heading">
        <div>
          <h2>Change Password</h2>
          <p>Update your password to keep your account secure.</p>
        </div>
      </div>

      <div className="settings-form-card settings-password-card">
        <div className="settings-form-heading">
          <div className="settings-form-heading-icon">
            <LockKeyhole size={20} />
          </div>

          <div>
            <h3>Password Management</h3>
            <p>Enter your current password and choose a new one.</p>
          </div>
        </div>

        <form onSubmit={updatePassword}>
          {[
            {
              name: "current",
              label: "Current Password",
              placeholder: "Enter current password",
            },
            {
              name: "newPassword",
              label: "New Password",
              placeholder: "Enter new password",
            },
            {
              name: "confirm",
              label: "Confirm New Password",
              placeholder: "Re-enter new password",
            },
          ].map((field) => (
            <div className="settings-input-group settings-password-input" key={field.name}>
              <label>{field.label}</label>

              <div className="settings-password-wrapper">
                <input
                  type={showPassword[field.name] ? "text" : "password"}
                  name={field.name}
                  value={password[field.name]}
                  onChange={handlePasswordChange}
                  placeholder={field.placeholder}
                  required
                />

                <button
                  type="button"
                  className="settings-password-toggle"
                  onClick={() => togglePassword(field.name)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword[field.name] ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>
          ))}

          <div className="settings-password-tips">
            <ShieldCheck size={19} />
            <div>
              <h4>Password Requirements</h4>
              <p>Use at least 8 characters for your new password.</p>
              <p>Avoid reusing your current password.</p>
            </div>
          </div>

          {passwordMessage && (
            <div className="settings-password-message" role="status">
              {passwordMessage}
            </div>
          )}

          <div className="settings-form-actions">
            <button
              type="button"
              className="settings-cancel-btn"
              onClick={() => {
                setPassword({ current: "", newPassword: "", confirm: "" });
                setPasswordMessage("");
              }}
            >
              <X size={16} />
              Clear
            </button>

            <button type="submit" className="settings-save-btn">
              <LockKeyhole size={16} />
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const renderHelpSupport = () => (
    <div className="settings-content">
      <div className="settings-page-heading">
        <div>
          <h2>Help & Support</h2>
          <p>We're here to help you with your TravelGo experience.</p>
        </div>
      </div>

      <div className="settings-support-banner">
        <div className="settings-support-banner-content">
          <span>TRAVELGO SUPPORT</span>
          <h2>How can we help you today?</h2>
          <p>
            Have questions about bookings, payments or your account?
            Our support team is here to assist you.
          </p>
        </div>

        <div className="settings-support-banner-icon">
          <Headphones size={65} />
        </div>
      </div>

      <div className="settings-section-title">
        <h3>Contact Support</h3>
        <p>Choose how you would like to reach us.</p>
      </div>

      <div className="settings-support-grid">
        <a
          href="mailto:support@travelgo.com"
          className="settings-support-card"
        >
          <div className="settings-support-icon blue">
            <Mail size={23} />
          </div>

          <h4>Email Support</h4>
          <p>Send us an email for assistance.</p>
          <span>
            support@travelgo.com
            <ArrowUpRight size={15} />
          </span>
        </a>

        <a
          href="tel:+911800123456"
          className="settings-support-card"
        >
          <div className="settings-support-icon green">
            <Phone size={23} />
          </div>

          <h4>Call Support</h4>
          <p>Talk directly with our support team.</p>
          <span>
            +91 1800 123 456
            <ArrowUpRight size={15} />
          </span>
        </a>

        <a
          href="mailto:support@travelgo.com?subject=TravelGo%20Support"
          className="settings-support-card"
        >
          <div className="settings-support-icon purple">
            <MessageCircle size={23} />
          </div>

          <h4>Send a Query</h4>
          <p>Share your issue with our support team.</p>
          <span>
            Contact Us
            <ArrowUpRight size={15} />
          </span>
        </a>
      </div>

      <div className="settings-section-title">
        <h3>Frequently Asked Questions</h3>
        <p>Quick answers to common travel-related questions.</p>
      </div>

      <div className="settings-faq-list">
        <details className="settings-faq-item">
          <summary>
            <span>
              <Plane size={18} />
              How can I manage my bookings?
            </span>
            <ChevronRight size={18} />
          </summary>
          <p>
            Visit the My Bookings section of your dashboard to view
            upcoming trips, booking details and booking status.
          </p>
        </details>

        <details className="settings-faq-item">
          <summary>
            <span>
              <CreditCard size={18} />
              How can I get a refund?
            </span>
            <ChevronRight size={18} />
          </summary>
          <p>
            Check your booking cancellation and refund status from
            the My Bookings section. Contact support if you need
            further assistance.
          </p>
        </details>

        <details className="settings-faq-item">
          <summary>
            <span>
              <FileText size={18} />
              How can I cancel a booking?
            </span>
            <ChevronRight size={18} />
          </summary>
          <p>
            Open My Bookings, select the booking you want to cancel
            and follow the cancellation instructions.
          </p>
        </details>

        <details className="settings-faq-item">
          <summary>
            <span>
              <UserRound size={18} />
              How can I update my account information?
            </span>
            <ChevronRight size={18} />
          </summary>
          <p>
            Go to Settings, select Personal Information and click
            Edit Details to update your profile.
          </p>
        </details>
      </div>

      <div className="settings-support-footer">
        <LifeBuoy size={22} />

        <div>
          <h4>Still need help?</h4>
          <p>Our support team is ready to assist you.</p>
        </div>

        <a href="mailto:support@travelgo.com">
          Contact Support
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );

  return (
    <div className="settings-main-container">

      <div className="settings-main-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your account settings and preferences.</p>
        </div>

        <div className="settings-header-icon">
          <UserRound size={22} />
        </div>
      </div>

      <div className="settings-layout">

        {/* Settings Sidebar */}

        <aside className="settings-sidebar">
          <div className="settings-sidebar-heading">
            <h3>General Settings</h3>
            <p>Manage your account</p>
          </div>

          <div className="settings-menu">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  className={`settings-menu-item ${
                    activeTab === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <div className="settings-menu-icon">
                    <Icon size={19} />
                  </div>

                  <div className="settings-menu-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>

                  <ChevronRight
                    size={17}
                    className="settings-menu-arrow"
                  />
                </button>
              );
            })}
          </div>

          <div className="settings-sidebar-help">
            <div className="settings-sidebar-help-icon">
              <Headphones size={21} />
            </div>

            <h4>Need Assistance?</h4>
            <p>Our support team is always ready to help you.</p>

            <button onClick={() => setActiveTab("support")}>
              Get Help
              <ArrowUpRight size={15} />
            </button>
          </div>
        </aside>

        {/* Main Settings Content */}

        <main className="settings-main-content">
          {activeTab === "account" && renderAccountSettings()}
          {activeTab === "personal" && renderPersonalInformation()}
          {activeTab === "password" && renderChangePassword()}
          {activeTab === "support" && renderHelpSupport()}
        </main>

      </div>
    </div>
  );
}

export default SettingsComponent;
