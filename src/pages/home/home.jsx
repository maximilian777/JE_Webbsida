import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home">

      <div className="home-hero">

        <h1 className="home-title">Exempel Titel</h1>

        <Link to="/project" className="home-button">
          Se Referensprojekt →
        </Link>

      </div>

    </div>
  );
}