import stockholm from "../assets/images/stockholm.jpg";
import solnaMall from "../assets/images/solnamall.jpg";
import solnaHotel from "../assets/images/solnahotel.jpg";
import centralen from "../assets/images/centralen.jpg";

export const projects = [
  {
    id: "stockholm",
    title: "Stockholm Guide",
    status: "ongoing",
    image: stockholm,
    description: "Stadsutveckling och analysprojekt i centrala Stockholm.",
    path: "/projects/stockholm",
  },
  {
    id: "solna-mall",
    title: "Solna Mall",
    status: "ongoing",
    image: solnaMall,
    description: "Ombyggnation av handelsområde i Solna centrum.",
    path: "/projects/solna-mall",
  },
  {
    id: "solna-hotel",
    title: "Solna Hotel Expansion",
    status: "finished",
    image: solnaHotel,
    description: "Hotellutbyggnad med fokus på modern design och hållbarhet.",
    path: "/projects/solna-hotel",
  },
  {
    id: "centralen",
    title: "Centralen Development",
    status: "finished",
    image: centralen,
    description: "Infrastrukturprojekt runt Stockholms centralstation.",
    path: "/projects/centralen",
  }
];