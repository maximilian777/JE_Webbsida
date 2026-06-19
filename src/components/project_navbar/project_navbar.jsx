import { useState } from "react";
import { Link } from "react-router-dom";
import "./project_navbar.css";

export default function ProjectNavBar() {
  const [ongoingOpen, setOngoingOpen] = useState(true);
  const [doneOpen, setDoneOpen] = useState(true);

  return (
    <nav className="projectNavBar">
      <div className="projectSection">
        <div className="projectHeader" onClick={() => setOngoingOpen(!ongoingOpen)}>
          <span>Pågående Projekt</span>
          <span className={`arrow ${ongoingOpen ? "open" : ""}`}>›</span>
        </div>
        <div className={`projectList ${ongoingOpen ? "" : "closed"}`}>
          <div className="projectListInner">
            <Link to="/projects/stockholm">Stockholm Guide</Link>
            <Link to="/projects/solna-mall">Solna Mall</Link>
          </div>
        </div>
      </div>

      <div className="projectSection">
        <div className="projectHeader" onClick={() => setDoneOpen(!doneOpen)}>
          <span>Slutförda Projekt</span>
          <span className={`arrow ${doneOpen ? "open" : ""}`}>›</span>
        </div>
        <div className={`projectList ${doneOpen ? "" : "closed"}`}>
          <div className="projectListInner">
            <Link to="/projects/solna-hotel">Solna Hotel Expansion</Link>
            <Link to="/projects/centralen">Centralen Development</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}