import React from "react";
import './style.css';
import Carousel from 'react-material-ui-carousel'

const colors = ['#bd525c', '#f68225', '#4893b0']

function Component2() {
    return(
        <div className="carousel-wrapper">
            <Carousel height={'60vh'}>
                {colors.map(color => 
                <div 
                style={{backgroundColor: color}}
                className="carousel-item"></div> 
                )}
            </Carousel>
        </div>
    );
}

export default Component2;