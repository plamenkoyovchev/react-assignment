import React from "react";

import "./Navigation.css";

import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__items">
          <NavLink to="/items" className="main-nav__items">
            Items
          </NavLink>
          <NavLink to="/progress" className="main-nav__item">
            Progress
          </NavLink>
          <NavLink to="/profile" className="main-nav__item">
            Profile
          </NavLink>
          <NavLink to="/administration" className="main-nav__item">
            Administration
          </NavLink>
          <li className="main-nav__item main-nav__item--cta">
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
