import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
