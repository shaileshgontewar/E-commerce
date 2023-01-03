import React, { useContext } from "react";
import { GlobalStore } from "../../Context/GlobalContext";
import ProductCard from "./ProductCard";
import CardsData from "../../Context/CardsData";

const Product = () => {
  const { addTocart } = useContext(GlobalStore);
  console.log(CardsData);
  return (
    <>
      <div className="product-container">
        {CardsData.filter((value) => {
          return value.category === "Mobile";
        }).map((value) => {
          return (
            <ProductCard
              id={value.id}
              key={value.id}
              imageurl={value.imageurl}
              name={value.name}
              price={value.price}
              addTocart={() => addTocart(value)}
            />
          );
        })}
      </div>
    </>
  );
};
export default Product;
