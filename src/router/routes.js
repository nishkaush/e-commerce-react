import React from "react";
import { Route, Switch } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./../containers/home/home";
import Shop from "./../containers/shop/shop";
import Contact from "./../containers/contact/contact";
import SignIn from "./../containers/signIn/signIn";
import SingleShopCategory from "./../containers/singleShopCategory/singleShopCategory";
import Checkout from "./../containers/checkout/checkout";

export const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/sign-in" component={SignIn} />
    <Route exact path="/checkout" component={Checkout} />
    <Route
      exact
      path="/shop/:categoryType"
      component={SingleShopCategory}
    ></Route>
  </Switch>
);
