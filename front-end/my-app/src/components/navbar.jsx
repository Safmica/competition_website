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
            <div className=" text-white absolute hidden group-hover:block bg-black bg-opacity-90  shadow-lg px-5 text-left ">
              <a
                href="/compemobile"
                className="text-white block px-1 py-2  hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-gray-300 -ml-5 whitespace-nowrap"
              >
                Mobile Development
              </a>
              <a
                href="/compeweb"
                className=" text-white block px-1 py-2 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-gray-300 -ml-5 whitespace-nowrap "
              >
                Web Development
              </a>
              <a
                href="/compeuiux"
                className=" text-white block px-1 py-2 hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-gray-300 -ml-5 whitespace-nowrap "
              >
                UI/UX Design
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

        {/* Buttons */}
        <div className="space-x-4">
          <a href="/login">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white hover:opacity-80 transition-opacity duration-300">
              Login
            </button>
          </a>
          <a href="/register">
            <button className="text-white ml-2 border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors duration-300">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;