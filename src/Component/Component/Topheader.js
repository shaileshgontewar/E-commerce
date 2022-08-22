import React from "react";
import "./Style.css";

const TopHeader = () => {
  return (
    <>
      <div>
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
                <img src="./images/Web/profile_icon.svg" alt="" />
                My Profile
              </li>
              <li>
                <img src="./images/Web/bag_icon.svg" alt="" /> 2 Item
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default TopHeader;
