import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import HomePage from "./pages/home";
import MainLayout from "./layouts/indexLayout";
import AuthLayout from "./layouts/authLayout";
import CompetitionMobile from "./pages/compemobile";
// import PaymentPage from "./pages/paymentMob";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import CompetitionWeb from "./pages/compeweb";
import CompetitionUIUX from "./pages/compeuiux";
import PaymentUIUX from "./pages/paymentUIUX";
import PaymentWeb from "./pages/paymentWeb";
import PaymentPage from "./pages/paymentPages";

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
        path="/paymentMob"
        element={
          <MainLayout>
            <PaymentPage />
          </MainLayout>
        }
      />

      <Route
        path="/paymentWeb"
        element={
          <MainLayout>
            <PaymentWeb />
          </MainLayout>
        }
      />

      <Route
        path="/paymentUIUX"
        element={
          <MainLayout>
            <PaymentUIUX />
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

      <Route
        path="/compeweb"
        element={
          <MainLayout>
            <CompetitionWeb />
          </MainLayout>
        }
      />

      <Route
        path="/compeuiux"
        element={
          <MainLayout>
            <CompetitionUIUX />
          </MainLayout>
        }
      />

      <Route
        path="/AboutUs"
        element={
          <MainLayout>
            <AboutUs />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
