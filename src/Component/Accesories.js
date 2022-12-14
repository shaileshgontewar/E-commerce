import React from "react";
import ProductCard from "./Main/ProductCard";
import useFetchData from "./FetchData";

const Accesories = () => {
  const url = "https://web-production-167a.up.railway.app/myData";
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
export default Accesories;
