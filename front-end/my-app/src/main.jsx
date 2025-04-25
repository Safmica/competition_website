import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterForm from "./register.jsx";
import LoginForm from "./login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <LoginForm /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
