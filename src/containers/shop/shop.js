import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "../../components/cards/cards";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsArr: [
        {
          heading: "Hats",
          itemsArr: [
            {
              imgUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
              name: "Beanie",
              price: 20,
              id: 1
            },
            {
              imgUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
              name: "Beanie",
              price: 20,
              id: 2
            },
            {
              imgUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
              name: "Beanie",
              price: 20,
              id: 3
            },
            {
              imgUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
              name: "Beanie",
              price: 20,
              id: 3
            }
          ]
        }
      ]
    };
  }

  render() {
    return (
      <Container className="shop__page">
        {this.state.sectionsArr.map(({ heading, itemsArr }) => (
          <Cards key={heading} heading={heading} itemsArr={itemsArr} />
        ))}
      </Container>
    );
  }
}

export default Shop;

// <Col>
// <Image rounded src="https://i.ibb.co/ypkgK0X/blue-beanie.png" />
// <input type="number" placeholder="Qty" />
// <Button size="sm" variant="dark">
//   Buy Now
// </Button>
// </Col>
