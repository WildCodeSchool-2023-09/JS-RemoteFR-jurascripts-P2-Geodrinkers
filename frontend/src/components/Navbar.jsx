import { useState } from "react";
import "./styles/Navbar.scss";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="navbar">
      <div className="navbar-ctn">
        <img
          src="./src/assets/img/logo-geo.png"
          alt="logo"
          className="navbar-logo"
        />
        <div className="menu-icon" onClick={handleClick} aria-hidden="true">
          <img
            src={
              click ? "./src/assets/img/close.png" : "./src/assets/img/menu.png"
            }
            alt={
              click ? "./src/assets/img/close.png" : "./src/assets/img/menu.png"
            }
          />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <p className="nav-link" onClick={handleClick} aria-hidden="true">
              Acceuil
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" onClick={handleClick} aria-hidden="true">
              Carte
            </p>
          </li>
          <li className="nav-item">
            <p className="nav-link" onClick={handleClick} aria-hidden="true">
              Memory
            </p>
          </li>
        </ul>
      </div>
    </nav>
  );
}
