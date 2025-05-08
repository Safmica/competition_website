import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-70 text-white shadow-lg z-50">
      <div className="bg-transparent container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
        <img src="/Logo.png" alt="KESEDZ" className="w-34"></img>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="/home"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
          <div className="relative group">
            <a
              href="/competition"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              Competition
            </a>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-black bg-opacity-90 mt-2 rounded shadow-lg py-2">
              <a
                href="/competition/1"
                className="block px-4 py-2 hover:bg-gray-700 hover:text-gray-300"
              >
                Competition 1
              </a>
              <a
                href="/competition/2"
                className="block px-4 py-2 hover:bg-gray-700 hover:text-gray-300"
              >
                Competition 2
              </a>
            </div>
          </div>
          <a
            href="/about"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            About Us
          </a>
        </div>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white hover:opacity-80 transition-opacity duration-300">
            Login
          </button>
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
