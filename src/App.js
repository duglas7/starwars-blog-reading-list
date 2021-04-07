import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import injectContext from "./store/appContext";
import Characters from "./views/characters";
import CharactersId from "./views/CharactersId";
import Home from "./views/home";
import notFound from "./views/notFound";
import Planets from "./views/planets";
import PlanetsId from "./views/PlanetsId";
import Starships from "./views/starships";
import StarshipsId from "./views/StarshipsId";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/starships" component={Starships} />
          <Route exact path="/characters/:id" component={CharactersId}></Route>
          <Route exact path="/planets/:id" component={PlanetsId}></Route>
          <Route exact path="/starships/:id" component={StarshipsId}></Route>
          <Route component={notFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default injectContext(App);
