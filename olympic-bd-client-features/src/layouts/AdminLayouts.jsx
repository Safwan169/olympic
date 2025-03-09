import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/adminNavbar/AdminNavbar";

const AdminLayouts = () => {
  return (
    <div className="flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
    <AdminNavbar/>
    <main className="p-6">
        <Outlet />
      </main>
    </div>
  </div>
  );
};

export default AdminLayouts;
