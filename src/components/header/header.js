import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { connect } from "react-redux";

import "./header.css";

function calculateTotalItems(arr) {
  return arr.reduce((acc, currentItem) => {
    console.log("prev,curr", acc, currentItem.qty);
    return acc + currentItem.qty;
  }, 0);
}

const Header = props => {
  return (
    <Container className="header__links__container">
      <Row className="mt-4 mb-1">
        <Col xs={3} md={5} lg={6} className="left__content">
          <Link to="/">Logo here</Link>
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
            <Badge variant="danger">
              {calculateTotalItems(props.itemsInCart)}
            </Badge>
            <MdShoppingCart size="25"></MdShoppingCart>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log("state in mapStateToProps", state.checkoutItemsArr);
  return {
    itemsInCart: state.checkoutItemsArr
  };
};
export default connect(mapStateToProps)(Header);
