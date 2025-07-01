// src/components/About.jsx
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
I’m Dhakshana, a curious and creative developer with a passion for building efficient and user-friendly applications. I enjoy solving real-world problems through code and am continuously learning to become a skilled and versatile software developer.        </p>
      </motion.div>
    </section>
  );
}

export default About;
