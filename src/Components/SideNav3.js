import React from "react";
import { NavLink } from "react-router-dom";

const SideNav3 = () => {
  return (
    <div>
      <ul>
        <li className="">
          <NavLink className="NavLink selected" to="/hobbies/planning">
            <h2>I love planning</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/hobbies/crafting">
            <h2>Hand-made crafting</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/hobbies/games">
            <h2>Playing games</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/hobbies/other">
            <h2>Other</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav3;
