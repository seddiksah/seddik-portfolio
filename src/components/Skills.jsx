import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python", "C++", "JavaScript", "React",
  "TensorFlow", "PostgreSQL", "WebSockets", "Git", "Agile"
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
