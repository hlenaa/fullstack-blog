import { useState } from "react";
import React from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./utils/ProtectedRoute";
import { ThemeProvider, useTheme } from "./Context/ThemeContext"; 
import "./App.css"
import "./Nav.css"

const Layout = () => {
  const { darkMode } = useTheme(); 
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  return (
    <div className={darkMode ? "dark" : ""}> 
      <NavBar setEntries={setEntries} />
      <Outlet context={{ entries, setEntries }} />
    </div>
  );
};

function App() {
  const [entries, setEntries] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      element: <Layout />, 
      children: [
        {
          path: "/home",
          element: <ProtectedRoute element={<Home />} />,
        },
        {
          path: "/post/:id",
          element: <PostDetails />,
        },
        {
          path: "/post/create",
          element: <CreatePost setEntries={setEntries} />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider> 
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
