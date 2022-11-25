import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./Main/ProductCard";

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
            <ProductCard
              key={value.id}
              imageurl={value.imageurl}
              name={value.name}
              price={value.price}
            />
          );
        })}
      </div>
    </>
  );
};
export default Ipad;
