import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Project from "./pages/project/project";

import StockholmProject from "./pages/projects/ongoing/stockholm_project/stockholm_project";
import SolnaMallProject from "./pages/projects/ongoing/solna_mall_project/solna_mall_project";
import SolnaHotelProject from "./pages/projects/finished/solna_hotel_project/solna_hotel_project";
import CentralenProject from "./pages/projects/finished/centralen_project/centralen_project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Main Grid Hub Screen */}
        <Route path="project" element={<Project />} />

        {/* Hardcoded Sub-Page Targets */}
        <Route path="projects/stockholm" element={<StockholmProject />} />
        <Route path="projects/solna-mall" element={<SolnaMallProject />} />
        <Route path="projects/solna-hotel" element={<SolnaHotelProject />} />
        <Route path="projects/centralen" element={<CentralenProject />} />
      </Route>
    </Routes>
  );
}

export default App;