import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === formData.email &&
      storedUser.password === formData.password
    ) {
      setError("");
      navigate("/home"); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        background: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "320px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "25px" }}>Welcome back</h1>

 
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#333",
            border: "2px solid #555",
            borderRadius: "6px",
            marginBottom: "15px",
            padding: "10px",
          }}
        >
          <FaEnvelope style={{ marginRight: "10px" }} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "white",
              fontSize: "14px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#333",
            border: "2px solid #555",
            borderRadius: "6px",
            marginBottom: "15px",
            padding: "10px",
          }}
        >
          <FaLock style={{ marginRight: "10px" }} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              color: "white",
              fontSize: "14px",
            }}
          />
        </div>

        {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

     
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            background: "red",
            color: "white",
            fontSize: "16px",
            border: "none",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Log In
        </button>

  
        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ color: "blue", textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;