import "./contact.css";
import placeholderPerson from "../../assets/images/placeholder_person.png";

export default function Contact() {
  return (
    <div className="contact">

      <div className="contact-hero" />

      <div className="contact-content">

        <div className="contact-container fadeIn">

          <img
            className="contact-image"
            src={placeholderPerson}
            alt="Profile"
          />

          <div className="contact-card">

            <h2>Jonnie E</h2>

            <p className="contact-role">Roll</p>

            <p className="contact-description">
              Liten beskrivning
            </p>

            <div className="contact-details">
              <p><strong>Phone:</strong> +46 70 888 88 88</p>
              <p><strong>Email:</strong> jonnie@example.com</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}