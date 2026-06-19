import "./project.css";
import ProjectCard from "../../components/project_card/project_card";

import stockholm from "../../assets/images/stockholm.jpg";
import solnaMall from "../../assets/images/solnamall.jpg";
import solnaHotel from "../../assets/images/solnahotel.jpg";
import centralen from "../../assets/images/centralen.jpg";

export default function Project() {
  return (
    <div className="projectPage">
      <div className="projectHero">
        <h1 className="heroTitle">Referensprojekt</h1>
      </div>

      <div className="projectContent">
        <h2 className="sectionTitle fadeIn delay1">Pågående Projekt</h2>
        <div className="projectGrid fadeIn delay2">
          <ProjectCard
            image={stockholm}
            title="Stockholm Guide"
            description="Stadsutveckling och analysprojekt i centrala Stockholm."
            link="/projects/stockholm"
          />
          <ProjectCard
            image={solnaMall}
            title="Solna Mall Redevelopment"
            description="Ombyggnation av handelsområde i Solna centrum."
            link="/projects/solna-mall"
          />
        </div>

        <h2 className="sectionTitle fadeIn delay1">Slutförda Projekt</h2>
        <div className="projectGrid fadeIn delay2">
          <ProjectCard
            image={solnaHotel}
            title="Solna Hotel Expansion"
            description="Hotellutbyggnad med fokus på modern design och hållbarhet."
            link="/projects/solna-hotel"
          />
          <ProjectCard
            image={centralen}
            title="Centralen Development"
            description="Infrastrukturprojekt runt Stockholms centralstation."
            link="/projects/centralen"
          />
        </div>
      </div>
    </div>
  );
}