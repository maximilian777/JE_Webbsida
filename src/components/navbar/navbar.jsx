import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import placeholder from "../../assets/images/placeholder.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        MySite
        <img src={placeholder} alt="placeholder" />
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/project">Projekt</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}