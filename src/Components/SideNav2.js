import React from "react";
import { NavLink } from "react-router-dom";

const SideNav2 = () => {
  return (
    <div>
      <ul>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/my-projects/toraberu">
            <h2 className="smaller-text-link">Toraberu</h2>
            <p>toraberu.herokuapp.com</p>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/my-projects/profile-page">
            <h2 className="smaller-text-link">Profile page</h2>
            <p>monint.lt</p>
          </NavLink>
        </li>
        <li className="mobile-navlink">
          <NavLink className="NavLink selected" activeClassName="is-active" to="/my-projects/sibus">
              <h2 className="smaller-text-link">Sibus</h2>
              <p>In progress</p>
          </NavLink>
        </li>
      </ul>
      <div className="show-for-mobile">
        <hr />
      </div>
    </div>
  );
};

export default SideNav2;
