import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
import TopHeader from "./Topheader";
import { HiMenu } from "react-icons/hi";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <TopHeader />
      <header>
        <div className="head-nav">
          <img src="./images/ishop.png" alt="logo" className="logo" />
          <button
            className="mobile-menu-icon"
            onClick={() => setMobile(!mobile)}
          >
            {mobile ? <ImCross /> : <HiMenu />}
          </button>
        </div>
        {/* <Navbar /> */}
        <nav className={mobile ? "main-nav" : "close"}>
          <ul className="Navbar-list">
            <li>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </li>
            <li className="toggle_box">store</li>
            <li>
              <NavLink className="navlink" to="/iphone">
                iphone
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/ipad">
                ipad
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/macbook">
                Macbook
              </NavLink>
            </li>
            <li>
              <NavLink className="navlink" to="/accesories">
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