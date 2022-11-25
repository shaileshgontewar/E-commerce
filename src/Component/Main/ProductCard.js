import React from "react";
import { AiFillStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./product.css";

const ProductCard = (props) => {
  const { imageurl, name, price } = props;
  return (
    <>
      <NavLink
        state={{ imageurl: imageurl, name: name, price: price }}
        to="/information"
      >
        <div className="box product">
          <img src={imageurl} alt="hello" />
          <b className="pname">{name}</b>
          <div className="star">
            {<AiFillStar />} {<AiFillStar />}
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiFillStar />}
          </div>
          <b className="price">${price}</b>
        </div>
      </NavLink>
    </>
  );
};

export default ProductCard;
