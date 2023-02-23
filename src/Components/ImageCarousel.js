import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel from '../carousel_1.jpg';
import carouse2 from '../carousel_2.jpg';


function ImageCarousel() {
    return(
        <Carousel>
            <div>
                <img src={carousel} />
                <p className="legend">Legend 1</p>
            </div>
            <div>
            <img src={carouse2} />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    );

}
export default ImageCarousel;