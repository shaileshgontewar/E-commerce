import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./product.css";

const ProductCard = (props) => {
  const { productId, image, namep, pPrice } = props;
  return (
    <>
      <div className="box product" key={productId}>
        <img src={image} alt="hello" />
        <b className="pname">{namep}</b>
        <div className="star">
          {<AiFillStar />} {<AiFillStar />}
          {<AiFillStar />}
          {<AiFillStar />}
          {<AiFillStar />}
        </div>
        <b className="price">${pPrice}</b>
      </div>
    </>
  );
};

export default ProductCard;
