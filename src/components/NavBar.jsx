import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import harryPotterLogo from "../assets/harry-potter.svg";
import EntryModal from "./EntryModal";
import "../Nav.css";

const NavBar = ({ setEntries }) => {
  const [modalOpen, setModalOpen] = useState(false);
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

      {/* Button container for Add Entry and Log Out */}
      <div className="button-container">
        {loggedIn && (
          <button className="btn" onClick={handleLogout}>
            Log Out
          </button>
        )}

        <button className="btn" onClick={() => setModalOpen(true)}>
          Add Entry
        </button>
        
        {/* Authentication links */}
        {!loggedIn && (
          <div className="auth-links">
            <Link to="/login" className="btn">Log In</Link>
            <Link to="/signup" className="btn">Sign Up</Link>
          </div>
        )}
      </div>

      {/* Modal for adding entry */}
      {modalOpen && (
        <EntryModal
          setEntries={setEntries}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </nav>
  );
};

export default NavBar;
