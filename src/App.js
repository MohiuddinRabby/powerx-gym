import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import Purchase from "./components/Purchase/Purchase";
import StripePayment from "./components/StripePayment/StripePayment";
function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
        <div className="py-5">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/pricing" component={Pricing}></Route>
            <Route path="/purchase" component={Purchase}></Route>
            <Route path="/payment" component={StripePayment}></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
