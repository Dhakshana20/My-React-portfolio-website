import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">  {/* Added id="contact" here */}
      <div className="footer-top">
        <div className="footer-links">
        
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <a href="https://github.com/Dhakshanasundari" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/dhakshana-r" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:dhakshanaramachandran@gmail.com">dhakshanaramachandran@gmail.com</a>
            <p>📞 +91 8754993113</p>
          </div>

          <div className="footer-column">
            <h4>Address</h4>
            <p>35, Thangam Womens Hostel</p>
            <p>S.South Shivan Kovil Street</p>
            <p>Vadapalani, Chennai</p>
          </div>
          
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dhakshana | Built with React 💻</p>
      </div>
    </footer>
  );
}

export default Footer;
