import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
// import ProductCard from "./Main/ProductCard";

const Ipad = () => {
  const [post, setPost] = useState([]);

  const getData = () => {
    axios
      .get("https://shailesh-ecommerce.herokuapp.com/api/mobile")
      .then((response) => {
        setPost(response.data);
      });
  };

  useEffect(() => getData(), []);
  return (
    <>
      <div className="product-container">
        {post.map((value) => {
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
            </div>
          );
        })}
      </div>
      {/* <h3>ipad</h3>
      <div className="product-container">
        {post.map((value) => {
          <ProductCard
            id={value.productId}
            image={value.imageurl}
            namep={value.name}
            pPrice={value.price}
          />;
        })}
      </div> */}
    </>
  );
};
export default Ipad;
