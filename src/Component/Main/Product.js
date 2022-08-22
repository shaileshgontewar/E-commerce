import React from "react";
import CardsData from "./CardsData";
import { AiFillStar } from "react-icons/ai";
import "./product.css";

const Product = () => {
  return (
    <>
      <div className="product-container">
        {CardsData.filter((value) => {
          return value.category === "Mobile";
        }).map((value) => {
          return (
            <div className="box product" key={value.id}>
              <img src={value.imageurl} alt="" />
              <b className="pname">{value.name}</b>
              <div className="star">
                {" "}
                {<AiFillStar />} {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
                {<AiFillStar />}
              </div>
              <b className="price">${value.price}</b>
              <button></button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Product;
