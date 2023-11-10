import CardDataHome from "../datas/CardDataHome";
import CardList from "../components/CardList";
import "../components/styles/Home.scss";

export default function Home() {
  return (
    <div className="CardContainer">
      <CardList CardDataHome={CardDataHome} />
    </div>
  );
}
