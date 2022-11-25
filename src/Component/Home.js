import React from "react";
import HomeProduct from "./Main/HomeProduct";
import Support from "./Main/Support";
import Slide from "./Slide/slider";

const Home = () => {
  return (
    <>
      {/* <div>Home</div> */}
      <Slide></Slide>
      <HomeProduct />
      <Support />
    </>
  );
};
export default Home;
