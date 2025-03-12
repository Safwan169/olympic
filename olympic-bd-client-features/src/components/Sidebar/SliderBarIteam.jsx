import clsx from "clsx";
import { Link } from "react-router-dom";
import React from "react";
const SidebarItem = ({ to, icon, text, isOpen }) => (
    <li>
      <Link
        to={to}
        className="flex items-center p-3 hover:bg-gray-800 transition-all duration-200 rounded-md"
      >
        {icon}
        <span className={clsx("ml-4", !isOpen && "hidden")}>{text}</span>
      </Link>
    </li>
  );
  export default SidebarItem;