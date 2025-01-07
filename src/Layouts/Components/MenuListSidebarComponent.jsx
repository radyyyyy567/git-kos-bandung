import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const MenuListSidebarComponent = () => {
  const location = useLocation();

  return (
    <ul className="p-1 bg-gray-50 rounded-lg space-y-2">
      <li>
        <Link
          to={"/home"}
          className={`p-2 space-x-2 rounded-lg active:bg-indigo-700 active:text-white  active:scale-[0.98] transition duration-100 font-semibold cursor-pointer w-full flex justify-center items-center ${
            location.pathname === "/home" ? "bg-indigo-500 text-white" : "text-indigo-500 bg-slate-100"
          }`}
        >
          <FontAwesomeIcon icon={faHome} className="" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to={"/henhouse"}
          className={`p-2 space-x-2 rounded-lg active:bg-indigo-700 active:text-white  active:scale-[0.98] transition duration-100 font-semibold cursor-pointer w-full flex justify-center ${
            location.pathname === "/henhouse" ? "bg-indigo-500 text-white" : "text-indigo-500 bg-slate-100"
          }`}
        >
          <span>Hen House</span>
        </Link>
        
      </li>
      <li>
        <Link
          to={"/statistik"}
          className={`p-2 space-x-2 rounded-lg active:bg-indigo-700 active:text-white  active:scale-[0.98] transition duration-100 font-semibold cursor-pointer w-full flex justify-center ${
            location.pathname === "/statistik" ? "bg-indigo-500 text-white" : "text-indigo-500 bg-slate-100"
          }`}
        >
          <span>Statistik</span>
        </Link>
        
      </li>
      <li>
        <Link
          to={"/download"}
          className={`p-2 space-x-2 rounded-lg active:bg-indigo-700 active:text-white  active:scale-[0.98] transition duration-100 font-semibold cursor-pointer w-full flex justify-center ${
            location.pathname === "/download" ? "bg-indigo-500 text-white" : "text-indigo-500 bg-slate-100"
          }`}
        >
          <span>Download</span>
        </Link>
        
      </li>
      
    </ul>
  );
};

export default MenuListSidebarComponent;
