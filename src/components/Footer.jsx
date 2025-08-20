//src/components/ Footer.jsx
import React from "react";
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-3">
        <a href="https://github.com/MarziaHashimi" className="nav-link">GitHub</a>
        <a href="https://www.linkedin.com/in/marzia-hashimi-16581a251/" className="nav-link">LinkedIn</a>
        <a href="https://x.com/marzia_hashimi2" className="nav-link">Twitter</a>
      </div>
      <p className="footer-para">© {new Date().getFullYear()} Mariza</p>
    </footer>
  );
}

