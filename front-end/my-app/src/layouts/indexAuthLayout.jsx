import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Navbar from "../components/navbar";
import NavbarUserLogin from "../components/navUserlogin";
import api from "../api/axioos";
import Footer from "../components/footer";

function MainAuthLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    api
      .get("/me")
      .then((res) => {
        if (res.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate("/login");
    }
  }, [loading, isLoggedIn, navigate]);

  if (loading) return <div className="text-white mt-10">Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-400">
      {isLoggedIn ? <navUserLogin /> : <Navbar />}
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainAuthLayout;
