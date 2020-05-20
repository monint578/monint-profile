import React from "react";
import Slider from "../Slider";

const images = ["/img/sibus1.png", "/img/sibus2.png", "/img/sibus3.png"];

const ProjectProgress = () => {
  return (
    <div className="full-height">
      <h1 className="center pb smaller-text">Sibus</h1>
      <h3 className="smaller-text">
        I have started this project because I couldn‘t find a cooking
        application that would suit my needs, so I decided to make one myself.
        Soon I understood I don‘t have enough experience so I started Udemy
        courses. I plan to create an ingredients calculator for serving size and
        an ingredient shopping list. Users will also be able to save recipes and
        leave notes for themselves. Currently, Sibus is in the designing phase.
        I‘m very excited to keep working on Sibus because it is my biggest
        project yet.
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
      <h3 className="center bold">
        Technologies which I will use for this project
      </h3>
      <div className="center icons-grid">
        <div className="icon-size ">
          <img src="/img/Golang.png" className="icon-img" alt="" />
        </div>
        <div className="icon-size pl">
          <img src="/img/postgresql.png" className="icon-img" alt="" />
        </div>
        <i className="fab fa-react icons fa-3x"></i>
        <i className="fab fa-figma icons fa-3x"></i>
        <i className="fab fa-docker icons fa-3x"></i>
      </div>
    </div>
  );
};

export default ProjectProgress;
