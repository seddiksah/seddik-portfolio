import React from "react";
import profilePic from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <img src={profilePic} alt="Seddik Sahraoui" className="about-image" />
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            I’m a third-year Computer Science student at Carleton University specializing in Artificial Intelligence and Machine Learning.
            I’m passionate about building thoughtful, user-focused software from intelligent systems to interactive web applications.
            Outside of academics, I play varsity soccer, explore creative side projects, and enjoy solving real-world problems with code.
          </p>
        </div>
      </div>
    </section>
  );
}
