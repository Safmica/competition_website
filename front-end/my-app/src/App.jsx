import { Routes, Route } from "react-router-dom";
import React from "react";
import RegisterForm from "./pages/register";
import LoginForm from "./pages/login";
import HomePage from "./pages/home";
import MainLayout from "./layouts/indexLayout";
import MainAuthLayout from "./layouts/indexAuthLayout";
import AuthLayout from "./layouts/authLayout";
import CompetitionMobile from "./pages/compemobile";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import CompetitionWeb from "./pages/compeweb";
import CompetitionUIUX from "./pages/compeuiux";
import PaymentPage from "./pages/paymentPages";
import UserDashboard from "./pages/userDashboard";


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
        path="/payment"
        element={
          <MainAuthLayout>
            <PaymentPage />
          </MainAuthLayout>
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
        path="/dashboard"
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
        path="/aboutUs"
        element={
          <MainLayout>
            <AboutUs />
          </MainLayout>
        }
      />

      <Route
        path="/userDashboard"
        element={
          <MainLayout>
            <UserDashboard />
          </MainLayout>
        }
      />

    </Routes>
  );
}

export default App;
