import React from "react";
import Product from "./Product";

const HomeProduct = () => {
  return (
    <>
      <div className="home-product-container">
        <h2>Best Seller</h2>
        <nav className="search-nav">
          <ul className="Navbar-list">
            <li>All</li>
            <li>mac</li>
            <li>IPHONE</li>
            <li>ipad</li>
            <li>ipod</li>
          </ul>
        </nav>
      </div>
      <Product />
    </>
  );
};

export default HomeProduct;
