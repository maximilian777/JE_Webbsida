import "./project.css";
import ProjectCard from "../../components/project_card/project_card";
import { projects } from "../../data/projects_data.jsx";

export default function Project() {
  const ongoing = projects.filter(p => p.status === "ongoing");
  const finished = projects.filter(p => p.status === "finished");

  return (
    <div className="projectPage">
      <div className="projectHero">
        <h1 className="heroTitle">Referensprojekt</h1>
      </div>

      <div className="projectContent">
        <h2 className="sectionTitle fadeIn delay1">Pågående Projekt</h2>
        <div className="projectGrid fadeIn delay2">
          {ongoing.map(p => (
            <ProjectCard
              key={p.id}
              image={p.image}
              title={p.title}
              description={p.description || "Projektbeskrivning..."}
              link={p.path}
            />
          ))}
        </div>

        <h2 className="sectionTitle fadeIn delay3">Slutförda Projekt</h2>
        <div className="projectGrid fadeIn delay4">
          {finished.map(p => (
            <ProjectCard
              key={p.id}
              image={p.image}
              title={p.title}
              description={p.description || "Projektbeskrivning..."}
              link={p.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}