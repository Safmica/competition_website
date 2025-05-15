import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import HomePage from "./pages/home";
import MainLayout from "./layouts/indexLayout";
import AuthLayout from "./layouts/authLayout";
import CompetitionMobile from "./pages/compemobile";
import PaymentPage from "./pages/payment";
import Dashboard from "./pages/Dashboard";

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
            <HomePage />
          </MainLayout>
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

      <Route
        path="/Dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
