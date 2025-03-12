/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayouts from "../layouts/AdminLayouts";
import Dashboard from "../pages/Admin/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <AdminLayouts />,
    children: [
      { path: "", element: <Dashboard /> },


    ],
  },
]);

export default router;
