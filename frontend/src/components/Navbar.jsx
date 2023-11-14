import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.scss";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-ctn">
        <Link to="/" className="navbar-logo">
          <img src="./img/logo-geo.png" alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick} aria-hidden="true">
          <img
            src={click ? "./img/close.png" : "./img/menu.png"}
            alt={click ? "./img/close.png" : "./img/menu.png"}
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/home"
              className="nav-link"
              onClick={() => {
                setClick(false);
              }}
            >
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              className="nav-link"
              onClick={() => {
                setClick(false);
              }}
            >
              Carte
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/memory"
              className="nav-link"
              onClick={() => {
                setClick(false);
              }}
            >
              Memory
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
