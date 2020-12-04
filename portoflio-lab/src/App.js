import React from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import HomeThreeColumns from "./components/HomeThreeColumns";
import HomeAboutUs from "./components/HomeAboutUs";
import HomeWhoWeHelp from "./components/HomeWhoWeHelp";
import HomeContact from "./components/HomeContact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/o-co-chodzi" component={HomeThreeColumns} />
        <Route path="/o-nas" component={HomeAboutUs} />
        <Route path="/fundacja-i-organizacje" component={HomeWhoWeHelp} />
        <Route path="/kontakt" component={HomeContact} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;
