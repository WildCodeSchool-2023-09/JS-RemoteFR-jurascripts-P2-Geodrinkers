import CardDataHome from "../datas/CardDataHome";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import "../components/styles/Home.scss";

export default function Home() {
  return (
    <>
      <Navbar />
      <CardList CardDataHome={CardDataHome} />
    </>
  );
}
