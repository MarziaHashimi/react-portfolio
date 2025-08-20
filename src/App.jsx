//src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app font-sans">
      <Navbar />
      <Header message="Welcome to my portfolio! Excited to share my work with you." />
      <Profile
        photo="assets/profile.jpg"
        title="Frontend Developer"
        bio="I am passionate about building user-friendly web applications and continuously learning modern technologies."
      />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

