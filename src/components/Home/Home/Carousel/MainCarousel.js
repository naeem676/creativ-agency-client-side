import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from "../../../../carousel-1.png";
import carousel2 from "../../../../carousel-2.png";
import carousel3 from "../../../../carousel-3.png";
import carousel4 from "../../../../carousel-4.png";
import carousel5 from "../../../../carousel-5.png";

const MainCarousel = () => {
    return (
        <div className="main bg-secondary">
        <h2 className="text-center text-white p-5">Here are some of our work</h2>
            <div className="container h-25 w-50 p-3">
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src={carousel4}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src={carousel5}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src={carousel1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-25"
                src={carousel2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
        </div>
    );
};

export default MainCarousel;