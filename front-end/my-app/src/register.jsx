import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="relative w-screen h-screen text-white overflow-hidden">
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top z-10">
        <div className="container-fluid px-5">
          <img src="/Logo.png" alt="KESEDZ" className="w-34"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Competition
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link
                      className="dropdown-item text-white bg-dark"
                      to="/competition1"
                    >
                      Competition 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-white bg-dark"
                      to="/competition2"
                    >
                      Competition 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-gradient px-4">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-light px-4">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-125 z-0"
        style={{ backgroundImage: 'url("/BG PAGE.png")' }}
      ></div>

      {/* Form Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-10 rounded-2xl border-4 border-transparent border-gradient-to-r from-purple-500 to-red-500 shadow-lg z-10 w-[90%] max-w-md">
        <h2 className="text-4xl font-bold text-center mb-5">
          {" "}
          <b className="bg-gradient-to-r from-purple-600 to-pink-500">
            Welcome
          </b>
          , Join us and start your journey today
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-3 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="py-2.5 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition"
          >
            Sign Up
          </button>

          <div className="text-sm text-center">
            <Link
              to="/login"
              className="text-white hover:underline text-xl font-normal"
            >
              Have an account? <b className="text-blue-300"> Login </b>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
