import "bootstrap/dist/css/bootstrap.min.css";
import "./static/styles/root.scss";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";

function Root() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default Root;
