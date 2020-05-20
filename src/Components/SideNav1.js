import React from "react";
import { NavLink } from "react-router-dom";

const SideNav1 = () => {
  return (
    <div>
      <ul>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/about/work-experience">
            <h2 className="smaller-text">Work experience</h2>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/about/education">
            <h2 className="smaller-text">Education</h2>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/about/activities">
            <h2 className="smaller-text">Activities</h2>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/about/other">
            <h2 className="smaller-text">Things I love to do</h2>
          </NavLink>
        </li>
      </ul>
      <div className="show-for-mobile">
        <hr />
      </div>
    </div>
  );
};

export default SideNav1;
