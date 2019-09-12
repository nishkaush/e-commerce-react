import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <div>
      <NavLink to="/">Logo here</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/sign-in">Sign in</NavLink>
      <p>Cart</p>
    </div>
  );
};

export default Header;
