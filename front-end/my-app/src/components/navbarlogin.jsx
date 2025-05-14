import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 text-white shadow-lg z-50">
      <div className="bg-transparent container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <img src="/Logo.png" alt="KESEDZ" className="w-34"></img>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/home"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <div className="relative group">
            <a
              href="/compemobile"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Competition
            </a>
            {/* Dropdown Menu */}
            <div className=" text-white absolute hidden group-hover:block bg-black bg-opacity-90 mt-2 rounded shadow-lg py-3">
              <a
                href="/competition/1"
                className="text-white block px-4 py-3  hover:bg-gray-700 hover:text-gray-300"
              >
                Competition 1
              </a>
              <a
                href="/competition/2"
                className=" text-white block px-4 py-2 hover:bg-gray-700 hover:text-gray-300"
              >
                Competition 2
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            About Us
          </a>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;
