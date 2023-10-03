import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import createdRoutes from "./routes/routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={createdRoutes}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>
);
