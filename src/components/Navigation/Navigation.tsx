import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="#">Items</a>
          </li>
          <li className="main-nav__item">
            <a href="#">Progress</a>
          </li>
          <li className="main-nav__item">
            <a href="#">Profile</a>
          </li>
          <li className="main-nav__item">
            <a href="#">Administration</a>
          </li>
          <li className="main-nav__item main-nav__item--cta">
            <a href="#">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
