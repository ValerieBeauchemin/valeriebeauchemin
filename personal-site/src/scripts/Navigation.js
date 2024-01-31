import { Link } from "react-router-dom";
import logo from "../resources/logo.webp";
import "../styles/Navigation.css";

/* Navigation bar for the website */

export default function Navigation() {
  return (
    <nav className="Navigation">
      <div className="Navigation__logo">
        <Link to="/home" title="Go to Homepage">
          <img src={logo} alt="logo" className="Logo" />
        </Link>
      </div>
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <Link to="/about" className="Navigation__link">
            About
          </Link>
        </li>
        <li className="Navigation__list-item">
          <Link to="/tours" className="Navigation__link">
            Tours
          </Link>
        </li>
        <li className="Navigation__list-item">
          <Link to="/contact" className="Navigation__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
