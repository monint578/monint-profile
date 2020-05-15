import React from "react";
import Slider from "../Slider";

const images = [
  "/img/rgb.png",
  "/img/toraberu3.png",
  "/img/toraberu4.png",
];

const Other2 = () => {
    return ( 
        <div>
            <h1 className="center pb">Other Projects</h1>
            <h3>They are like mini project which was mad wile studing yelpcamp or watching youtube</h3>
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
            <div className="button-flex">
                <a className="button" href="#" rel="noopener noreferrer" target="_blank">
                    <span>ToDo List with Vanilla Javascript <i class="fab fa-github"></i></span>
                    <div className="circle"></div>
                </a>
                <a className="button" href="#" rel="noopener noreferrer" target="_blank">
                    <span>ToDo List with Go <i class="fab fa-github"></i></span>
                    <div className="circle"></div>
                </a>
                <a className="button" href="#" rel="noopener noreferrer" target="_blank">
                    <span>ToDo List with React <i class="fab fa-github"></i></span>
                    <div className="circle"></div>
                </a>
                <a className="button" href="#" rel="noopener noreferrer" target="_blank">
                    <span>RGB color game <i class="fab fa-github"></i></span>
                    <div className="circle"></div>
                </a>
                <a className="button" href="#" rel="noopener noreferrer" target="_blank">
                    <span>Patatap <i class="fab fa-github"></i></span>
                    <div className="circle"></div>
                </a>
            </div>
        </div>
    );
}
 
export default Other2;