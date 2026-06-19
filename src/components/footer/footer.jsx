import "./footer.css";
import { Link } from "react-router-dom";

import instagramIcon from "../../assets/images/instagram.svg";
import linkedinIcon from "../../assets/images/linkdin.svg";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h4>Contact</h4>
        <p>Email: example@email.com</p>
        <p>Phone: +46 123 456 789</p>
      </div>

      <div className="footer-section">
        <h4>Navigation</h4>

        <Link to="/">Home</Link>
        <Link to="/project">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="footer-section">
        <h4>Address</h4>

        <a
          href="https://maps.app.goo.gl/YoQh78CSsWLNHfQJ6"
          target="_blank"
          rel="noreferrer"
        >
          Stockholm City Centre
        </a>
      </div>

      <div className="footer-section">
        <h4>Social</h4>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

    </footer>
  );
}
