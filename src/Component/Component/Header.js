import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import TopHeader from "./Topheader";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const handleClick = () => {
    setMobile(!mobile);
  };
  return (
    <>
      <TopHeader />
      <header>
        <div className="head-nav">
          <b className="logo">
            sg<span>Cart</span>
          </b>
          <button className="mobile-menu-icon" onClick={handleClick}>
            {mobile ? <ImCross /> : <HiMenu />}
          </button>
        </div>
        <nav className={mobile ? "main-nav" : "close"}>
          <ul className="Navbar-list">
            <li>
              <NavLink className="navlink" to="/" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="toggle_box">
              store
              <div className="store-container">
                <div className="row">
                  <ul>
                    <li>Category</li>
                    <li>iphone</li>
                    <li>ipad</li>
                    <li>iphone</li>
                    <li>macbook</li>
                  </ul>
                  <ul>
                    <li>Accesories</li>
                    <li>iphone</li>
                    <li>ipad</li>
                    <li>iphone</li>
                    <li>macbook</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavLink className="navlink" to="/iphone" onClick={handleClick}>
                iphone
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/ipad" onClick={handleClick}>
                ipad
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/macbook" onClick={handleClick}>
                Macbook
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navlink"
                to="/accesories"
                onClick={handleClick}
              >
                Accesories
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
