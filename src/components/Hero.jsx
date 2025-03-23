import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I’m <span className="highlight">Seddik Sahraoui</span>.
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        A Computer Science student passionate about building AI-driven solutions that make an impact.
      </motion.p>
    </section>
  );
}
