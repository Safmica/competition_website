import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmpassword);

    if(password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  };

  return (
    <div style={styles.wrapper}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent" style={{ zIndex: 2, position: 'absolute', width: '100%' }}>
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/" style={{ fontWeight: 'bold' }}>
            KESEDZ
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Competition
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/competition1">Competition 1</Link></li>
                  <li><Link className="dropdown-item" to="/competition2">Competition 2</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <Link to="/login" className="btn btn-gradient px-4">Login</Link>
              <Link to="/register" className="btn btn-outline-light px-4">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

    <div style={styles.background}></div>
    <div style={styles.container}>
      <h2 style={styles.title}>SignUp</h2>
      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          required
        />
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
        <input
          type="confirmpassword"
          placeholder="Confirm Password"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />

        <div className="mb-3">
          <Link className="text-primary" to="/login">
            Have an account? Sign In
          </Link>
        </div>


        <button type="submit" style={styles.button}>SignUp</button>
      </form>
    </div>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    height: "500px",
    padding: "40px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(31, 30, 30, 0.1)",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  background: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100vh",
    width: "100vw",
    backgroundImage: 'url("/BG PAGE.png")',
    backgroundSize: "cover", // Ensure background image covers the full screen
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transform: "scale (2)",
    zIndex: 0,
  },

  title: {
    marginBottom: "-120px",
    fontSize: "50px",
  },

  form: {
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    Height: "100px",
  },

  input: {
    padding: "10px",
    fontSize: "16px",
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

export default RegisterForm;