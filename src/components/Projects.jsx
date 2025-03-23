import React from "react";
import { motion } from "framer-motion";

const projectList = [
  {
    title: "Neural Network Image Classifier",
    desc: "Hybrid CNN-GRU network with 90% test accuracy. Built with TensorFlow, Keras, NumPy.",
  },
  {
    title: "AI Email Filter",
    desc: "TF-IDF + K-means clustering to classify emails with 90% prediction accuracy.",
  },
  {
    title: "Fitness Club Management System",
    desc: "Python/PostgreSQL app with REST APIs to manage members, trainers, and schedules.",
  },
  {
    title: "Meridian Metrics Visualizer",
    desc: "C++ system to manage sessions and visualize real-time health data.",
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
