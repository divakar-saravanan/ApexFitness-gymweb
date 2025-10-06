import React from "react";
import trainer from "../assets/trainer.jpg";
import tredmilles from "../assets/tredmilles.jpg";
import { FaDumbbell, FaShieldAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        fontFamily: "Arial, sans-serif",
        padding: "50px 40px",
        lineHeight: 1.5,
      }}
    >
 
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          fontSize: "36px",
          marginBottom: "50px",
        }}
      >
        ABOUT US
      </motion.h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "60px",
        }}
      >
    
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ position: "relative", width: "45%" }}
        >
          <motion.img
            src={trainer}
            alt="Strength"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              maxHeight: "350px",
              objectFit: "contain",
              backgroundColor: "#000",
            }}
          />

 
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              position: "absolute",
              top: "3%",
              left: "8%",
              fontSize: "28px",
              fontWeight: "bold",
              lineHeight: 1.3,
              color: "#fff",
            }}
          >
            <p>
              Building <br />
              Strength, <br />
              Empowering <br />
              Lives
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              marginLeft: "30%",
              color: "red",
            }}
          >
            MISSION & VALUES
          </motion.h2>

   
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              backgroundColor: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              padding: "50px 0",
            }}
          >
         
            <motion.div
              variants={fadeUp}
              style={{
                width: "240px",
                height: "180px",
                backgroundColor: "#111",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
              }}
            >
              <FaDumbbell size={36} color="red" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Fitness</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.4" }}>
                Promoting physical and mental well-being through fitness
              </p>
            </motion.div>

     
            <motion.div
              variants={fadeUp}
              style={{
                width: "240px",
                height: "180px",
                backgroundColor: "#111",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
              }}
            >
              <FaShieldAlt size={36} color="red" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Discipline</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.4" }}>
                Cultivating a culture of discipline and perseverance
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{
                width: "240px",
                height: "180px",
                backgroundColor: "#111",
                borderRadius: "8px",
                textAlign: "center",
                padding: "20px",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
              }}
            >
              <FaUsers size={36} color="red" style={{ marginBottom: "12px" }} />
              <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Community</h3>
              <p style={{ fontSize: "14px", lineHeight: "1.4" }}>
                Fostering a supportive and inclusive gym environment
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          style={{ width: "48%" }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontSize: "24px",
              textDecoration: "underline",
              marginBottom: "16px",
            }}
          >
            Gym Story & Mission
          </motion.h2>

          <motion.p variants={fadeUp} style={{ fontSize: "16px" }}>
            Our gym was started with a passion for fitness and a vision to
            inspire healthier living. We believe fitness is not just about
            workouts, but about building discipline, strength, and confidence.
            Our mission is to help people transform their lives through fitness,
            guided by our core values of fitness, discipline, and community. We
            aim to provide a supportive space where everyone can achieve their
            goals and grow stronger every day.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            style={{
              color: "#fff",
              fontWeight: "bold",
              marginTop: "50px",
              marginBottom: "12%",
              marginLeft: "25%",
            }}
          >
            MISSION & VALUES
          </motion.h2>

          <motion.img
            src={tredmilles}
            alt="Treadmill"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              marginLeft: "10%",
              maxWidth: "400px",
              height: "auto",
              borderRadius: "4px",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default About;

"https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"