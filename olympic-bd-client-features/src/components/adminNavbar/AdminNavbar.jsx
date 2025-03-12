import React from "react";
import { User } from "lucide-react"; // Icons

const AdminNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Left Section: Brand Name (Hidden on Mobile) */}
        <h2 className="text-xl font-bold hidden md:block">Admin Dashboard</h2>

        {/* Right Section: Search Bar & Profile Icon */}
        <div className="flex items-center gap-3">
          {/* Search Bar (Smaller on Desktop, Full Width on Mobile) */}
          <div className="w-full max-w-xs md:w-60">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-gray-500"
            />
          </div>

          {/* User Profile Icon */}
          <User size={24} className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
