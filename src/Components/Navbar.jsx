import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 50px",
        position: "fixed",  
        top: 0,
        left: 0,
        width: "90%",
        zIndex: 1000,
        backgroundColor: "transparent", 
      }}
    >
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
       
        <img
          src={logo}
          alt="logo"
          style={{ height: "80px" }}
        />
     
       
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/classes" style={linkStyle}>Classes</Link>
        <Link to="/trainers" style={linkStyle}>Trainers</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/Blog" style={linkStyle}>Blog</Link>
      
      
    </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Navbar;
