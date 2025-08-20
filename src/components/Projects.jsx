// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    name: "FutureStar High School",
    image: "/assets/project1.jpg",
    description: "A sleek website for FutureStar High School.",
    live: " https://marziahashimi.github.io/FutureStar-School/",
    tech: ["HTML", "CSS", "JavaScript"],
    featured: true
  },
  {
    name: "Client Manager App",
    image: "/assets/project2.jpg",
    description: "A responsive web app for managing client data with dynamic UI updates.",
    live: "https://marziahashimi.github.io/Client-Manager-App/",
    tech: ["HTML", "CSS", "Javascript"],
    featured: false
  },
  {
    name: "Foodie Hub",
    image: "/assets/project3.jpg",
    description: "A sleek web app for exploring dishes, organizing recipes, and celebrating food culture.",
    live: " https://marziahashimi.github.io/foodie-hub/",
    tech: ["HTML", "CSS", "Javascript"],
    featured: false
  },
   {
    name: "Sugarland Theaters",
    image: "/assets/project4.jpg",
    description: "A user-friendly platform for browsing movies and booking theater seats with ease.",
    live: "https://marziahashimi.github.io/Sugarland-Theater/",
    tech: ["HTML", "CSS", "Javascript"],
    featured: false
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects py-12">
      <h2 className="text-center">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.image} alt={proj.name} />
            <h3>{proj.name}</h3>
            <p>{proj.description}</p>
            {proj.featured && <span>🌟 Featured</span>}
            <div>
              {proj.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={proj.live}  className="nav-link">View Live</a>
          </div>
        ))}
      </div>
    </section>
  );
}
