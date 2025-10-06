import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("user", JSON.stringify(formData));
      setSubmitted(true);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "transparent",
          padding: "0",
          borderRadius: "10px",
          width: "360px",
          textAlign: "center",
        }}
      >
        <h2 style={{
          color: "white",
          marginBottom: "35px",
          fontSize: "2.1rem",
          fontWeight: "bold",
          letterSpacing: "1px",
          marginLeft:"25px",
        }}>Create Your Account</h2>
        
        <div style={{ marginBottom: "18px", position: "relative" }}>
          <FaUser style={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ccc",
            fontSize: "1.2rem"
          }} />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={{
              width: "85%",
              padding: "14px 14px 14px 44px",
              borderRadius: "8px",
              border: "2px solid #444",
              background: "#232323",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          {errors.fullName && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: 0 }}>{errors.fullName}</p>
          )}
        </div>
        <div style={{ marginBottom: "18px", position: "relative" }}>
          <FaEnvelope style={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ccc",
            fontSize: "1.2rem"
          }} />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "85%",
              padding: "14px 14px 14px 44px",
              borderRadius: "8px",
              border: "2px solid #444",
              background: "#232323",
              color: "white",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: 0 }}>{errors.email}</p>
          )}
        </div>
        <div style={{ marginBottom: "20px", position: "relative" }}>
          <FaLock style={{
            position: "absolute",
            left: "15px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ccc",
            fontSize: "1.2rem"
          }} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "85%",
              padding: "14px 14px 14px 44px",
              borderRadius: "8px",
              border: "2px solid #444",
              background: "#232323",
              color: "white",
              fontSize: "1rem",
              outline: "none",
              letterSpacing: "2px"
            }}
          />
          {errors.password && (
            <p style={{ color: "red", fontSize: "12px", marginBottom: 0 }}>{errors.password}</p>
          )}
        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "18px",
          gap: "14px"
        }}>
          <button type="button"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #d22323",
              background: "#000",
              color: "white",
              borderRadius: "8px",
              padding: "12px 0",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background .2s, color .2s"
            }}>
            <FaGoogle style={{ color: "#ea4335", marginRight: "10px", fontSize: "1.3rem" }} /> Google
          </button>
          <button type="button"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #d22323",
              background: "#000",
              color: "white",
              borderRadius: "8px",
              padding: "12px 0",
              fontWeight: "bold",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background .2s, color .2s"
            }}>
            <FaFacebookF style={{ color: "#1976d2", marginRight: "10px", fontSize: "1.3rem" }} /> Facebook
          </button>
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "8px",
            background: "#e00713",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            cursor: "pointer",
            marginBottom: "12px",
            letterSpacing: ".5px"
          }}>
          Sign Up
        </button>
        <div style={{ marginBottom: "4px", fontSize: "14px", color: "#ccc" }}>
          Already have an account? <a href="/login" style={{ color: "#5fc6fa", textDecoration: "none" }}>Log In</a>
        </div>
        {submitted && (
          <p style={{ color: "lightgreen", marginTop: "10px" }}>
            ✅ Your details are submitted! Redirecting to Login...
          </p>
        )}
      </form>
    </div>
  );
}

export default Signup;