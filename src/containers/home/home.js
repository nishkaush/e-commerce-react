import React from "react";
import Categories from "./../../components/categories/categories";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Categories />
      </div>
    );
  }
}

export default Home;
