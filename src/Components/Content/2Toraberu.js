import React from "react";
import Slider from "../Slider";

const images = [
  "/img/toraberu2.png",
  "/img/toraberu3.png",
  "/img/toraberu4.png",
];

const Toraberu = () => {
  return (
    <div>
      <a href="https://toraberu.herokuapp.com/" rel="noopener noreferrer" target="_blank" >
        <h1 className="center pb">
          toraberu.herokuapp.com
        </h1>
      </a>
      <h3>
        This project was created by remaking the YelpCamp project from the Udemy
        course: The Web Developer Bootcamp.
      </h3>
      <div className="carousel-container">
        <Slider
          options={{
            draggable: ">1",
            wrapAround: true,
            autoPlay: "4500",
          }}
        >
          {images.map((image, index) => (
            <div className="carousel" key={index}>
              <img src={image} alt="" className="carousel-cell" />
            </div>
          ))}
        </Slider>
      </div>
      <hr />
      <div className="button-flex">
        <a className="button" href="https://toraberu.herokuapp.com/" rel="noopener noreferrer" target="_blank">
          <span>Toraberu Page <i className="far fa-paper-plane"></i></span>
          <div className="circle"></div>
        </a>
        <a className="button" href="https://github.com/monint578/toraberu" rel="noopener noreferrer" target="_blank">
          <span>Toraberu GitHub <i className="fab fa-github"></i></span>
          <div className="circle"></div>
        </a>
        <a className="button" href="https://monint-yelpcamp.herokuapp.com/" rel="noopener noreferrer" target="_blank">
          <span>YelpCamp Page <i className="far fa-paper-plane"></i></span>
          <div className="circle"></div>
        </a>
        <a className="button" href="https://github.com/monint578/yelp-camp" rel="noopener noreferrer" target="_blank">
          <span>YelpCamp GitHub <i className="fab fa-github"></i></span>
          <div className="circle"></div>
        </a>
      </div>
      <hr />
      <h3 className="center bold">Technologies used for this project</h3>
      <div className="center icons-grid">
          <i className="fab fa-node-js fa-3x icons"></i>
          <div className="icon-img">
            <img src="/img/express-seeklogo.png" alt="" />
          </div>
          <div className="icon-img">
            <img src="/img/mongodb-logo.png" alt="" />
          </div>
          <i className="fab fa-bootstrap icons fa-3x"></i>
          <i className="fab fa-docker icons fa-3x"></i>
      </div>
    </div>
  );
};

export default Toraberu;
