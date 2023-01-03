import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductCard = (props) => {
  const [count, setCount] = useState(0);
  const { imageurl, name, price, addTocart } = props;
  return (
    <>
      <div className="box product">
        <div className="product-img">
          <span className="discount">10% Off</span>
          <img src={imageurl} alt="p-img" />
          <div className="like-btn">
            <span className="count">{count}</span>
            <button onClick={() => setCount(count + 1)}>
              <AiOutlineHeart />
            </button>
          </div>
        </div>
        <div className="product-info">
          <b className="pname">{name}</b>
          <div className="star">
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiFillStar />}
            {<AiOutlineStar />}
          </div>
          <div className="add-btn">
            <b className="price">${price}</b>
            <button className="add" onClick={addTocart}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
