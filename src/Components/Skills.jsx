// src/Components/Skills.jsx
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'React', level: 70 },
    { name: 'Java (Core)', level: 55 },
    { name: 'HTML/CSS/Bootstrap', level: 90 },
    { name: 'Python', level: 55 },
    { name: 'MySQL', level: 85 },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="stars"></div>

      <div className="skills-content">
        <h2 className="skills-title">🛠️ My <span>Skills</span></h2>
        <div className="circular-skills-grid">
          {skills.map((skill, index) => (
            <div className="circle-skill-card" key={index}>
              <div className="progress-circle">
                <svg>
                  <circle cx="50" cy="50" r="45"></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    style={{ strokeDashoffset: 282 - (282 * skill.level) / 100 }}
                  ></circle>
                </svg>
                <div className="progress-text">{skill.level}%</div>
              </div>
              <h4>{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
