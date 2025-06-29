import './Services.css';

function Services() {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">What I Do</h2>
      <div className="services-grid">
        <div className="service-card">
        <img src="/icons/coding.png" alt="Web Design" />
          <h4>Web Design</h4>
          <p>Creating clean, modern and responsive interfaces using HTML, CSS and Bootstrap.</p>
        </div>

        <div className="service-card">
          <img src="/icons/reactbg.png" alt="React" />
          <h4>React Development</h4>
          <p>Building dynamic single-page applications using React, JSX, and component-based architecture.</p>
        </div>

        <div className="service-card">
          <img src="/icons/javaimg.png" alt="Java" height="50px"/>
          <h4>Java Console Projects</h4>
          <p>Developed mini-projects using core Java like food ordering app,portfolio etc.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
