import React from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./../singleCard/singleCard";
import { Link } from "react-router-dom";

const Cards = ({ route, heading, itemsArr }) => {
  const itemsToShow = route ? 4 : itemsArr.length;
  return (
    <React.Fragment>
      {route ? (
        <Link to={`/shop/${route}`}>
          <h1 className="mt-5">{heading}</h1>
          <hr />
        </Link>
      ) : (
        <h2 className="mt-5">{heading}</h2>
      )}
      <Row className="individual__category">
        {itemsArr.map(({ id, ...props }, ind) =>
          ind < itemsToShow ? (
            <Col key={id}>
              <SingleCard {...props} id={id} />
            </Col>
          ) : null
        )}
      </Row>
      <br />
    </React.Fragment>
  );
};

export default Cards;
