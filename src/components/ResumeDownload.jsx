import React from "react";
import { motion } from "framer-motion";

export default function ResumeDownload() {
  return (
    <section className="resume-section">
      <motion.div
        className="resume-wrapper"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="/Seddik_Sahraoui_Resume.pdf"
          download
          className="resume-button"
        >
          Download My Resume
        </a>
      </motion.div>
    </section>
  );
}
