import EarthCanvas from "../components/Earth";
import Navbar from "../components/Navbar";
import "../components/styles/SpaceMap.scss";

function SpaceMap() {
  return (
    <>
      <Navbar />
      <div className="space-ctn">
        <EarthCanvas />
      </div>
    </>
  );
}

export default SpaceMap;
