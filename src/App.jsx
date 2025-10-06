import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Classes from "./Pages/Classes";
import Trainers from "./Pages/Trainers";
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import FitnessSignup from "./Pages/FitnessSignup";

function AppContent() {
  const location = useLocation();


  const hideNavbarFooter =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <div style={{ paddingTop: "0px" }}>

      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<FitnessSignup />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


