// src/Components/Home.jsx
import "./Home.css";
import profilePic from "../pages/images/photo1.jpg";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="stars"></div>

      <div className="home-container">
        <div className="home-left">
          <img src={profilePic} alt="Dhakshana" className="profile-pic" />
        </div>

        <div className="home-right">
          <h1> Hi, I'm <span className="highlight">Dhakshana R</span></h1>
          <p>
            I'm a passionate <strong>Software Developer</strong> who crafts smooth, elegant, and interactive websites.
            I turn designs into reality using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>CSS</strong> with full focus on performance and responsiveness.
            <br />
I hold a B.E. in Computer Science from <strong>ACGCET, Karaikudi</strong>. Currently, I'm exploring <strong>Java</strong>  to grow as a better software developer.          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
