//src/components/ Navbar.jsx
import React from "react";
export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 p-4 bg-gray-900 text-white">
      <a href="#home" className="nav-link">Home</a>
      <a href="#about" className="nav-link">About</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
}
