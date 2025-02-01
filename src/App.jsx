import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import NavBar from "./components/NavBar";

//import Post from "./pages/Post";

function App() {
  const [entries, setEntries] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
