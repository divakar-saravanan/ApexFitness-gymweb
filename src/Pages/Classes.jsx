import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaDumbbell, FaSpa, FaBicycle, FaFistRaised } from "react-icons/fa";


import twotredmill from "../assets/twotredmill.jpg";
import spa from "../assets/spa.png";
import Bath from "../assets/Bath.png";
import Food from "../assets/Food.png";
import Locker from "../assets/Locker.png";
import crosstraining from "../assets/crosstraining.jpg"; 
import weights from "../assets/weights.jpg" ;


function GymProgramsFacilities() {

  const [currentImage, setCurrentImage] = useState(0);

  const gymImages = [twotredmill,crosstraining,weights];
  const gymNames = ["CARDIO", "STRENGTH TRAINING", "CROSSFIT AREA"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % gymImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    backgroundColor: "black",
    color: "white",
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    padding: "50px 20px",
    textAlign: "center",
  };

  const title = {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "50px",
  };

  const contentWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
  };

  const leftBox = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
  };

  const card = {
    backgroundColor: "#1e1e1e",
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "30px 15px",
    width: "110px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const iconStyle = {
    fontSize: "30px",
    marginBottom: "10px",
  };

  const cardTitle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const cardText = {
    fontSize: "14px",
    marginTop: "6px",
  };

  const rightBox = {
    backgroundColor: "#1e1e1e",
    border: "1px solid gray",
    borderRadius: "8px",
    padding: "30px",
    width: "270px",
    textAlign: "left",
  };

  const rightTitle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "15px",
    paddingLeft: "50px",
  };

  const list = {
    listStyleType: "disc",
    paddingLeft: "20px",
    lineHeight: "1.8",
  };

  const heading = {
    fontSize: "34px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subHeading = {
    fontSize: "16px",
    color: "gray",
    marginBottom: "50px",
  };

  const contentWrapperFacilities = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "120px",
  };

  const section = { textAlign: "center" };

  const sectionTitle = {
    fontSize: "22px",
    fontWeight: "bold",
    borderBottom: "3px solid white",
    display: "inline-block",
    marginBottom: "20px",
  };

  const gymImageContainer = {
    backgroundColor: "#111",
    borderRadius: "8px",
    padding: "10px",
    width: "230px",
    position: "relative",
    overflow: "hidden",
  };

  const gymImage = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    display: "block",
  };

  const blinkingText = {
    marginTop: "10px",
    fontWeight: "bold",
    fontSize: "16px",
    letterSpacing: "1px",
    animation: "blink 1s infinite",
  };

  const blinkKeyframes = `
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `;

  const amenitiesGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
    marginTop: "10px",
  };

  const amenityImage = {
    width: "170px",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  };


  return (
    <div style={container}>
      <style>{blinkKeyframes}</style>

   
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={title}>Classes & Programs</h1>

        <div style={contentWrapper}>
          <div style={leftBox}>
            <div style={card}>
              <FaDumbbell style={iconStyle} />
              <div style={cardTitle}>Strength Training</div>
              <div style={cardText}>Build muscle and power</div>
            </div>

            <div style={card}>
              <FaSpa style={iconStyle} />
              <div style={cardTitle}>Yoga & Meditation</div>
              <div style={cardText}>
                Flexibility, balance & peace of mind
              </div>
            </div>

            <div style={card}>
              <FaBicycle style={iconStyle} />
              <div style={cardTitle}>Spinning / Cycling</div>
              <div style={cardText}>High energy endurance workouts</div>
            </div>

            <div style={card}>
              <FaFistRaised style={iconStyle} />
              <div style={cardTitle}>Boxing & HIIT</div>
              <div style={cardText}>Burn fat & boost stamina</div>
            </div>
          </div>

          <div style={rightBox}>
            <div style={rightTitle}>Program Highlights</div>
            <ul style={list}>
              <li>Beginner, Intermediate & Advanced Levels.</li>
              <li>Group classes & 1-on-1 sessions available.</li>
              <li>Certified trainers for every program.</li>
              <li>
                Program tracking <br /> through the app.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

   
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        style={{
          width: "80%",
          height: "2px",
          background:
            "linear-gradient(90deg, transparent, #ff3d00, transparent)",
          margin: "80px auto",
          transformOrigin: "left",
        }}
      ></motion.div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={heading}>Facilities Page</h1>
        <p style={subHeading}>
          Explore our state-of-the-art gym <br />
          and top-notch amenities.
        </p>

        <div style={contentWrapperFacilities}>
        
          <div style={section}>
            <h2 style={sectionTitle}>Gym Equipment</h2>
            <div style={gymImageContainer}>
              <motion.img
                key={currentImage}
                src={gymImages[currentImage]}
                alt="Gym Equipment"
                style={gymImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div
                key={gymNames[currentImage]}
                style={blinkingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {gymNames[currentImage]}
              </motion.div>
            </div>
          </div>

     
          <div style={section}>
            <h2 style={sectionTitle}>Amenities</h2>
            <div style={amenitiesGrid}>
              <img src={Locker} alt="Locker Room" style={amenityImage} />
              <img src={spa} alt="Steam Room" style={amenityImage} />
              <img src={Bath} alt="Shower" style={amenityImage} />
              <img src={Food} alt="Juice Bar" style={amenityImage} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GymProgramsFacilities;