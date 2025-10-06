import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Tips1 from "../assets/Tips1.jpg";
import Tips2 from "../assets/Tips2.jpg";
import Tips3 from "../assets/Tips3.jpg";
import Tips4 from "../assets/Tips4.jpg";

const images = [Tips1,Tips2,Tips3,Tips4];

const phrases = [
  "Effective exercises to do at home",
  "No equipment required workouts",
  "Build muscle anywhere",
  "Stay fit, stay motivated!"
];

export default function FitnessBlog() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const styles = {
    root: {
      minHeight: "100vh",
      background: "#000",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch",
      fontFamily: "serif"
    },
    left: {
      flex: 1.18,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: "0 0 0 40px",
      minHeight: "100vh",
      background:
        'url("https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg") no-repeat center center/cover'
 
    },
    overlay: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.74)"
    },
    leftContent: {
      position: "relative",
      zIndex: 2,
      top: 38
    },
    nav: {
      marginTop: 100,
      marginLeft: 12,
      marginBottom: 40
    },
    navItem: {
      fontSize: 35,
      color: "#fff",
      lineHeight: "1.35",
      fontWeight: 400,
      marginBottom: 7,
      letterSpacing: 1
    },
    subscribeBtn: {
      marginTop: 30,
      width: 220,
      background: "#F02828",
      color: "#fff",
      border: "none",
      borderRadius: 12,
      fontSize: 26,
      fontWeight: 500,
      padding: "16px 0",
      cursor: "pointer",
      boxShadow: "0 3px 18px #0007",
      transition: "background 0.18s"
    },
    right: {
      flex: 1,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      minHeight: "100vh"
    },
    blogTitleBox: {
      marginTop: 65,
      marginLeft: 50,
      marginBottom: 30
    },
    blogYellow: {
      color: "#FFD600",
      fontWeight: 700,
      fontSize: 38,
      letterSpacing: 3
    },
    blogWhite: {
      color: "#fff",
      fontWeight: 600,
      fontSize: 38,
      marginLeft: 10,
      letterSpacing: 3
    },
    cardBox: {
      marginLeft: 110,
      marginTop: 24,
      display: "flex",
      flexDirection: "column"
    },
    card: {
      width: 375,
      height: 355,
      background: "#0D0D0D",
      borderRadius: 14,
      boxShadow: "0 5px 32px #0007",
      position: "relative",
      overflow: "hidden"
    },
    imgBox: {
      width: "100%",
      height: 235,
      background: "#191919",
      position: "relative",
      overflow: "hidden"
    },
    cardTitle: {
      color: "#fff",
      fontSize: 28,
      fontWeight: 600,
      margin: "20px 0 7px 18px"
    },
    cardPhrase: {
      color: "#979797",
      fontSize: 20,
      marginLeft: 18,
      fontWeight: 400
    }
  };

  const variants = {
    enter: { opacity: 0, x: 35 },
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.46, ease: "easeIn" }
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.36 } }
  };

  const onSubscribe = () => alert("Subscribed!");

  return (
    <div style={styles.root}>
      {/* -------- LEFT NAVIGATION -------- */}
      <div style={styles.left}>
        <div style={styles.overlay} />
        <div style={styles.leftContent}>
          <div style={styles.nav}>
            <div style={styles.navItem}>Fitness</div>
            <div style={styles.navItem}>Workout</div>
            <div style={styles.navItem}>Diet</div>
            <div style={styles.navItem}>Supplements</div>
            <div style={styles.navItem}>Motivation</div>
            <button style={styles.subscribeBtn} onClick={onSubscribe}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* -------- RIGHT BLOG CONTENT -------- */}
      <div style={styles.right}>
        <div style={styles.blogTitleBox}>
          <span style={styles.blogYellow}>BLOG</span>
          <span style={styles.blogWhite}>FITNESS TIPS</span>
        </div>

        <div style={styles.cardBox}>
          <div style={styles.card}>
            <div style={styles.imgBox}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={idx}
                  src={images[idx]}
                  alt="workout"
                  initial="enter"
                  animate="center"
                  exit="exit"
                  variants={variants}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "none"
                  }}
                />
              </AnimatePresence>
            </div>
            <div style={styles.cardTitle}>10 Best Home Workouts</div>
            <div style={styles.cardPhrase}>{phrases[idx]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
