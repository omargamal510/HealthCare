import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";
import { StrictMode } from "react";
import Doctors from "./pages/Doctors.js";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App as the root layout
    children: [
      {
        index: true, // Default route for "/"
        element: <Home />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "*", // Catch-all for 404
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
