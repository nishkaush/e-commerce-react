import React from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./../singleCard/singleCard";

const Cards = ({ heading, itemsArr }) => {
  return (
    <React.Fragment>
      <h1>{heading}</h1>

      <Row className="individual__category">
        {itemsArr.map(({ id, ...props }) => (
          <Col key={id}>
            <SingleCard {...props} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Cards;
