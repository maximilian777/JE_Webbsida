import ProjectLayout from "../../../../layouts/project_layout";

import solnahotel from "../../../../assets/images/solnahotel.jpg";
import solnamall from "../../../../assets/images/solnamall.jpg";

export default function SolnaHotelProject() {
  return (
    <ProjectLayout
      title="Solna Hotel Expansion"
      heroImage={solnahotel}
      meta={{
        start: "May 2024",
        end: "Dec 2024",
        client: "Solna Stad",
        investering: "3.2M SEK"
      }}
    >
      <p>
        Ett projekt som omfattade expansionen av ett hotell i Solna centrum med fokus på modern design och hållbarhet.
      </p>

      <p>
        Projektet integrerade även närliggande handelsytor för att skapa en mer sammanhängande stadsmiljö.
      </p>

      <img src={solnamall} alt="Solna mall integration" />

      <p>
        Slutresultatet förbättrade både turism och lokal ekonomi i området.
      </p>
    </ProjectLayout>
  );
}