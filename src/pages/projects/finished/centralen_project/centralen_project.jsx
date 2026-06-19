import ProjectLayout from "../../../../layouts/project_layout";

import centralen from "../../../../assets/images/centralen.jpg";
import bygg1 from "../../../../assets/images/bygg1.png";

export default function CentralenProject() {
  return (
    <ProjectLayout
      title="Centralen Development"
      heroImage={centralen}
      meta={{
        start: "Feb 2025",
        end: "Aug 2025",
        client: "Trafikverket",
        investering: "5M SEK"
      }}
    >
      <p>
        Detta projekt fokuserade på utvecklingen av ett nytt område runt Stockholms centralstation.
        Målet var att förbättra flödet av människor och modernisera infrastrukturen.
      </p>

      <p>
        Arbetet inkluderade planering, visualisering och samarbete med flera tekniska team.
      </p>

      <img src={bygg1} alt="Centralen construction" />

      <p>
        Resultatet blev en mer effektiv och modern knutpunkt för kollektivtrafik.
      </p>
    </ProjectLayout>
  );
}