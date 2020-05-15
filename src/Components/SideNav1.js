import React from "react";
import { NavLink } from "react-router-dom";

const SideNav1 = () => {
  return (
    <div>
      <ul>
        <li className="">
          <NavLink className="NavLink selected" to="/about/work-experience">
            <h2>Work experience</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/about/education">
            <h2>Education</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/about/activities">
            <h2>Activities</h2>
          </NavLink>
        </li>
        <li className="">
          <NavLink className="NavLink selected" to="/about/hobbies">
            <h2>Hobbies</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideNav1;
