import React from "react";
import CardsData from "./CardsData";
import ProductCard from "./ProductCard";
import "./product.css";

const Product = () => {
  return (
    <>
      <div className="product-container">
        {CardsData.filter((value) => {
          return value.category === "Mobile";
        }).map((value) => {
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
export default Product;
