import React from "react";
import useFetchData from "./FetchData";
import ProductCard from "./Main/ProductCard";

const Ipad = () => {
  const url = "https://web-production-167a.up.railway.app/mobile";
  const [post] = useFetchData(url);

  return (
    <>
      <div className="product-container">
        {post.map((value) => {
          return (
            <ProductCard
              id={value.id}
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
