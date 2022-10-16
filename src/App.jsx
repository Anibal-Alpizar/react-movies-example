import styles from "./components/App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1 className={styles.title}>Movies</h1>{" "}
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetail />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
