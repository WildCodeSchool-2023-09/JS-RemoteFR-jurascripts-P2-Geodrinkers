import Start from "./pages/Start";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SpaceMap from "./pages/SpaceMap";
import Memory from "./pages/Memory";
import "./components/styles/App.scss";

export default function App() {
  return (
    <>
      <Start />
      <Navbar />
      <Home />
      <SpaceMap />
      <Memory />
    </>
  );
}
