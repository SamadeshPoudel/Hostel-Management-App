import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-white shadow-md">
        <Link to="/home">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="h-10 w-auto cursor-pointer transition duration-300 ease-in-out hover:opacity-75"
          />
        </Link>
        <FaUserCircle className="text-gray-600 h-8 w-8 transition duration-300 ease-in-out hover:text-blue-500 cursor-pointer" />
      </nav>
    </div>
  );
}

export default Navbar;
