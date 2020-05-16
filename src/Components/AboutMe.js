import React from "react";

const AboutMe = () => {
  return (
    <div className="left">
      <div className="center picture-container">
        <img className="picture" src="/img/download.png" alt="" />
      </div>
      <h3>HELLO</h3>
      <h2 className="font-Monika">I'm Monika</h2>
      <p className="justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non maecenas
        est et urna non laoreet.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Non maecenas est et urna non laoreet.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. 
      </p>
      <hr />
      <h3 className="center bold">Contact me!</h3>
      <div className="center icons-grid">
        <a href="https://www.linkedin.com/in/monint/" rel="noopener noreferrer" target="_blank"><i className="icons fab fa-linkedin fa-3x"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=monika.intaite@gmail.com" rel="noopener noreferrer" target="_blank"><i className="icons fab fa-google-plus-square fa-3x"></i></a>
        <a href="https://github.com/monint578" rel="noopener noreferrer" target="_blank"><i className="icons fab fa-github-square fa-3x"></i></a>
      </div>
    </div>
  );
};

export default AboutMe;
