import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import api from "../api/axioos"; // Import axios instance

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.post("/login", { email, password });

      alert(response.data.message || "Login successful!");
      setLoading(false);

      // Redirect ke halaman lain setelah login (opsional)
      // window.location.href = "/dashboard";
    } catch (error) {
      setLoading(false);
      if (error.response) {
        alert(error.response.data.message || "Login failed");
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
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
          width: "400px",
          height: "auto",
          padding: "40px",
          zIndex: 10,
        }}
      >
        <h2 className="text-2xl font-medium text-center mb-6">
          <b className="bg-gradient-to-r from-[#FD4F53] to-[#A951FF] bg-clip-text text-transparent font-bold">
            Welcome back,
          </b>{" "}
          we're so excited to see you
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-8">
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

          <div className="text-m text-center">
            <Link to="/register" className="text-primary text-white">
              Don't have an account?
              <b className="text-blue-300 font-normal"> Sign Up </b>
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="py-2.5 px-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
