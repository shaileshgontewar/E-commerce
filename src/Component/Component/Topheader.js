import React from "react";
import "./Style.css";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBagFill } from "react-icons/bs";

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
            <li>
              <FaUserAlt />
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
