// src/components/Skills.jsx
import { useState } from "react";
import './Skills.css';

function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const frontendSkills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
    { name: "React", level: 60 }, // 🔁 Updated to 60%
  ];

  const frontendProjects = [
    "🌐 Portfolio Website",
    "🎵 Moodify Music App"
  ];

  const backendSkills = [
    { name: "Java (Core)", level: 60 },
    { name: "MySQL", level: 85 },
    { name: "Python", level: 55 }, // ✅ Added Python
  ];

  const backendProjects = [
    "🍽️ Swiggy Console App",
    "🛡️ Malicious URL Detection (ML & DL)" // ✅ Added project
  ];

  const renderCircleCard = (skill, index) => (
    <div className="circle-skill-card" key={index}>
      <div className="progress-circle">
        <svg>
          <circle cx="50" cy="50" r="45" />
          <circle
            cx="50"
            cy="50"
            r="45"
            style={{
              strokeDashoffset: 282 - (282 * skill.level) / 100,
            }}
          />
        </svg>
        <div className="progress-text">{skill.level}%</div>
      </div>
      <h4>{skill.name}</h4>
    </div>
  );

  return (
    <section id="skills" className="skills-section">
      <div className="stars"></div>

      <div className="skills-content">
        <h2 className="skills-title">🛠️ My <span>Skills & Projects</span></h2>

        <div className="skill-tabs">
          <button
            className={activeCategory === "frontend" ? "active" : ""}
            onClick={() => setActiveCategory("frontend")}
          >
            Frontend
          </button>
          <button
            className={activeCategory === "backend" ? "active" : ""}
            onClick={() => setActiveCategory("backend")}
          >
            Backend
          </button>
        </div>

        {activeCategory === "frontend" && (
          <>
            <div className="circular-skills-grid">
              {frontendSkills.map(renderCircleCard)}
            </div>
            <div className="project-grid">
              <h4>Projects:</h4>
              {frontendProjects.map((proj, idx) => (
                <div className="project-tag" key={idx}>{proj}</div>
              ))}
            </div>
          </>
        )}

        {activeCategory === "backend" && (
          <>
            <div className="circular-skills-grid">
              {backendSkills.map(renderCircleCard)}
            </div>
            <div className="project-grid">
              <h4>Projects:</h4>
              {backendProjects.map((proj, idx) => (
                <div className="project-tag" key={idx}>{proj}</div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Skills;
