import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import harryPotterLogo from "../assets/hogwarts.png";
import { useTheme } from "../Context/ThemeContext"; 
import "../Nav.css";

const NavBar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");
  const { darkMode, setDarkMode } = useTheme();  
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
   
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className={`nav ${darkMode ? "dark" : ""}`}> 
      <Link to="/home" className="logo-container">
       Home
      </Link>
     
        
        

      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="nav-controls">
        <button
          onClick={() => setDarkMode(!darkMode)}  
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {darkMode ? "🌞" : "🌙"}  
        </button>

        <Link 
          to={`/post/create`} 
          className="btn bg-white text-navy-800 border-none btn-primary"
        >
          Create Post
        </Link>

        <div className="button-container">
          {loggedIn ? (
            <button className="btn" onClick={handleLogout}>
              Log Out
            </button>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="btn">
                Log In
              </Link>
             
            </div>
          )}
        </div>
      </div>
     
    </nav>
  );
};

export default NavBar;
