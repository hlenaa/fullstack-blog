import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const location = useLocation();

  return loggedIn ? element : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoute;
