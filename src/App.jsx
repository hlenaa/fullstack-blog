import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
//import Post from "./pages/Post";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/post/:id",
    //   element: <Post />,
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
