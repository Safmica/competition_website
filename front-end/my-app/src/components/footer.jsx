import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-400 p-10 w-full">
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
        <p className="text-center text-white font-reguler text-2xl gap-1">
          {" "}
          Stay Information{" "}
        </p>
        <p className="text-center ">Sign up for our announcement</p>
        <div class="flex items-center justify-center scale-80">
          <div class="flex w-full max-w-xl overflow-hidden rounded-full border-2 border-transparent bg-black bg-clip-padding p-[2px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              class="flex-grow rounded-full px-5 py-3 text-white bg-black text-sm placeholder-gray-400 outline-none border-none"
            />
            <button class="ml-2 rounded-full bg-transparent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
