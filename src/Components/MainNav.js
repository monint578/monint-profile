import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="mainav">
      <ul>
        <li className="">
          <NavLink className="NavLink selected" to="/about/work-experience">
            <h2>About me</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/my-projects/toraberu">
            <h2>My projects</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/about/why-programming">
            <h2>Why I chose porgramming</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default MainNav;
