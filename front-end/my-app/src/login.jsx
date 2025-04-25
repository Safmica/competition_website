import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LoginForm (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Sementara: hanya console.log data input
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        <b style={styles.grad}>Welcome back,</b> we're so exicted to see you
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
            Don't have an account? Sign Up
          </Link>
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: "400px",
    height: "400px",
    padding: "40px",
    border: '5px solid transparent',
    borderImage: 'linear-gradient(to right, #A951FF, #FD4F53) 1',
    borderRadius: "28px",
    boxShadow: "0 0 15px rgba(31, 30, 30, 0.1)",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "black",
    color:"white",
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
    color: "w"
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

export default LoginForm;