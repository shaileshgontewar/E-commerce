import React from "react";
import Product from "./Product";
import { IoMdArrowDropdown } from "react-icons/io";

const HomeProduct = () => {
  return (
    <>
      <div className="home-product-container">
        <h2>Best Seller</h2>
        <nav className="search-nav">
          <ul className="search-list">
            <li>
              All
              <span>
                <IoMdArrowDropdown />
              </span>
            </li>
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
