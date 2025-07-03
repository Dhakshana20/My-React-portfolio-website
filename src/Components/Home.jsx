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
          <h1>Hi, I'm Dhakshana R </h1>
          <p>
            I'm a passionate <strong>Software Developer</strong> who crafts smooth, elegant, and interactive websites.
            I specialize in <strong>React</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong> with focus on responsiveness and performance.
            <br />
            I hold a B.E. in Computer Science from <strong>ACGCET, Karaikudi</strong>. Currently exploring <strong>Java</strong> to deepen my backend skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
