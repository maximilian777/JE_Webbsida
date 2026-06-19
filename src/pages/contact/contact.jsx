import "./contact.css";
import placeholderPerson from "../../assets/images/placeholder_person.png";

export default function Contact() {
  return (
    <div className="contact">

      <div className="contact-hero" />

      <div className="contact-content">

        <div className="contact-container">

          <img
            className="contact-image"
            src={placeholderPerson}
            alt="Profile"
          />

          <div className="contact-card">

            <h2>John Doe</h2>

            <p className="contact-role">Frontend Developer</p>

            <p className="contact-description">
              I am a developer focused on building clean and modern web
              applications with React and modern UI systems.
            </p>

            <div className="contact-details">
              <p><strong>Phone:</strong> +46 070 123 456</p>
              <p><strong>Email:</strong> john@example.com</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}