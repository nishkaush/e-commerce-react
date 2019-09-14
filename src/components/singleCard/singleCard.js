import React from "react";
import { Card, InputGroup, Button, FormControl } from "react-bootstrap";
import { MdAdd, MdRemove } from "react-icons/md";

const SingleCard = ({ name, imageUrl, price }) => {
  return (
    <Card className="mt-2" style={{ minWidth: "200px", maxWidth: "250px" }}>
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
            <Button variant="secondary">
              <MdAdd />
            </Button>
          </InputGroup.Prepend>
          <FormControl placeholder="Qty"></FormControl>
          <InputGroup.Append>
            <Button variant="secondary">
              <MdRemove />
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
      <Button variant="success">Add to cart</Button>
    </Card>
  );
};

export default SingleCard;
