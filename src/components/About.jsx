// src/components/About.jsx
import React, { useState } from "react";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="about-section about text-center py-12">
      <h2>About Me</h2>
      <p>I am learning React and aiming to become a skilled frontend developer.</p>
      <ul className="list-none p-0">
          <li>💻 Interested in coding challenges</li>
          <li>✏️ Enjoy sketching</li>
          <li>🥘 Love cooking</li>
      </ul>
      {showMore && (
        <p className="mt-4">
          I am passionate about using technology to make a positive difference in my community and
          empowering others through education.
        </p>
      )}
      <button className="btn show-more-btn" onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

