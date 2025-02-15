import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { ThemeProvider, useTheme } from "./Context/ThemeContext";
import React, { useState } from "react";
import SortingHatPage from "./pages/SortingHatPage";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./utils/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import Characters from "./subLinks/Characters";
import Students from "./subLinks/Students";
import Staff from "./subLinks/Staff";
import Houses from "./subLinks/Houses";
import Spells from "./subLinks/Spells";
import "./Styles/App.css";
import "./Styles/Nav.css";

const Layout = () => {
  const { darkMode } = useTheme();
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
  );

  return (
    <div className={darkMode ? "dark" : ""}>
      <NavBar />
      <Outlet context={{ entries, setEntries }} />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />, 
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
          element: <ProtectedRoute element={<PostDetails />} />,
        },
        {
          path: "/post/create",
          element: <ProtectedRoute element={<CreatePost />} />,
        },
        {
          path: "/sorting-hat",
          element: <ProtectedRoute element={<SortingHatPage />} />,
        },
       
        {
          path: "/characters",
          element: <ProtectedRoute element={<Characters />} />,
        },
        {
          path: "/students",
          element: <ProtectedRoute element={<Students />} />,
        },
        {
          path: "/staff",
          element: <ProtectedRoute element={<Staff />} />,
        },
        {
          path: "/houses",
          element: <ProtectedRoute element={<Houses />} />,
        },
        {
          path: "/spells",
          element: <ProtectedRoute element={<Spells />} />,
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
