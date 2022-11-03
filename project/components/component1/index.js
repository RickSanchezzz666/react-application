import React from "react";
import './style.css';
import image1 from './imgs/5465904.jpg'
import logo from './imgs/universe.png';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function Page() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Chilanka']
          }
        });
       }, []);
    return(
        <div className="container"><img src={image1}></img>
        <div className="header">
        <span className="add">Our association sends 1,000<br></br>
        people into space every year</span><img src={logo}></img></div>
        <span className="title">The universe is a<br></br>pretty big place to explore</span></div>
    );
}

export default Page;
