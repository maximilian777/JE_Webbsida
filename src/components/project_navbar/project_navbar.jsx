import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects.jsx";
import "./project_navbar.css";

export default function ProjectNavBar() {
  const [ongoingOpen, setOngoingOpen] = useState(true);
  const [doneOpen, setDoneOpen] = useState(true);

  const ongoing = projects.filter(p => p.status === "ongoing");
  const finished = projects.filter(p => p.status === "finished");

  return (
    <nav className="projectNavBar">

      <div className="projectSection">

        <div
          className="projectHeader"
          onClick={() => setOngoingOpen(!ongoingOpen)}
        >
          <span>Pågående Projekt</span>
          <span className={`arrow ${ongoingOpen ? "open" : ""}`}>›</span>
        </div>

        <div className={`projectList ${ongoingOpen ? "" : "closed"}`}>
          <div className="projectListInner">

            {ongoing.map(project => (
              <Link key={project.id} to={project.path}>
                {project.title}
              </Link>
            ))}

          </div>
        </div>

      </div>

      <div className="projectSection">

        <div
          className="projectHeader"
          onClick={() => setDoneOpen(!doneOpen)}
        >
          <span>Slutförda Projekt</span>
          <span className={`arrow ${doneOpen ? "open" : ""}`}>›</span>
        </div>

        <div className={`projectList ${doneOpen ? "" : "closed"}`}>
          <div className="projectListInner">

            {finished.map(project => (
              <Link key={project.id} to={project.path}>
                {project.title}
              </Link>
            ))}

          </div>
        </div>

      </div>

    </nav>
  );
}