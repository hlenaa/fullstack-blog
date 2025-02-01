import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [entries, setEntries] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
    },
    {
      path: "/home",
      element: <ProtectedRoute element={<Home />} />,
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
      path: "/post/:id",
      element: <PostDetails />,
    },
    {
      path: "/post/create",
      element: <CreatePost setEntries={setEntries} />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <NavBar />
      </RouterProvider>
    </>
  );
}

export default App;
