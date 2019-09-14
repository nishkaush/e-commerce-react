import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "../../components/cards/cards";
import sectionsArr from "./../../data/data";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsArr
    };
  }

  render() {
    return (
      <Container className="shop__page">
        {this.state.sectionsArr.map(({ id, title, items, routeName }) => (
          <Cards key={id} heading={title} itemsArr={items} route={routeName} />
        ))}
      </Container>
    );
  }
}

export default Shop;
