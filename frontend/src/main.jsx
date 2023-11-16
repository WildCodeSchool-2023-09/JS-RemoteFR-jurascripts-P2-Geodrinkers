import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Start from "./pages/Start";
import Home from "./pages/Home";
import SpaceMap from "./pages/SpaceMap";
import Memory from "./pages/Memory";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/map",
        element: <SpaceMap />,
      },
      {
        path: "/memory",
        element: <Memory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
