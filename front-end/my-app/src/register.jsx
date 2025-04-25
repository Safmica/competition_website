import React, { useState } from 'react';

function RegisterForm (){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Sementara: hanya console.log data input
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmpassword);
  };

  return (
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
        <button type="submit" style={styles.button}>SignUp</button>
      </form>
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

export default RegisterForm