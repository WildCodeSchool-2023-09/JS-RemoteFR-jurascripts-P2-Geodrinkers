import { useRouteError } from "react-router-dom";
import "../components/styles/ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div className="Error-ctn">
      <p>
        {error.status === "404" ? "404 Page Not Found" : ""}
        Error 404, cette page est en cour de développement...
      </p>
    </div>
  );
}
