import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./../containers/home/home";
import Shop from "./../containers/shop/shop";
import Contact from "./../containers/contact/contact";
import SignIn from "./../containers/signIn/signIn";

export const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/sign-in" component={SignIn} />
  </Switch>
);
