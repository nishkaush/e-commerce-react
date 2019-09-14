import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Container, Row, Col, Badge } from "react-bootstrap";

import "./header.css";

const Header = props => {
  return (
    <Container className="header__links__container">
      <Row className="mt-4 mb-1">
        <Col xs={3} md={5} lg={6} className="left__content">
          <Link exact to="/">
            Logo here
          </Link>
        </Col>

        <Col className="right__content">
          <NavLink exact to="/shop">
            Shop
          </NavLink>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
          <NavLink exact to="/sign-in">
            Sign in
          </NavLink>
          <NavLink exact to="/checkout">
            <Badge variant="danger">9</Badge>
            <MdShoppingCart size="25"></MdShoppingCart>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
