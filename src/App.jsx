import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeDownload from "./components/ResumeDownload";
import "./scss/custom.scss";

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <header className="nav-bar">
        <nav className="nav-wrapper">
          <h1 className="logo">Seddik</h1>
          <ul className="nav-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Content */}
      <main className="main-content">
        <motion.section id="hero" className="section">
          <Hero />
        </motion.section>

        <motion.section id="projects" className="section">
          <Projects />
        </motion.section>

        <motion.section id="skills" className="section">
          <Skills />
        </motion.section>

        <motion.section id="contact" className="section">
          <Contact />
        </motion.section>

        <motion.section className="section">
          <ResumeDownload />
        </motion.section>
      </main>
    </div>
  );
}