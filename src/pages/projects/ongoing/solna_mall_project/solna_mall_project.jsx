import ProjectLayout from "../../../../layouts/project_layout";

import solnamall from "../../../../assets/images/solnamall.jpg";
import centralen from "../../../../assets/images/centralen.jpg";

export default function SolnaMallProject() {
  return (
    <ProjectLayout
      title="Solna Mall Redevelopment"
      heroImage={solnamall}
      meta={{
        start: "Sep 2023",
        end: "Apr 2024",
        client: "Unibail-Rodamco",
        investering: "7M SEK"
      }}
    >
      <p>
        Detta projekt omfattade en total ombyggnation av Solna Mall med fokus på kundupplevelse och modern arkitektur.
      </p>

      <p>
        Vi arbetade med nya entréer, förbättrad ljussättning och optimerad butikslayout.
      </p>

      <img src={centralen} alt="Urban integration concept" />

      <p>
        Resultatet blev en mer attraktiv och effektiv handelsmiljö.
      </p>
    </ProjectLayout>
  );
}