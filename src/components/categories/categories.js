import React, { Component } from "react";
import "./categories.css";
import Category from "./../category/category";

class Categories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smallCategoriesArr: [
        {
          title: "Hats",
          url: "/shop/hats",
          id: 1,
          flex: 1,
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png"
        },
        {
          title: "Jackets",
          url: "/shop/jackets",
          id: 2,
          flex: 1,
          imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png"
        },
        {
          title: "Sneakers",
          url: "/shop/sneakers",
          id: 3,
          flex: 1,
          imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png"
        }
      ],
      bigCategoriesArr: [
        {
          title: "Mens",
          url: "/shop/mens",
          id: 4,
          flex: 1.5,
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png"
        },
        {
          title: "Womens",
          url: "/shop/womens",
          id: 5,
          flex: 1.5,
          imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png"
        }
      ]
    };
  }
  render() {
    return (
      <div className="categories__container">
        <div className="small__categories">
          {this.state.smallCategoriesArr.map(({ id, ...otherProps }) => (
            <Category key={id} {...otherProps} />
          ))}
        </div>
        <div className="big__categories">
          {this.state.bigCategoriesArr.map(({ id, ...otherProps }) => (
            <Category key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
