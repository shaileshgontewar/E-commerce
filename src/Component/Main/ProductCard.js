import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "./product.css";

const ProductCard = (props) => {
  const { imageurl, name, price, id } = props;
  return (
    <>
      <NavLink
        state={{ imageurl: imageurl, name: name, price: price, id: id }}
        to={`/singleproduct/${id}`}
      >
        <div className="box product" id={id}>
          <img src={imageurl} alt="hello" />
          <b className="pname">{name}</b>
          <div className="star">
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiOutlineStar />}
          </div>
          <b className="price">${price}</b>
        </div>
      </NavLink>
    </>
  );
};

export default ProductCard;
