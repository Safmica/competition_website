import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import MainLayout from "./layouts/indexLayout";
import AuthLayout from "./layouts/authLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginForm />
          </AuthLayout>
        }
      />
      <Route
        path="/register"
        element={
          <AuthLayout>
            <RegisterForm />
          </AuthLayout>
        }
      />

      <Route
        path="/"
        element={
          <MainLayout>
            <RegisterForm />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
