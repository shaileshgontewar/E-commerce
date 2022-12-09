import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./Main/ProductCard";

const Macbook = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://web-production-167a.up.railway.app/laptop")
        .then((response) => {
          setPost(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
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
export default Macbook;
