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
    <div
      className="mt-5 relative w-screen h-screen text-white"
      class="bg-transparent"
    >
      {/* Background Image */}
      <div
        className="w-screen h-screen text-white bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("/bg.png")' }}
      ></div>

      {/* Form Container */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-2xl shadow-lg border-[5px] border-transparent"
        style={{
          borderImage: "linear-gradient(to right, #A951FF, #FD4F53) 1",
          width: "500px",
          height: "auto",
          padding: "30px",
          zIndex: 10,
        }}
      >
        <h2 className="text-white text-4xl font-bold text-center mb-5">
          {" "}
          <b className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
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
