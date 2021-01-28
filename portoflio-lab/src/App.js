import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import NotFound from "./components/pages/NotFound";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Register from "./components/pages/Register";

function App() {
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home user={user} isLogged={isLogged} setIsLogged={setIsLogged} />
        </Route>
        <Route path="/logowanie">
          {isLogged ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/rejestracja" component={Register} />
        <Route path="/wylogowano" component={Logout} />
        <Route path="/oddaj-rzeczy" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
