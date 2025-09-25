// src/components/Home.jsx
import "./Home.css";
import profilePic from "../pages/images/photo1.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-left">
          <img src={profilePic} alt="Dhakshana" className="profile-pic" />
        </div>
        <div className="home-right">
          <h1>Hi, I'm Dhakshana R</h1>
          <p>
            I’m a <strong>Recent graduate in Computer Science</strong> and an aspiring 
            <strong> Software Developer</strong> currently based in <strong>Dubai, UAE</strong>.  
            With hands-on experience through internships as a <strong>Full Stack Developer</strong> 
            and <strong>React.js Developer</strong>, I specialize in building responsive, 
            performance-driven web applications.  
            <br /><br />
            My technical skills include <strong>HTML</strong>, <strong>CSS</strong>, 
            <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Bootstrap</strong>, 
            and <strong>PHP</strong>, along with experience in <strong>Python (ML)</strong> projects 
            like Heart Attack Prediction and Malicious URL Detection.  
            <br /><br />
            I’m also exploring <strong>Java</strong> to strengthen my backend development skills 
            and actively seeking full-time opportunities in the UAE to contribute my expertise 
            and grow as a developer.  
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
