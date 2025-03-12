import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Settings, LogOut } from "lucide-react"; // Icons
import clsx from "clsx"; 
import SidebarItem from "./SliderBarIteam";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={clsx(
          "bg-gray-900 text-white h-screen transition-all duration-300 flex flex-col",
          isOpen ? "w-64" : "w-16"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex justify-between items-center">
          <h2 className={clsx("text-xl font-bold", !isOpen && "hidden")}>Dashboard</h2>
          <button
            className="cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <SidebarItem to="/" icon={<Home size={20} />} text="Home" isOpen={isOpen} />
            <SidebarItem to="/profile" icon={<User size={20} />} text="Profile" isOpen={isOpen} />
            <SidebarItem to="/settings" icon={<Settings size={20} />} text="Settings" isOpen={isOpen} />
          </ul>
        </nav>

        {/* Logout */}
        <div className="">
          <SidebarItem to="/logout" icon={<LogOut size={20} />} text="Logout" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};



export default Sidebar;
