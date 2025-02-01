import { useState } from "react";
import { Link } from "react-router-dom";
import harryPotterLogo from "../assets/harry-potter.svg";
import EntryModal from "./EntryModal";

const NavBar = ({ setEntries }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img src={harryPotterLogo} alt="Harry Potter Logo" className="h-16" />
      </Link>

      <button className="btn" onClick={() => setModalOpen(true)}>
        Add entry
      </button>

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
