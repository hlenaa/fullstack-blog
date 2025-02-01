import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import harryPotterLogo from "../assets/harry-potter.svg";
import "../Nav.css";

const NavBar = () => {
  const navigate = useNavigate();

  const loggedIn = localStorage.getItem("loggedIn");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo-container">
        <img src={harryPotterLogo} alt="Harry Potter Logo" className="logo" />
      </Link>

      <div className="button-container">
        {loggedIn && (
          <button className="btn" onClick={handleLogout}>
            Log Out
          </button>
        )}

        {!loggedIn && (
          <div className="auth-links">
            <Link to="/login" className="btn">
              Log In
            </Link>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <Link
        to={`/post/create`}
        className="btn bg-white text-navy-800 border-none btn-primary"
      >
        Create Post
      </Link>
    </nav>
  );
};

export default NavBar;
