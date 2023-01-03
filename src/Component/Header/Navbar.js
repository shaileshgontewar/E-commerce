import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav close">
        <ul className="Navbar-list">
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/store">
              store
            </NavLink>
          </li>
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
    </>
  );
};

export default Navbar;
