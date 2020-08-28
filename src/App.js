import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing/Pricing";
import Nav from "./components/Header/Nav";
import Purchase from "./components/Purchase/Purchase";
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
