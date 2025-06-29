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
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        <div className="circular-skills-grid">
          {skills.map((skill, index) => (
            <div className="circle-skill-card" key={index}>
              <div className="progress-circle" style={{ '--value': skill.level }}>
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
