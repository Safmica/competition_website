import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={styles.wrapper}>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-transparent"
        style={{ zIndex: 2, position: "absolute", width: "100%" }}
      >
        <div className="container-fluid px-5">
          <img src="/Logo.png" alt="KESEDZ" className="w-34"></img>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Competition
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/competition1">
                      Competition 1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/competition2">
                      Competition 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-gradient px-4">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-light px-4">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div style={styles.background}></div>
      <div style={styles.container}>
        <h2 style={styles.title}>
          <b style={styles.grad}>Welcome back,</b> we're so excited to see you
        </h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <div className="mb-3">
            <Link className="text-primary" to="/register">
              Don't have an account?{" "}
              <b
                style={{
                  textDecoration: "underline",
                  color: "white",
                  fontWeight: "normal",
                }}
              >
                {" "}
                Sign Up{" "}
              </b>
            </Link>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
  }, // },

  // background: {
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   height: '100vw',
  //   width: '100vh',
  //   backgroundImage: 'url("/BG PAGE.png")',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   transform: "translate(-50%, -50%) rotate(90deg)",
  //   zIndex: 0,
  // },

  background: {
    position: "absolute",
    top: "0",
    left: "0",
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url("/BG PAGE.png")',
    backgroundSize: 'cover', // Ensure background image covers the full screen
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    transform: "scale (5)",
    zIndex: 0},

  container: {
    zIndex: 1,
    width: "400px",
    height: "400px",
    padding: "40px",
    border: "5px solid transparent",
    borderImage: "linear-gradient(to right, #A951FF, #FD4F53) 1",
    borderRadius: "28px",
    boxShadow: "0 0 15px rgba(31, 30, 30, 0.1)",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    color: "white",
  },

  grad: {
    background: "linear-gradient(to right, #FD4F53, #A951FF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
  },

  title: {
    marginBottom: "-120px",
    fontSize: "30px",
  },

  form: {
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  .btn-gradient {
    background: linear-gradient(to right, #A951FF, #FD4F53);
    color: white;
    border: none;
  }
  .btn-gradient:hover {
    background: linear-gradient(to right, #FD4F53, #A951FF);
    color: white;
  }
`;
document.head.appendChild(styleSheet);

export default LoginForm;
