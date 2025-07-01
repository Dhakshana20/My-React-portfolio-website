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
            <h4>🛡️ Malicious URL Detection</h4>
            <p>
              A machine learning web app to detect malicious URLs using Flask, Random Forest, and PCA. Achieved 96% accuracy. Deployed with a simple UI.
            </p>
          </div>

          <div className="project-card">
            <h4>🍽️ Swiggy Console App</h4>
            <p>
              Java-based console application for food ordering with menu display, input handling, OTP simulation, and class-based structure.
            </p>
          </div>

          <div className="project-card">
            <h4>🏦 IOB Bank Website</h4>
            <p>
              A static bank website created using semantic HTML, CSS and Bootstrap. Designed to be responsive and accessible.
            </p>
          </div>

          <div className="project-card">
            <h4>🎵 Moodify Music App</h4>
            <p>
              A mood-based music player built with React. Plays Tamil songs based on user-selected moods and displays matching quotes. Features voice-over, dark UI theme, and location-aware greeting.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
