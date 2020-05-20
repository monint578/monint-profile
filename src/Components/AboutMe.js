import React from "react";
import CvNav from "./CvNav";

const AboutMe = () => {
  return (
    <div className="left">
      <div className="center picture-container">
        <img className="picture" src="/img/download.png" alt="" />
      </div>
      <h3>HELLO</h3>
      <h2 className="font-Monika">I'm Monika</h2>
      <p className="justify">
      I‘m a self-taught web developer currently learning front-end and back-end programming. After graduating from university and working in the textile manufacturing sector I shifted my focus to programming for the web. I‘m familiar with Node.js, MongoDB, React and I just started teaching myself Golang. I‘m searching for an internship or junior developer job opportunities in Kaunas. 
      </p>
      <hr />
      <h3 className="center bold">Contact me!</h3>
      <div className="center icons-grid-sm pt-sm">
        <a href="https://www.linkedin.com/in/monint/" rel="noopener noreferrer" target="_blank"><i className="icons fab fa-linkedin fa-3x"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=monika.intaite@gmail.com" rel="noopener noreferrer" target="_blank"><i className="icons fab fa-google-plus-square fa-3x"></i></a>
        <a href="https://github.com/monint578" rel="noopener noreferrer" target="_blank"><i className="icons fab fa-github-square fa-3x"></i></a>
      </div>
      <div className="show-for-mobile">
        <h3 className="center bold pt-sm">or</h3>
      </div>
      <div className="show-for-mobile pt-sm">
        < CvNav />
        <hr />
      </div>
    </div>
  );
};

export default AboutMe;
