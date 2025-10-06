import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom"; 
import gymbg from "../assets/gymbg.png";
import BodyBuilder1 from "../assets/BodyBuilder1.png";

function Home() {
  const plansRef = useRef(null);
  const [highlighted, setHighlighted] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setHighlighted((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [paused]);


  const scrollToPlans = () => {
    if (plansRef.current) {
      plansRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleJoinNow = () => {
    if (location.pathname === "/signup") {
   
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
   
      navigate("/signup");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
  
      <motion.div
        animate={{ x: ["-20%", "20%", "-20%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: "absolute",
          top: "20%",
          left: "-50%",
          width: "250%",
          height: "2px",
          backgroundColor: "red",
          opacity: 0.7,
          transform: "rotate(45deg)",
          zIndex: 0,
        }}
      ></motion.div>


      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 3rem",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
          color: "white",
          position: "relative",
          flexWrap: "wrap",
          zIndex: 2,
        }}
      >
       
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          src={gymbg}
          alt="Gym Background"
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: 0,
            opacity: 0.4,
          }}
        />

 
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "500px",
            marginTop: "50px",
          }}
        >
          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "45px",
              lineHeight: "1.3",
            }}
          >
            “Transform <br /> Your Body. <br /> Transform <br /> Your Life.”
          </h1>
        </motion.div>

      
        <div style={{ flex: 1, display: "flex", justifyContent: "right" }}>
          <motion.img
            src={BodyBuilder1}
            alt="Bodybuilder"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              maxHeight: "480px",
              width: "auto",
              objectFit: "contain",
              zIndex: 2,
            }}
          />
        </div>

    
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            right: "50px",
            bottom: "20px",
            display: "flex",
            gap: "18px",
            zIndex: 3,
            flexWrap: "wrap",
          }}
        >
          <button style={joinBtn} onClick={handleJoinNow}>
            JOIN NOW
          </button>
          <button style={planBtn} onClick={scrollToPlans}>
            VIEW PLANS
          </button>
        </motion.div>
      </div>

 
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "100%",
          height: "3px",
          background:
            "linear-gradient(to right, transparent, #c32121, transparent)",
          margin: "40px 0",
          transformOrigin: "center",
        }}
      ></motion.div>

  
      <div ref={plansRef} style={plansContainer}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={plansTitle}
        >
          Membership Plans
        </motion.h1>

        <div style={cardsWrapper}>
       
          <motion.div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              ...cardBase,
              ...(highlighted === 0
                ? { border: "2px solid #facc15", boxShadow: "0 0 20px #facc15" }
                : {}),
            }}
          >
            <h2 style={heading}>Monthly</h2>
            <p style={price}>
              1,999
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                /month
              </span>
            </p>
            <ul style={list}>
              <li style={item}>🏋 Full Gym Access</li>
              <li style={item}>🧘 Group Classes (Zumba, Yoga, HIIT)</li>
              <li style={itemRed}>✘ Personal Training</li>
              <li style={itemRed}>✘ Nutrition Plan</li>
            </ul>
            <button style={button} onClick={() => navigate("/signup")}>
              Choose Plan
            </button>
          </motion.div>

    
          <motion.div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              ...cardBase,
              ...(highlighted === 1
                ? { border: "2px solid #facc15", boxShadow: "0 0 20px #facc15" }
                : {}),
            }}
          >
            <h2 style={heading}>Quarterly</h2>
            <p style={price}>
              5,499
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                /3 months
              </span>
            </p>
            <ul style={list}>
              <li style={item}>🏋 Full Gym Access</li>
              <li style={item}>🧘 Group Classes (Zumba, Yoga, HIIT)</li>
              <li style={itemGreen}>✔ Personal Training</li>
              <li style={itemGreen}>✔ Nutrition Plan (basic)</li>
            </ul>
            <button style={button} onClick={() => navigate("/signup")}>
              Choose Plan
            </button>
          </motion.div>

     
          <motion.div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              ...cardBase,
              ...(highlighted === 2
                ? { border: "2px solid #facc15", boxShadow: "0 0 20px #facc15" }
                : {}),
            }}
          >
            <h2 style={heading}>Yearly</h2>
            <p style={price}>
              18,999
              <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                /year
              </span>
            </p>
            <ul style={list}>
              <li style={item}>🏋 Full Gym Access</li>
              <li style={item}>🧘 Group Classes (All Included)</li>
              <li style={itemGreen}>✔ 5 Personal Training Sessions</li>
              <li style={itemGreen}>✔ Nutrition Plan (advanced)</li>
            </ul>
            <button style={button} onClick={() => navigate("/signup")}>
              Choose Plan
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;


const joinBtn = {
  background: "#c32121",
  color: "#fff",
  fontSize: "1.1rem",
  fontWeight: 600,
  border: "none",
  padding: "14px 30px",
  borderRadius: 8,
  cursor: "pointer",
  boxShadow: "0 3px 12px rgba(200,40,40,0.15), 0 0 10px red",
  transition: "0.2s",
};

const planBtn = {
  background: "#fff",
  color: "#c32121",
  fontSize: "1.1rem",
  fontWeight: 600,
  border: "2px solid #c32121",
  padding: "14px 30px",
  borderRadius: 8,
  cursor: "pointer",
  boxShadow: "0 3px 12px rgba(200,40,40,0.13), 0 0 8px red",
  transition: "0.2s",
};

const plansContainer = {
  minHeight: "100vh",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 10px",
};

const plansTitle = {
  color: "white",
  fontSize: "40px",
  fontWeight: "bold",
  marginBottom: "50px",
  textAlign: "center",
};

const cardsWrapper = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: "25px",
  width: "60%",
  maxWidth: "1100px",
};

const cardBase = {
  backgroundColor: "#111",
  borderRadius: "20px",
  padding: "30px",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
  transition: "all 0.5s ease-in-out",
};

const heading = {
  color: "white",
  fontSize: "26px",
  fontWeight: "bold",
  marginBottom: "10px",
};

const price = {
  color: "white",
  fontSize: "22px",
  fontWeight: "600",
  marginBottom: "30px",
};

const list = {
  listStyle: "none",
  padding: 0,
  marginBottom: "30px",
  textAlign: "left",
};

const item = {
  color: "white",
  fontSize: "16px",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const itemRed = { ...item, color: "#ef4444" };
const itemGreen = { ...item, color: "#22c55e" };

const button = {
  backgroundColor: "#dc2626",
  color: "white",
  padding: "10px 24px",
  fontWeight: "600",
  fontSize: "15px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};