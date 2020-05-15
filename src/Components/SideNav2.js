import React from "react";
import { NavLink } from "react-router-dom";

const SideNav2 = () => {
  return (
    <div>
      <ul>
        <li className="">
          <NavLink className="NavLink selected" to="/my-projects/toraberu">
            <h2>Toraberu</h2>
            <p>toraberu.herokuapp.com</p>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/my-projects/profile-page">
            <h2>Profile page</h2>
            <p>monint.lt</p>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/my-projects/other">
            <h2>Other projects</h2>
          </NavLink>
        </li>
        <li>
        <NavLink className="NavLink selected" to="/my-projects/in-progress">
            <h2>In progress</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav2;
