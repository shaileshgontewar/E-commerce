import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import ProductCard from "./Main/ProductCard";

const Accesories = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://web-production-167a.up.railway.app/myData")
      .then((response) => {
        setPost(response.data);
      });
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
export default Accesories;
