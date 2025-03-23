import React from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeDownload from "./components/ResumeDownload";
import About from "./components/About";
import "./scss/custom.scss";

export default function App() {
  return (
    <div className="app-container">
      {/* Navigation */}
      <header className="nav-bar top-left">
        <div className="logo">Seddik</div>
        <nav className="nav-links-horizontal">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </nav>
      </header>

      {/* Content */}
      <main className="main-content">
        <motion.section id="hero" className="section hero-full centered-hero">
          <Hero />
          <div className="scroll-down">
            <a href="#about" aria-label="Scroll Down">
              <div className="arrow" />
            </a>
          </div>
        </motion.section>

        <motion.section id="about" className="section">
          <About />
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