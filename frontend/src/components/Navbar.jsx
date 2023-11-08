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
          <li className="nav-item">Acceuil</li>
          <li className="nav-item">Carte</li>
          <li className="nav-item">Memory</li>
        </ul>
      </div>
    </nav>
  );
}
