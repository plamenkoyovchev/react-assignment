import React from "react";
import { NavLink } from "react-router-dom";
import { LinkItem } from "../../data/navigationAccess";

interface IProps {
  item: LinkItem;
}

const NavItem: React.FC<IProps> = ({ item }) => {
  return (
    <li className="main-nav__item">
      <NavLink to={item.link} activeClassName="active-link">
        {item.title}
      </NavLink>
    </li>
  );
};

export default NavItem;
