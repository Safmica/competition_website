import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./register";
import LoginForm from "./login";
import Navbar from "./navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
