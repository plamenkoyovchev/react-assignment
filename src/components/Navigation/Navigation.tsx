import React from "react";

import "./Navigation.css";
import NavItem from "./NavItem";

import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store/users/userActions";
import { RootStore } from "../../store/store";
import { navigationAccess } from "../../data/navigationAccess";

const Navigation: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state: RootStore) => state.user);
  const onLogoutClickHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const userNavItems = navigationAccess[currentUser?.role || ""];

  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="main-nav__items">
          {currentUser &&
            userNavItems.map((item) => <NavItem key={item.id} item={item} />)}
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
