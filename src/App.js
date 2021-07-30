import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import TVShows from "./pages/tvShows";
import Movies from "./pages/movies";
import News from "./pages/popular";
import Navbar from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tv-shows" component={TVShows} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/news" component={News} />
      </Switch>
    </>
  );
}

export default App;
