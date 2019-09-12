import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class Shop extends Component {
  render() {
    return (
      <Container className="shop__page">
        <h1>Hats</h1>

        <Row className="individual__category">
          <Col className="card">
            <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
            <input type="number" placeholder="Qty" />
            <Button size="sm" variant="dark">
              Buy Now
            </Button>
          </Col>
          <Col className="card">
            <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
            <input type="number" placeholder="Qty" />
            <Button size="sm" variant="dark">
              Buy Now
            </Button>
          </Col>
          <Col className="card">
            <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
            <input type="number" placeholder="Qty" />
            <Button size="sm" variant="dark">
              Buy Now
            </Button>
          </Col>
          <Col className="card">
            <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
            <input type="number" placeholder="Qty" />
            <Button size="sm" variant="dark">
              Buy Now
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Shop;

// <Container className="shop__page">
// <Row className="individual__category">
//   <Col className="card">
//     <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
//   </Col>
//   <Col className="card">
//     <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
//   </Col>
//   <Col className="card">
//     <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
//   </Col>
//   <Col className="card">
//     <img src="https://i.ibb.co/ypkgK0X/blue-beanie.png" alt="" />
//   </Col>
// </Row>
// </Container>
