import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact</h2>

      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert("This form is a placeholder. To make it functional, connect it to an email service.");
        }}
      >
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" rows="5" className="contact-textarea" />
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}
