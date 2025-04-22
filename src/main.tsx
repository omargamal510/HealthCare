import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./index.css";
import { StrictMode } from "react";
import { PopupProvider } from "./store/PopupContext.js";
import Loading from "./components/Loading/Loading.js";

// Lazy load pages
const App = lazy(() => import("./App.jsx"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Doctors = lazy(() => import("./pages/Doctors.js"));
const Appointments = lazy(() => import("./pages/Appointments.js"));

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App as the root layout
    children: [
      {
        index: true, // Default route for "/"
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "doctors",
        element: (
          <Suspense fallback={<Loading />}>
            <Doctors />
          </Suspense>
        ),
      },
      {
        path: "appointments",
        element: (
          <Suspense fallback={<Loading />}>
            <Appointments />
          </Suspense>
        ),
      },
      {
        path: "*", // Catch-all for 404
        element: (
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PopupProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </PopupProvider>
  </StrictMode>
);
