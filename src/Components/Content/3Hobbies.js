import React from "react";
import Slider from "../Slider";
import Accordion from "../Accordion";

const images = ["/img/minty1.png", "/img/minty2.png", "/img/minty3.png"];

const Hobbies = () => {
  return (
    <div className="full-height">
      <h1 className="center pb smaller-text">Things I love to do</h1>
      <Accordion>
        <div className="accor active">
          <div className="accor-head pt-sm">
            <h3 className="smaller-text-ed">Hand-made crafting</h3>
          </div>
          <div className="accor-body">
            <p>
              My favorite thing to do is create something new from scratch. A
              few years ago I started making jewelry from liquid resin and
              storing precious memories forever. I even started my jewelry store
              Minty. I also design and sew clothes for myself and my friends.
            </p>
            <div className="carousel-container">
              <Slider
                options={{
                  draggable: ">1",
                  wrapAround: true,
                  groupCells: true,
                  autoPlay: "6500",
                }}
              >
                {images.map((image, index) => (
                  <div className="carousel" key={index}>
                    <img src={image} alt="" className="carousel-cell" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="accor active">
          <div className="accor-head pt-sm">
            <h3 className="smaller-text-ed">Planning and Organizing</h3>
          </div>
          <div className="accor-body">
            <p>
              I‘m not sure about others, but I love planning even the smallest
              things, as I think it‘s the most productive way to achieve my
              goals. I even created a step-by-step plan for this very website!
            </p>
            <p>
              Since becoming a member of my student association, I got even more
              responsibilities, like organizing small to large events, which
              became my habit. Now I organize activities with my friends, like
              field trips, game nights (we love D&D!) and I‘ve made some escape
              rooms in my garage!
            </p>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default Hobbies;
