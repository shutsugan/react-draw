import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <ul className="header flex p-1">
    <li>
      <NavLink exact activeClassName="is-active" to="/">
        Draw
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="is-active" to="/stats">
        Stats
      </NavLink>
    </li>
  </ul>
);

export default Header;
