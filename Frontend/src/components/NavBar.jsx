import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import "../Styles/Nav.css";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import voldemort from "../assets/dark.png";
import harry from "../assets/light.png";

const NavBar = () => {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("loggedIn");
  const { darkMode, setDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
   
      <nav className={`nav ${darkMode ? "dark" : ""}`}>
        <div className="nav-left">
          <Link to="/home" className="home logo-container">Home</Link>
          <Link to={`/post/create`} className="home">Create Post</Link>
          <Link to="/sorting-hat">Sorting Hat Quiz</Link>
        </div>

        <div className="nav-center">
          <div className="logo">
            <img src="/snich.png" alt="Golden Snitch" className="logo-icon" />
          </div>
        </div>

        <div className="nav-right">
          <form onSubmit={handleSearch} className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>

          <div className="button-container">
            {loggedIn ? (
              <button className="btn-out" onClick={handleLogout}>Log Out</button>
            ) : (
              <div className="auth-links">
                <Link to="/login" className="btn">Log In</Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
            aria-label="Toggle theme"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <img src={darkMode ? moon : sun} alt="Theme Icon" className="theme-icon" />
          </button>
        </div>
      </nav>

     
      <nav className="sub-nav">
        <div className="sub-nav-links">
          <Link to="/characters">All Characters</Link>
          <Link to="/students">Hogwarts Students</Link>
          <Link to="/staff">Hogwarts Staff</Link>
          <Link to="/houses">Characters by House</Link>
          <Link to="/spells">All Spells</Link>
        </div>
      </nav>

      <div className={`tooltip-container ${showTooltip ? "visible" : ""}`}>
        <img src={darkMode ? harry : voldemort} alt={darkMode ? "Harry Potter" : "Voldemort"} className="tooltip-image" />
        <span className="tooltip-text">{darkMode ? "Step Into the Light" : "Come to the Dark site"}</span>
      </div>
    </>
  );
};

export default NavBar;
