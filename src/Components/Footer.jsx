// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">

          {/* Column 1: Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Column 2: Connect */}
          <div className="footer-column">
            <h4>Connect</h4>
            <a href="https://github.com/Dhakshanasundari" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/dhakshana-r" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:dhakshanaramachandran@gmail.com">dhakshanaramachandran@gmail.com</a>
            <p>📞 +91 8754993113</p>
          </div>

          {/* Column 3: Address */}
          <div className="footer-column">
            <h4>Address</h4>
            <p>35, Thangam Womens Hostel</p>
            <p>S. South Shivan Kovil Street</p>
            <p>Vadapalani, Chennai</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dhakshana R | Built with  using React</p>
      </div>
    </footer>
  );
}

export default Footer;
