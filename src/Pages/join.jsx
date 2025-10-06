import React, { useState } from "react";

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    background: "#000",
    color: "#fff",
    display: "flex",
    fontFamily: "Montserrat, Arial, sans-serif"
  },
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 40px"
  },
  heading: {
    fontWeight: 700,
    fontSize: "2.4rem",
    marginBottom: 6,
    letterSpacing: "1px",
    textAlign: "center"
  },
  subheading: {
    fontWeight: 400,
    fontSize: "1.1rem",
    marginBottom: 28,
    textAlign: "center",
    color: "#ccc"
  },
  input: {
    width: "320px",
    height: "48px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.09)",
    border: "3px solid #807c7c",
    marginBottom: "16px",
    color: "#fff",
    padding: "0 16px",
    fontSize: "1.08rem",
    outline: "none",
  },
  row: {
    display: "flex",
    gap: "16px",
    marginBottom: "10px"
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    alignItems: "center"
  },
  imageBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    objectFit: "cover",
    opacity: 0.25,
    filter: "brightness(0.8)"
  },
  section: {
    position: "relative",
    zIndex: 2,
    width: "80%",
    marginTop: "16px",
    background: "none"
  },
  label: {
    fontWeight: 600,
    fontSize: "1.35rem",
    borderBottom: "2px solid #fff",
    marginBottom: "12px",
    display: "inline-block"
  },
  radioGroup: {
    margin: "20px 0"
  },
  radioLabel: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.19rem",
    marginBottom: "16px",
    cursor: "pointer"
  },
  radio: {
    width: 24,
    height: 24,
    accentColor: "#ed1c24",
    marginRight: 14
  },
  paymentLabel: {
    ...this?.label,
    marginTop: "14px",
    borderBottom: "2px solid #fff"
  },
  paymentBtns: {
    display: "flex",
    gap: "16px",
    margin: "22px 0 30px 0"
  },
  paymentBtn: {
    background: "#fff",
    color: "#000",
    border: "none",
    borderRadius: 8,
    padding: "14px 34px",
    fontWeight: 600,
    fontSize: "1.13rem",
    cursor: "pointer"
  },
  joinBtn: {
    width: "98%",
    background: "#ed1c24",
    color: "#fff",
    border: "none",
    borderRadius: 12,
    padding: "22px 0",
    fontWeight: 700,
    fontSize: "1.7rem",
    letterSpacing: "1.5px",
    cursor: "pointer",
    marginTop: "14px",
    boxShadow: "0px 2px 26px 3px rgba(237,28,36,0.37)"
  }
};

export default function FitnessSignup() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    weight: "",
    height: "",
    plan: "",
    payment: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div style={styles.container}>

      <div style={styles.left}>
        <div style={styles.heading}>
          START YOUR FITNESS<br />JOURNEY TODAY!
        </div>
        <div style={styles.subheading}>
          Choose a plan or try us free for 7 days
        </div>
        <input
          style={styles.input}
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          placeholder="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          style={styles.input}
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          style={styles.input}
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <div style={styles.row}>
          <input
            style={{ ...styles.input, width: "142px", marginBottom: 0 }}
            placeholder="Weight"
            name="weight"
            value={form.weight}
            onChange={handleChange}
          />
          <input
            style={{ ...styles.input, width: "142px", marginBottom: 0 }}
            placeholder="Height"
            name="height"
            value={form.height}
            onChange={handleChange}
          />
        </div>
      </div>
      <div style={styles.right}>

        <div style={styles.section}>
          <span style={styles.label}>Select Membership Plan</span>
          <div style={styles.radioGroup}>
            <label style={styles.radioLabel}>
              <input
                style={styles.radio}
                type="radio"
                name="plan"
                value="Monthly"
                checked={form.plan === "Monthly"}
                onChange={handleChange}
              />
              Rs.1,999/Monthly 
            </label>
            <label style={styles.radioLabel}>
              <input
                style={styles.radio}
                type="radio"
                name="plan"
                value="Quarterly"
                checked={form.plan === "Quarterly"}
                onChange={handleChange}
              />
              Rs.5,499/Quarterly
            </label>
            <label style={styles.radioLabel}>
              <input
                style={styles.radio}
                type="radio"
                name="plan"
                value="Yearly"
                checked={form.plan === "Yearly"}
                onChange={handleChange}
              />
              Rs.18,999/Yearly
            </label>
          </div>
          <span style={styles.label}>Payment Integration</span>
          <div style={styles.paymentBtns}>
            <button
              style={styles.paymentBtn}
              type="button"
              onClick={() => setForm({ ...form, payment: "Razorpay" })}
            >
              Razorpay
            </button>
            <button
              style={styles.paymentBtn}
              type="button"
              onClick={() => setForm({ ...form, payment: "EMI" })}
            >
              EMI
            </button>
            <button
              style={styles.paymentBtn}
              type="button"
              onClick={() => setForm({ ...form, payment: "UPI" })}
            >
              UPI
            </button>
          </div>
          <button style={styles.joinBtn}>JOIN NOW</button>
        </div>
      </div>
    </div>
  );
}