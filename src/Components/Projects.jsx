// src/Components/Projects.jsx
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="stars"></div>

      <div className="projects-content">
        <h2 className="section-title"> My <span>Projects</span></h2>

        <div className="projects-grid">
          <div className="project-card">
            <h4>🏦 IOB Bank Website</h4>
            <p>
              A static bank website built with semantic HTML, CSS, and Bootstrap. Fully responsive and accessible for desktop and mobile devices.
            </p>
          </div>

          <div className="project-card">
            <h4>📚 MyBookStore</h4>
            <p>
              A responsive online bookstore built with HTML, CSS, and JavaScript. Displays featured books with images, titles, authors, and prices. Includes interactive “View Details” functionality using localStorage and a structured header and footer with navigation, social links, and contact info.
            </p>
          </div>

          <div className="project-card">
            <h4>🎵 Moodify Music App</h4>
            <p>
              Moodify is a mood-based music player that recommends Tamil songs based on user-selected moods. Features a dynamic playlist, play/pause controls, dark-themed UI, smooth animations, and responsive layouts.
            </p>
          </div>

          <div className="project-card">
            <h4>🍽️ Swiggy Console App</h4>
            <p>
              A Java console application for food ordering. Includes menu display, user input handling, OTP simulation, and class-based design for structured functionality.
            </p>
          </div>

          <div className="project-card">
            <h4>🛡️ Malicious URL Detection</h4>
            <p>
              A machine learning web app using Flask, Random Forest, and PCA to detect malicious URLs. Achieved 96% accuracy with a simple, user-friendly interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
