import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-area">
        <h2>
          food<span className="logo-color">Anda</span>
        </h2>
      </div>
      <div className="menu-area">
        <ul>
          <li>
            <a href="./home">Home</a>
          </li>
          <li>
            <a href="./shop">Shop</a>
          </li>
          <li>
            <a href="./contact">Contact</a>
          </li>
          <li>
            <a href="./order">Order</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
