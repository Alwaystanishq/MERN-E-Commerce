import React from 'react';
import { FaOpencart } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex items-center h-[10vh] justify-between px-10 py-3 bg-gray-900 shadow-md">
      {/* Left side - Logo/Text */}
      <Link to={'/'} className="text-2xl font-bold flex justify-center items-center gap-x-3 text-white">
        E-commerce <FaOpencart/>
      </Link>

      {/* Right side - Buttons */}
      <div className="flex space-x-4">
        <Link to={'/create'} className="px-4 py-2 bg-blue-500 flex justify-center items-center gap-x-1 text-white rounded hover:bg-blue-600">
          Add Product <IoAddCircle/> 
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
