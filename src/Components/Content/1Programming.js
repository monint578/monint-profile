import React from "react";
import { NavLink } from "react-router-dom";

const Programming = () => {
  return (
    <div className="full-height">
      <h1 className="center pb smaller-text">Why I chose programming</h1>
      <h3 className="pt">
        I have started my career in the textile manufacturing sector but soon I
        realized that I wanted to learn and grow more. Such opportunities in
        this sector were limited. My friend suggested to look into the IT field
        – and so I did. I‘ve started learning the basics of web development on
        Codecademy. After learning HTML, CSS, and JavaScript I tried creating an
        online recipe book{" "}
        <NavLink className="text-pink" to="/my-projects/sibus">
          Sibus
        </NavLink>{" "}
        but soon I noticed that I‘m lacking some knowledge. Therefore, I
        completed <em>The Web Developer Bootcamp</em> course on Udemy. Along the
        way, I‘ve made some small projects and learned about jQuery, Node.js,
        Express, and MongoDB. To learn further I remade the course‘s YelpCamp
        project into my first big project{" "}
        <NavLink className="text-pink" to="/my-projects/toraberu">
          Toraberu
        </NavLink>
        . At the moment I‘m learning Golang with the help of the{" "}
        <em>Web Development w/ Google’s Go</em> course on Udemy and also
        designing my{" "}
        <NavLink className="text-pink" to="/my-projects/sibus">
          Sibus
        </NavLink>{" "}
        project.
      </h3>

      <div className="img-udemy">
        <img src="/img/udemy.png" alt="" />
      </div>
    </div>
  );
};

export default Programming;
