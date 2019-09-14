import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import data from "./../../data/data";
import Cards from "./../../components/cards/cards";

class SingleShopCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      items: [],
      redirect: false
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    let categoryType = this.props.match.params.categoryType;
    let foundCategory = data.find(
      e => e.title.toLowerCase() === categoryType.toLowerCase()
    );
    foundCategory && Object.keys(foundCategory).length
      ? this.setState({
          title: foundCategory.title,
          items: foundCategory.items
        })
      : this.setState({ redirect: true });
  }

  render() {
    return (
      <Container>
        {this.state.redirect ? (
          <Redirect path="/" />
        ) : (
          <Cards heading={this.state.title} itemsArr={this.state.items}></Cards>
        )}
      </Container>
    );
  }
}

export default SingleShopCategory;
