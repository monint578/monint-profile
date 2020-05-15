import React from "react";
import Slider from "../Slider";
import Accordion from "../Accordion";

const images = ["/img/minty1.png", "/img/minty2.png", "/img/minty3.png"];

const Hobbies = () => {
  return (
    <div>
        <Accordion>
          <div className="accor active">
            <div className="accor-head" >
                <h2 className="center">Planning</h2>
            </div>
            <div className="accor-body">
                <p>
                    I don't know about other, but I Love planning even the smallest things.
                    I always making small todo list for maisto prekes or even day plan. I
                    thinks that why I started using Figma, because miau miau miau. Biudzeto apzvalga per exel
                </p>
            </div>
          </div>
          <div className="accor active">
            <div className="accor-head">
                <h2 className="center pt">Hand-made crafting</h2>
            </div>
            <div className="accor-body">
                <p>
                    I cant call it gyvenimo pasaukimu, but I really like crafting or making
                    something. I have hude closet there are a lot of things for designing
                    clothers, sewing them. Also I started my jewelry shop, there i was
                    making jewelries from resin material. Minty- jewelries; Designing and
                    sewing clothes;
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
          <div className="accor">
            <div className="accor-head">
                <h2 className="center pt">Organizing untradtional things</h2>
            </div>
            <div className="accor-body">
                <p>Like dnd </p>
            </div>
          </div>
      </Accordion>
    </div>
  );
};

export default Hobbies;
