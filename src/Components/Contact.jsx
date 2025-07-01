// src/Components/Contact.jsx
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="stars"></div>

      <div className="contact-content">
        <h2> <span>Contact</span> Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
