import React from "react";
import Slider from "../Slider";

const images = [ 
    "/img/profile1.png",
    "/img/profile2.png",
    "/img/profile3.png"
];

const ProfilePage = () => {
    return ( 
        <div className="full-height">
            <h1 className="center pb smaller-text">My Profile Page</h1>
            <h3 className="smaller-text">This is the page you are currently viewing! It was created with React because I wanted to learn it. I have also used Figma to design this website.</h3>
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
                <a className="button" href="https://github.com/monint578/monint-profile" rel="noopener noreferrer" target="_blank">
                <span>Profile Page GitHub <i className="fab fa-github"></i></span>
                <div className="circle"></div>
                </a>
                <a className="button" href="https://www.figma.com/file/QwJyo456KGGctPDtBjfhIe/Untitled?node-id=1%3A196" rel="noopener noreferrer" target="_blank">
                <span>Profile Page Figma <i className="fab fa-figma"></i></span>
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