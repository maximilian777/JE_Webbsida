import { projects } from "../../data/projects.jsx";
import ProjectCard from "../components/project_card/project_card";

export default function Project() {

  const ongoing = projects.filter(p => p.status === "ongoing");
  const finished = projects.filter(p => p.status === "finished");

  return (
    <div className="projectPage">

      <div className="projectHero">
        <h1 className="heroTitle">Referensprojekt</h1>
      </div>

      <div className="projectContent">

        <h2 className="sectionTitle">Pågående Projekt</h2>

        <div className="projectGrid">

          {ongoing.map(p => (
            <ProjectCard
              key={p.id}
              image={p.image}
              title={p.title}
              description="Projektbeskrivning..."
              link={p.path}
            />
          ))}

        </div>

        <h2 className="sectionTitle">Slutförda Projekt</h2>

        <div className="projectGrid">

          {finished.map(p => (
            <ProjectCard
              key={p.id}
              image={p.image}
              title={p.title}
              description="Projektbeskrivning..."
              link={p.path}
            />
          ))}

        </div>

      </div>
    </div>
  );
}