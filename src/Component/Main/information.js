import React from "react";
import { useLocation } from "react-router-dom";

const Information = () => {
  const location = useLocation();
  const { imageurl, name, price } = location.state;
  return (
    <>
      <div className="single-product">
        <img src={imageurl} alt="hello" />
        <b className="pname">{name}</b>
        <b className="price">${price}</b>
        <button className="add-product">Add Product</button>
      </div>
    </>
  );
};
export default Information;
