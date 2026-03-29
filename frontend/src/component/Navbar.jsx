import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  // 1. LocalStorage se user info fetch karo (Ye humne Login handle me save kiya tha)
  const userEmail = localStorage.getItem("userEmail");

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("userEmail"); // Clear data on logout
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div
        className="logo-container"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
        <div className="logo-icon-wrapper">
          <div className="logo-icon-inner-top"></div>
          <div className="logo-icon-inner-center"></div>
        </div>
        <span className="logo-text">Calendly</span>
      </div>

      {/* Middle Section: Navigation Links */}
      <div className="nav-links">
        <div className="nav-item">
          Product{" "}
          <svg
            className="nav-caret"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div className="nav-item">
          Solutions{" "}
          <svg
            className="nav-caret"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div className="nav-item">
          Resources{" "}
          <svg
            className="nav-caret"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div className="nav-item">Pricing</div>
      </div>

      {/* Right Section: Action Buttons OR User Info */}
      <div className="action-buttons">
        {userEmail ? (
          /* Agar user logged in hai toh ye dikhao */
          <div className="user-profile-section">
            <span className="user-name-display">
              {userEmail === "vishaladmin@gmail.com"
                ? "Vishal Admin"
                : "Vishal User"}
            </span>
            <button className="logout-mini-btn" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        ) : (
          /* Agar user logged in nahi hai toh buttons dikhao */
          <>
            <button className="login-btn" onClick={loginHandler}>
              Log In
            </button>
            <button className="get-started-btn">Get started</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
