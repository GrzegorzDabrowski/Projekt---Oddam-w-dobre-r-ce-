import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";

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
