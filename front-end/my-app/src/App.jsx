import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./register";
import LoginForm from "./login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
}

export default App;
