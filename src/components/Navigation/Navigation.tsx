import React from "react";

import "./Navigation.css";

import { NavLink, withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../store/users/userActions";

const Navigation: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const onLogoutClickHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <NavLink to="/items">Items</NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink to="/progress">Progress</NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="main-nav__item">
            <NavLink to="/administration">Administration</NavLink>
          </li>
          <li
            onClick={onLogoutClickHandler}
            className="main-nav__item main-nav__item--cta"
          >
            <a>Logout</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
