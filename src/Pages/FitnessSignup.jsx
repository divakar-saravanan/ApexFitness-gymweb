import React, { useState } from "react";
import bodybuilder2 from "../assets/BodyBuilder2.jpg"; 

function FitnessSignup() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    plan: "",
    payment: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.plan || !formData.payment) {
      alert("Please select membership plan and payment method");
      return;
    }
    setShowPopup(true);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
  
      <div
        style={{
          flex: 1,
          minWidth: "310px",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          START YOUR FITNESS JOURNEY TODAY!
        </h1>
        <p style={{ marginBottom: "20px" }}>
          Choose a plan or try us free for 7 days
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          {["name", "phone", "email", "password"].map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : field === "email" ? "email" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                margin: "8px 0",
                borderRadius: "8px",
                border: "1px solid #555",
                background: "#111",
                color: "#fff",
              }}
            />
          ))}

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="number"
              name="weight"
              placeholder="Weight"
              value={formData.weight}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #555",
                background: "#111",
                color: "#fff",
              }}
            />
            <input
              type="number"
              name="height"
              placeholder="Height"
              value={formData.height}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "8px",
                border: "1px solid #555",
                background: "#111",
                color: "#fff",
              }}
            />
          </div>
        </form>
      </div>


      <div
        style={{
          flex: 1,
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px",
          backgroundImage:`url(${bodybuilder2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
      
        <div
          style={{
            background: "rgba(0,0,0,0.6)",
            borderRadius: "12px",
            padding: "30px",
          }}
        >
          <h3
            style={{
              marginTop: "0",
              marginBottom: "10px",
              textDecoration: "underline",
            }}
          >
            Select Membership Plan
          </h3>
          <label style={{ display: "block", margin: "6px 0" }}>
            <input type="radio" name="plan" value="Monthly" onChange={handleChange} />  Rs.1,999/Monthly
          </label>
          <label style={{ display: "block", margin: "6px 0" }}>
            <input type="radio" name="plan" value="Quarterly" onChange={handleChange} />  Rs.5,499/Quarterly
          </label>
          <label style={{ display: "block", margin: "6px 0" }}>
            <input type="radio" name="plan" value="Yearly" onChange={handleChange} />   Rs.18,999/Yearly
          </label>

          <h3 style={{ marginTop: "20px", marginBottom: "10px", textDecoration: "underline" }}>
            Payment Integration
          </h3>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            {["Razorpay", "EMI", "UPI"].map((method) => (
              <button
                key={method}
                type="button"
                onClick={() => setFormData({ ...formData, payment: method })}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  background: formData.payment === method ? "red" : "#ddd",
                  color: formData.payment === method ? "#fff" : "#000",
                  fontWeight: "bold",
                }}
              >
                {method}
              </button>
            ))}
          </div>

     
          <button
            onClick={handleSubmit}
            style={{
              width: "100%",
              padding: "15px",
              background: "red",
              border: "none",
              borderRadius: "8px",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            JOIN NOW
          </button>
        </div>
      </div>


      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              background: "#fff",
              color: "#000",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
              maxWidth: "400px",
              width: "90%",
            }}
          >
            <h2>🎉 Payment Successful!</h2>
            <p>
              Thank you <b>{formData.name}</b> for joining our fitness journey.
              Your <b>{formData.plan}</b> plan with <b>{formData.payment}</b> has been confirmed.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FitnessSignup;