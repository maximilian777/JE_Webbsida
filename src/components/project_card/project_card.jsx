import { Link } from "react-router-dom";
import "./project_card.css";

export default function ProjectCard({ image, title, description, link }) {
  return (
    <Link to={link} className="project-card">
      <img src={image} alt={title} />
      <div className="content">
        <div className="divider" />
        <div className="text-wrapper">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
        </div>
      </div>
    </Link>
  );
}