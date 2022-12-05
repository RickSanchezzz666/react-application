import React from "react";
import './style.css';
import logo from '../imgs/SpaceX-Logo.svg.png';
import facebook from '../imgs/facebook-app-symbol.png';
import twitter from '../imgs/twitter.png';
import instagram from '../imgs/instagram.png';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function Page() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Chilanka', 'Lexend Deca']
          }
        });
       }, []);

    return(
        <div className="container">
        <div className="header">
        <span className="add">Our association sends 1,000<br></br>
        people into space every year</span><a href="https://www.spacex.com"><img className="logo" src={logo}></img></a></div>
        <span className="title">The universe is a<br></br>pretty big place<br></br>to explore</span>
        <span className="input"><input placeholder="Write your email"></input><button className="button">Go to the moon</button></span>
        <div className="network"><a href="https://www.facebook.com/spacenewsx/"><img src={facebook}></img></a><a href="https://twitter.com/spacex">
          <img src={twitter}></img></a><a href="https://www.instagram.com/spacex/?hl=uk"><img src={instagram}></img></a></div>
        </div>
    );
}

export default Page;
