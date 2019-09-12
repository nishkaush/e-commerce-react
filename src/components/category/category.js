import React from "react";
import { withRouter } from "react-router-dom";

const Category = ({ title, history, url, flex, imageUrl }) => {
  const myStyle = {
    minWidth: "350px",
    minHeight: "300px",
    flex: flex,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0.5%"
  };
  return (
    <div className="homepage__category" style={myStyle}>
      <div
        style={{
          background: "white",
          opacity: 0.7,
          padding: "2%",
          minWidth: "100px",
          minHeight: "60px"
        }}
      >
        <p>{title.toUpperCase()}</p>
        <button onClick={() => history.push(url)}>Shop now</button>
      </div>
    </div>
  );
};

export default withRouter(Category);
