// src/components/Profile.jsx
import React from "react";

export default function Profile({ photo, title, bio }) {
  return (
    <section className="profile text-center flex flex-col items-center justify-center py-12">
      <img src={photo} alt="Profile" className="profile-img" />
      <h2>{title}</h2>
      <p>{bio}</p>
    </section>
  );
}




