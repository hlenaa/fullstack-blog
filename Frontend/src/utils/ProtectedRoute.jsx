import { Navigate } from "react-router-dom";
import React from 'react';

const ProtectedRoute = ({ element }) => {
  const loggedIn = localStorage.getItem("loggedIn"); 

  if (!loggedIn) {
    return <Navigate to="/login" />; 
  }

  return element; 
};

export default ProtectedRoute;
