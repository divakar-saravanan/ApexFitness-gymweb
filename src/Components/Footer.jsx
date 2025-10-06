import React from "react";
import logo from "../assets/Logo.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#191919",
        color: "#fff",
        fontFamily: "sans-serif",
        position: "relative",
        minHeight: "520px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 38,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <img
          src={logo}
          alt="Apex Fitness Logo"
          style={{ height: 60, marginBottom: 3 }}
        />
      </div>

      <div style={{ textAlign: "center", paddingTop: 64, paddingBottom: 10 }}>
        <div
          style={{
            fontSize: 36,
            fontWeight: "bold",
            marginBottom: 12,
            lineHeight: 1.16,
          }}
        >
          Ready to Start Your Fitness Journey?
        </div>
        <div
          style={{
            color: "#bbb",
            fontSize: 18,
            fontWeight: 400,
            marginBottom: 32,
          }}
        >
          Join today and take the first step towards a healthier, stronger, and
          more confident you.
        </div>
      </div>

      <div
        style={{
          width: "87%",
          margin: "0 auto",
          border: "2px solid #ffd600",
          borderRadius: 8,
          background: "rgba(24,24,24,0.97)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "44px 36px",
          gap: 28,
          boxSizing: "border-box",
        }}
      >
        {/* Contact Us */}
        <div style={{ minWidth: 210, textAlign: "left" }}>
          <div
            style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}
          >
            Contact Us
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 10 }}
          >
            <span
              style={{ marginRight: 10, color: "#ffd600", fontSize: 20 }}
            >
              <svg
                width="20"
                height="20"
                fill="#ffd600"
                viewBox="0 0 24 24"
              >
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.54.57 1 1 0 011 1V20a2 2 0 01-2 2A17 17 0 013 5a2 2 0 012-2h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.54 1 1 0 01-.21 1.11l-2.2 2.2z" />
              </svg>
            </span>
            <span style={{ fontSize: 16 }}>+123 456 7890</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 10, color: "#ff3232", fontSize: 20 }}>
              <svg
                width="20"
                height="20"
                fill="#ff3232"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 7 8-7V20H4z" />
              </svg>
            </span>
            <span style={{ fontSize: 16 }}>apexfitness@gmail.com</span>
          </div>
        </div>

        {/* Quick Links */}
        <div
          style={{
            minWidth: 130,
            textAlign: "left",
            marginLeft: "100px",
          }}
        >
          <div
            style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}
          >
            Quick Link
          </div>
          <div style={{ fontSize: 16, lineHeight: "2.1em" }}>
            Home <br />
            About <br />
            Classes <br />
            Trainers <br />
            Contact us
          </div>
        </div>

        {/* Follow Us */}
        <div
          style={{
            flex: 1,
            textAlign: "left",
            marginLeft: "90px",
          }}
        >
          <div
            style={{ fontSize: 22, fontWeight: 700, marginBottom: 20 }}
          >
            Follow Us
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginBottom: 24,
            }}
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              style={{ color: "#E1306C" }}
            >
              <FaInstagram size={32} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              style={{ color: "#1877F2" }}
            >
              <FaFacebook size={32} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              style={{ color: "#1DA1F2" }}
            >
              <FaTwitter size={32} />
            </a>
          </div>

          <button
            style={{
              background: "#d32f2f",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: "bold",
              fontSize: 20,
              padding: "14px 42px",
              boxShadow: "0 1px 15px rgba(211,47,47,.17)",
              cursor: "pointer",
            }}
          >
            JOIN NOW
          </button>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#ccc",
          fontSize: 16,
          marginTop: 44,
          padding: "28px 0 10px",
        }}
      >
        © 2025 ApexFitness. India. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
