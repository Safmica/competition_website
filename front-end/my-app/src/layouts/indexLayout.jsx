import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import NavbarUserLogin from "../components/navUserlogin";
import api from "../api/axioos";
import Footer from "../components/footer";

function MainLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/me")
      .then(res => {
        if (res.data.user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(() => setIsLoggedIn(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-400">
      {isLoggedIn ? <NavbarUserLogin /> : <Navbar />}
      <div>{children}</div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
