import React, { useContext } from "react";
import { GlobalStore } from "../Context/GlobalContext";
import ProductCard from "./Main/ProductCard";
import CardsData from "../Context/CardsData";
// import useFetchData from "./FetchData";

const Accesories = () => {
  // const url = "https://web-production-167a.up.railway.app/myData";
  // const [post] = useFetchData(url);
  const { addTocart } = useContext(GlobalStore);

  return (
    <>
      <div className="product-container">
        {CardsData.filter((value) => {
          return value.category === "Accesories";
        }).map((value) => {
          return (
            <ProductCard
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
export default Accesories;
