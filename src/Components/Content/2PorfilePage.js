import React from "react";
import Slider from "../Slider";

const images = [ 
    "/img/toraberu2.png",
    "/img/toraberu3.png",
    "/img/toraberu4.png"
];

const ProfilePage = () => {
    return ( 
        <div>
            <a href="#" rel="noopener noreferrer" target="_blank">
                <h1 className="center pb">My Profile Page</h1>
            </a>
            <h3>I think I don't need to writte about what you can see in this page. You can see everything you need to know about this page. I wanted to lear React so this is the result. Also I used figma for web-design</h3>
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
            <div className="button-flex">
                <a className="button" href="#" rel="noopener noreferrer" target="_blank">
                <span>Profile Page GitHub <i class="fab fa-github"></i></span>
                <div className="circle"></div>
                </a>
                <a className="button" href="https://github.com/monint578/toraberu" rel="noopener noreferrer" target="_blank">
                <span>Profile Page Figma <i class="fab fa-figma"></i></span>
                <div className="circle"></div>
                </a>
            </div>
            <hr />
            <h3 className="center bold">Technologies used for this project</h3>
            <div className="center icons-grid">
                <i className="fab fa-react icons fa-3x"></i>
                <i className="fab fa-figma icons fa-3x"></i>
                <i className="fab fa-docker icons fa-3x"></i>
            </div>
        </div>
    );
}
 
export default ProfilePage;