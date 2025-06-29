import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm Dhakshana, a passionate Computer Science graduate from ACGCET, Karaikudi.
I specialize in front-end development and enjoy building clean, responsive user interfaces.
I'm currently working with React.js, CSS, and Bootstrap, and I'm also exploring Java to strengthen my backend skills.
        </p>

        <div className="about-details">
          <div><strong>🎓 Education:</strong> B.E. Computer Science</div>
          <div><strong>📍 Location:</strong> Chennai</div>
          <div><strong>📧 Email:</strong> dhakshanaramachandran@gmail.com</div>
          <div><strong>📱 Phone:</strong> +91 8754993113</div>
        </div>
      </div>
    </section>
  );
}

export default About;
