import React from "react";
import "./Style.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
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
                    <NavLink to="/profile">Lonin</NavLink>
                  </li>
                  <li>profile</li>
                  <li>setting</li>
                </ul>
              </div>
            </li>
            <li>
              <BsFillBagFill />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default TopHeader;
