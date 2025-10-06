import React, { useState, useEffect } from "react";
import Mark from "../assets/Mark.png";
import John from "../assets/John.jpg";
import Lee from "../assets/Lee.png";
import Emma from "../assets/Emma.png";
import Lisa from "../assets/Lisa.png";
import Sophia from "../assets/Sophia.jpg"

import beforeafter from "../assets/beforeafter.jpg";
import beforeafter2 from "../assets/beforeafter2.jpg";
import beforeafter3 from "../assets/beforeafter3.jpg";
import beforeafter4 from "../assets/beforeafter4.jpg";

function TrainersAndTransformationPage() {

  const trainers = [
    {
      img: Mark,
      name: "Mark Johnson",
      role: "CERTIFIED PERSONAL TRAINER",
      exp: "5+ YEARS EXPERIENCE",
      specialty: "STRENGTH TRAINING",
    },
    {
      img: Lisa,
      name: "Lisa Anderson",
      role: "FITNESS COACH", 
      exp: "8+ YEARS EXPERIENCE",
      specialty: "WEIGHT LOSS",
    },
    {
      img: Lee,
      name: "Michael Lee",
      role: "CERTIFIED PERSONAL TRAINER",
      exp: "10+ YEARS EXPERIENCE",
      specialty: "FUNCTIONAL TRAINING",
    },
    {
      img: Emma,
      name: "Emma Johnson",
      role: "CERTIFIED PERSONAL TRAINER",
      exp: "10+ YEARS EXPERIENCE",
      specialty: "ZUMBA & WEIGHT MANAGEMENT",
    },
    {
      img: John,
      name: "John Smith",
      role: "STRENGTH & CONDITIONING COACH",
      exp: "7+ YEARS EXPERIENCE",
      specialty: "MUSCLE GAIN",
    },
    {
      img: Sophia,
      name: "Sophia Brown",
      role: "FITNESS COACH",
      exp: "6+ YEARS EXPERIENCE",
      specialty: "CARDIO & ENDURANCE",
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % trainers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [trainers.length]);

  const visibleTrainers = trainers.slice(index, index + 3).length === 3
    ? trainers.slice(index, index + 3)
    : [...trainers.slice(index), ...trainers.slice(0, 3 - (trainers.length - index))];


  const flickerImages = [beforeafter, beforeafter2, beforeafter3, beforeafter4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % flickerImages.length);
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, [flickerImages.length]);

  return (
    <div
      style={{
        backgroundColor: "#000",
        minHeight: "100vh",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
  
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .blink {
            animation: blink 1s infinite;
          }
        `}
      </style>

     
      <div style={{ padding: "40px 20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          Best Trainers Page
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#aaa",
            marginBottom: "40px",
          }}
        >
          Meet our team of expert trainers <br /> and book a session now
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {visibleTrainers.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                overflow: "hidden",
                width: "300px",
                textAlign: "left",
                boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
                border: "2px solid #333",
                transition: "all 0.6s ease-in-out",
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px" }}>
                <h2 style={{ fontSize: "18px", marginBottom: "6px", fontWeight: "bold" }}>
                  {t.name}
                </h2>
                <p style={{ fontSize: "14px", lineHeight: "20px", marginBottom: "14px" }}>
                  {t.role} <br />
                  {t.exp} <br />
                  {t.specialty}
                </p>
                <button
                  className="blink"
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "4px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    display: "block",
                    margin: "0 auto",
                  }}
                >
                  BOOK
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div
        style={{
          borderTop: "2px solid #333",
          margin: "50px auto",
          width: "80%",
        }}
      ></div>

      <div style={{ padding: "80px 20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "40px",
          }}
        >
          Transformation
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "25px",
            alignItems: "flex-start",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: "1", minWidth: "310px", maxWidth: "500px" }}>
            <h2 style={{ color: "orange", fontSize: "20px", marginBottom: "20px" }}>
              Before & After Details
            </h2>
            <br />
            <p style={{ fontSize: "16px", marginBottom: "15px" }}>
              <strong style={{ color: "orange" }}>Before:</strong> Many start with
              low energy, <br /> lack of confidence, and unhealthy habits.
            </p>
            <p style={{ fontSize: "16px", marginBottom: "20px" }}>
              <strong style={{ color: "orange" }}>After:</strong> With consistency,
              members build strength,<br /> improve endurance, boost confidence, and
              <br />
              achieve visible results.
            </p>{" "}
            <br />
            <h3 style={{ color: "orange", fontSize: "18px", marginBottom: "15px" }}>
              Important
            </h3>
            <ul style={{ fontSize: "15px", lineHeight: "24px", marginBottom: "25px" }}>
              <li>Consistency Over Perfection - Progress<br></br> happens step-by-step.</li>
              <li>Balanced Nutrition - Fuel your<br></br> body with the right foods.</li>
              <li>Structured Training - Mix <br></br>strength, cardio, and recovery.</li>
              <li>Track Progress - Photos,<br></br> measurements, and milestones.</li>
              <li>Mindset Matters - Discipline <br></br> beats motivation on tough days.</li>
            </ul>
          </div>

          <div style={{ flex: "1", minWidth: "300px", maxWidth: "500px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "18px",
                marginBottom: "5px",
              }}
            >
              Don’t stop when you’re tired. <br /> Stop when you’re done
            </p>
            <img
              src={flickerImages[currentIndex]}
              alt="Transformation"
              style={{
                width: "100%",
                borderRadius: "6px",
                transition: "opacity 0.5s ease-in-out",
                opacity: fade ? 1 : 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainersAndTransformationPage;