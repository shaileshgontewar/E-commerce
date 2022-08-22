import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";

const Macbook = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://shailesh-ecommerce.herokuapp.com/laptop")
      .then((response) => {
        setPost(response.data);
      });
  }, []);
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
    </>
  );
};
export default Macbook;
