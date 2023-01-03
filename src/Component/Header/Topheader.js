import React, { useContext } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GlobalStore } from "../../Context/GlobalContext";

const TopHeader = () => {
  const { cartItem } = useContext(GlobalStore);
  return (
    <>
      <nav className="head-list">
        <div className="head-list1">
          <ul>
            <li>EN</li>
            <li>$</li>
          </ul>
        </div>
        <div className="head-list2">
          <ul>
            <li className="login-btn">
              <FaUserAlt />
              <div className="login-container">
                <ul>
                  <li>
                    <NavLink to="/profile">Login</NavLink>
                  </li>
                  <li>profile</li>
                  <li>setting</li>
                </ul>
              </div>
            </li>
            <li className="cart">
              <NavLink to="/singleproduct">
                <FaShoppingCart />
                <span> {cartItem.length === 0 ? " " : cartItem.length}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default TopHeader;
