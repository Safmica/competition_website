import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import HomePage from "./pages/home";
import MainLayout from "./layouts/indexLayout";
import AuthLayout from "./layouts/authLayout";
import CompetitionMobile from "./pages/compemobile";
import PaymentPage from "./pages/payment";

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
          <AuthLayout>
            <RegisterForm />
          </AuthLayout>
        }
      />
      <Route
        path="/home"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/payment"
        element={
          <MainLayout>
            <PaymentPage />
          </MainLayout>
        }
      />

      <Route
        path="/compemobile"
        element={
          <MainLayout>
            <CompetitionMobile />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
