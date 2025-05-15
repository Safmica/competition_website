import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-10 mt-10">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h6 className="font-bold text-white mb-2">
            KESEDZ - Tech Competition Event
          </h6>
          <p>
            Where we specialize in transforming your brand’s vision into reality
            with innovative and effective marketing solutions.
          </p>
        </div>
        <div>
          <h6 className="font-bold text-white mb-2">Information</h6>
          <ul className="space-y-1">
            <li>
              <a href="#">Press Centre</a>
            </li>
            <li>
              <a href="#">Our Blog</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white mb-2">Menu</h6>
          <ul className="space-y-1">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white mb-2">Contact</h6>
          <p>Phone: +123 456 789</p>
          <p>Email: contact@kesedz.com</p>
          <p>Jl. Kochio No.142, Palembang, Indonesia</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        <form className="flex items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 p-2 rounded-l-md bg-black border border-gray-700 text-white"
          />
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-r-md">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;