import React from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import { MdAdd, MdRemove } from "react-icons/md";
import { addItemToCartAC } from "./../../actionCreators/actionCreators";
import { connect } from "react-redux";

class SingleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: ""
    };
  }

  handleChange(e) {
    this.setState({ qty: e.target.value });
  }

  handleIncOrDec(type) {
    let currentCount = this.state.qty || 0;
    type === "inc"
      ? this.setState({ qty: (currentCount += 1) })
      : this.setState({ qty: (currentCount -= 1) });
  }

  handleAddItem(e) {
    e.preventDefault();
    const { name, imageUrl, price, id } = this.props;
    const payload = {
      name,
      imageUrl,
      price,
      id,
      qty: parseFloat(this.state.qty)
    };
    this.props.onAddItemToCart(payload);
  }

  render() {
    const { name, imageUrl, price } = this.props;
    return (
      <Card className="mt-3" style={{ minWidth: "200px", maxWidth: "250px" }}>
        <Card.Img
          src={`${imageUrl}`}
          variant="top"
          style={{ maxHeight: "275px" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>${price}</Card.Text>
          <InputGroup className="pr-5" aria-label="First group">
            <InputGroup.Prepend>
              <Button
                variant="secondary"
                onClick={this.handleIncOrDec.bind(this, "inc")}
              >
                <MdAdd />
              </Button>
            </InputGroup.Prepend>
            <FormControl
              type="number"
              as="input"
              placeholder="Qty"
              onChange={this.handleChange.bind(this)}
              value={this.state.qty}
            ></FormControl>
            <InputGroup.Append>
              <Button
                variant="secondary"
                onClick={this.handleIncOrDec.bind(this, "dec")}
              >
                <MdRemove />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Card.Body>
        <Button variant="success" onClick={this.handleAddItem.bind(this)}>
          Add to cart
        </Button>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItemToCart: payload => dispatch(addItemToCartAC(payload))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SingleCard);
