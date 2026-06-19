import ProjectLayout from "../../../../layouts/project_layout";
import stockholm from "../../../../assets/images/stockholm.jpg";

export default function StockholmProject() {
  return (
    <ProjectLayout
      title="Stockholm Guide"
      heroImage={stockholm}
      meta={{
        start: "Jan 2025",
        end: "Mar 2025",
        client: "Stockholm City",
        investering: "2M SEK"
      }}
    >
      <p>
        I detta projekt...
      </p>

      <p>
        Tills vidare...
      </p>

      <img src={stockholm} alt="Stockholm" />

      <p>
        Slut
      </p>
    </ProjectLayout>
  );
}