import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="mainav">
      <div className="show-for-mobile">
        <h3 className="center bold">What do you want to know about me?</h3>
      </div>
      <ul>
        <li className="mobile-navlink">
          <NavLink
            className="NavLink selected"
            activeClassName="is-active"
            to="/about/work-experience"
            isActive={(match, location) => {
              return location.pathname.includes("/about") && !location.pathname.includes("/about/why-programming");
            }}
          >
            <h2 className="smaller-text">About me</h2>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink
            className="NavLink selected"
            activeClassName="is-active"
            to="/my-projects/toraberu"
            isActive={(match, location) => {
              return location.pathname.includes("/my-projects");
            }}
          >
            <h2 className="smaller-text">My projects</h2>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink
            className="NavLink selected"
            activeClassName="is-active"
            to="/about/why-programming"
          >
            <h2 className="smaller-text">Why I chose programming</h2>
          </NavLink>
        </li>
      </ul>
      <div className="show-for-mobile">
        <hr />
      </div>
    </nav>
  );
};
export default MainNav;
