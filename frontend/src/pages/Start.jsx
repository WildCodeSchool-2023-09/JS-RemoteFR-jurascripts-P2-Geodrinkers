import { Link } from "react-router-dom";
import "../components/styles/Start.scss";

export default function Start() {
  return (
    <section className="start-ctn">
      <video src="./video/stars.mp4" autoPlay loop muted />
      <img src="./img/geo.png" alt="Geodrinkers" />
      <div className="btn-ctn">
        <Link to="/home" className="btn-link">
          <button type="button">C'EST PARTI</button>
        </Link>
      </div>
    </section>
  );
}
