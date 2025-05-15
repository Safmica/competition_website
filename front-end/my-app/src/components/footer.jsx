import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-10 absolute">
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
          <ul className="space-y-1 -ml-8 ">
            <li>
              <a className="text-white " href="#">
                Press Centre
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Our Blog
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold text-white mb-2">Menu</h6>
          <ul className="space-y-1 -ml-8 ">
            <li>
              <a className="text-white" href="#">
                About
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-white" href="#">
                Blog
              </a>
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

      <div className="mt-10 border-t  pt-6">
        <p className="text-center text-white font-reguler text-2xl gap-1"> Stay Information </p>
        <p className="text-center ">Sign up for our announcement</p>
        <form className="flex items-center max-w-md mx-auto border-purple-500">
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 p-2 rounded-l-md bg-black border  text-white"
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
