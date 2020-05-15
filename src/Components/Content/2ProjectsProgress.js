import React from "react";
import Slider from "../Slider";

const images = [ 
    "/img/sibus1.png",
    "/img/sibus2.png",
    "/img/sibus3.png"
];

const ProjectProgress = () => {
    return ( 
        <div>
            <h1 className="center pb">In progress projects - Sibus</h1>
            <h3>Sibus is the blah balh blah project. Whit shoping cart, ingredients counter andother</h3>
            <div className="carousel-container">
                <Slider
                    options={{
                    draggable: '>1',
                    wrapAround: true,
                    autoPlay: '4500'
                    }}
                >
                    {images.map((image, index) => (
                    <div className="carousel" key={index}>
                        <img src={image} alt="" className="carousel-cell"/>
                    </div>
                ))}
                </Slider>
            </div>
            <hr />
            <h3 className="center bold">Technologies which I will use for this project</h3>
            <div className="center icons-grid">
                <div className="icon-size"><img src="/img/Golang.png" className="icon-optional" alt="" /></div>
                <div className="icon-size"><img src="/img/postgresql.png" className="icon-optional" alt=""/></div>
                <i className="fab fa-react icons fa-3x"></i>
                <i className="fab fa-figma icons fa-3x"></i>
                <i className="fab fa-docker icons fa-3x"></i>
            </div>
        </div>
    );
}
 
export default ProjectProgress;