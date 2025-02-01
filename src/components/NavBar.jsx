import { useState } from "react";
import { Link } from "react-router-dom";
import harryPotterLogo from "../assets/harry-potter.svg";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <Link to="/" className="flex items-center space-x-2">
        <img src={harryPotterLogo} alt="Harry Potter Logo" className="h-16" />
      </Link>

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
