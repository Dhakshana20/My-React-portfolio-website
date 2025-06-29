import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      

      <div className="projects-content">
        <h2 className="section-title">My Projects</h2>
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
              A static bank website created using semantic HTML5, CSS3 and Bootstrap. Designed to be responsive and accessible.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;