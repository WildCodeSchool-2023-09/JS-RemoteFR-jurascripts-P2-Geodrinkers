import { Outlet } from "react-router-dom";
import "./components/styles/App.scss";

export default function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}
