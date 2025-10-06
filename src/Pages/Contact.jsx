import React, { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]");
    submissions.push(form);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));
    setForm({ name: "", email: "", message: "" });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500); 
  };


  const styles = {
    container: {
      background: "#000",
      color: "#fff",
      fontFamily: "serif",
      minHeight: "100vh",
      padding: "40px 0",
      
    },
    header: {
      fontSize: 48,
      marginLeft: 50,
      marginBottom: 24,
      fontWeight: 600,
    },
    columns: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 42,
      padding: "0 40px",
    },
    column: {
      background: "#181818",
      borderRadius: 10,
      padding: 28,
      minWidth: 320,
      boxShadow: "0 2px 12px #0006",
      marginBottom: 10,
    },
    contactInfo: {
      background: "#181818",
      borderRadius: 10,
      padding: 22,
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      fontSize: 17,
    },
    mapContainer: {
      background: "#181818",
      borderRadius: 10,
      padding: 6,
      border: "6px solid #FFD600",
      marginLeft: 8,
      minWidth: 350,
      minHeight: 350,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      marginTop: 12,
    },
    input: {
      background: "#222",
      border: "none",
      borderRadius: 6,
      padding: 14,
      color: "#fff",
      fontSize: 16,
      marginBottom: 6,
      outline: "none",
      fontFamily: "inherit",
    },
    textarea: {
      background: "#222",
      border: "none",
      borderRadius: 6,
      padding: 14,
      color: "#fff",
      fontSize: 16,
      minHeight: 62,
      resize: "vertical",
      fontFamily: "inherit",
    },
    submitBtn: {
      background: "#F02828",
      color: "#fff",
      fontWeight: 600,
      fontSize: 18,
      border: "none",
      borderRadius: 7,
      padding: "12px 0",
      cursor: "pointer",
      marginTop: 3,
      transition: "background 0.2s",
    },
    opening: {
      fontSize: 24,
      textDecoration: "underline",
      marginBottom: 25,
      fontWeight: 500,
    },
    hoursRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      fontSize: 17,
      margin: "10px 0",
      letterSpacing: 1,
      gap: 36,
  
   
    },
    successMsg: {
      position: "fixed",
      top: 15,
      left: "50%",
      transform: "translateX(-50%)",
      background: "green",
      color: "#fff",
      borderRadius: 9,
      padding: "16px 35px",
      fontSize: 22,
      fontWeight: 600,
      boxShadow: "0 8px 24px #0007",
      opacity: success ? 1 : 0,
      transition: "opacity 0.6s, top 0.6s",
      zIndex: 20,
      animation: success ? "fadeInDown 0.9s" : "",
    },
 
  };


  const animationCSS = `
    @keyframes fadeInDown {
      0% { opacity: 0; top: 0px; }
      60% { opacity: 1; top: 25px; }
      100% { opacity: 1; top: 15px; }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{animationCSS}</style>
      {success && (
        <div style={styles.successMsg}>
          Details are submitted successfully!
        </div>
      )}
      <div style={styles.header}>Contact Us</div>
      <div style={styles.columns}>
   
        <div>
          <div style={styles.column}>
            <div style={{ fontSize: 26, fontWeight: 500, marginBottom: 16 }}>Contact Form</div>
            <form style={styles.form} onSubmit={handleSubmit}>
              <input
                style={styles.input}
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                style={styles.input}
                placeholder="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                style={styles.textarea}
                placeholder="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" style={styles.submitBtn}>
                SUBMIT
              </button>
            </form>
          </div>
          <div style={styles.contactInfo}>
            <div><span style={{ marginRight: 8 }}>📞</span> +1 234 567 890</div>
            <div><span style={{ marginRight: 8 }}>✉</span> apex@gymwebsite.com</div>
          </div>
        </div>

   
        <div style={styles.column}>
  <div style={styles.opening}>Opening Hours</div>
  <div style={{ marginLeft: 10, marginTop: 16 }}>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Monday</span> <span>6:00AM - 9:00PM</span></div>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Tuesday</span> <span>6:00AM - 9:00PM</span></div>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Wednesday</span> <span>6:00AM - 9:00PM</span></div>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Thursday</span> <span>6:00AM - 9:00PM</span></div>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Friday</span> <span>6:00AM - 9:00PM</span></div>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Saturday</span> <span>7:00AM - 7:00PM</span></div>
    <div style={styles.hoursRow}><span style={{ width: 90, display: "inline-block" }}>Sunday</span> <span>8:00AM - 5:00PM</span></div>
  </div>
</div>
    
        <div style={styles.mapContainer}>
     
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.375590853339!2d106.7079555748197!3d10.821108258340376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bf3fcafeef%3A0xdac381ae6489956d!2sShopiParking%20Limited!5e0!3m2!1sen!2s!4v1695378413000!5m2!1sen!2s"
            width="330"
            height="340"
            frameBorder="0"
            style={{ border: 0, borderRadius: 9 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;