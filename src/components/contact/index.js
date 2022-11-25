import React from "react";
import './style.css'
import WebFont from 'webfontloader';
import Input from './input'
import ArrowToTop from "./arrow-up";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Hind Siliguri', 'Dancing Script']
          }
        });
       }, []);

    return(
        <div className="contact-container">
            <div className="contact-hr"><hr></hr></div>
            <div className="contact">
                <span className="contact-title">Contact us</span>
                <div id="tv">
                    <span className="contact-text">Put you information here:</span>
                    <div className="contact-input"><Input /></div>
                    <div className="contact-padding"><Link to='/'><button className="contact-button-send">Send message</button></Link></div>
                </div>
            </div>
            <div className="contact-hr"><hr></hr></div>
            <div className="arrow-wrap"><ArrowToTop /></div>
            <div className="arrow-wrap"><ArrowToTop /></div>
        </div>
    );
}

export default Contact;