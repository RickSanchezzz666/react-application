import React from "react";
import './style.css';
import nasa from '../imgs/nasa.png';
import facebook from '../imgs/facebook-app-symbol.png';
import twitter from '../imgs/twitter.png';
import instagram from '../imgs/instagram.png';

function Page() {
    return(
        <div className="comp4">
            <div className="nasa-header">
            <a href="https://www.nasa.gov"><img className="nasa-logo" src={nasa}></img></a>
            </div>
            <div className="nasa-header">
            <span className="nasa-title">National Aeronautics and<br></br>Space Administration</span>
            </div>
            <div className="nasa-header">
            <span className="little-text">Contact us by mail</span>
            </div>
            <div className="nasa-header">
            <span className="nasa-input"><input placeholder="Write your email"></input><button className="nasa-button">Go to the moon</button></span>
            </div>
            <footer>
                <div><span className="white">Company</span>
                    <li>Book on Appoinment</li>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Contact</li>
                </div>
                <div><span className="white">Resources</span>
                    <li>Support</li>
                    <li>Contact</li>
                    <li>Privacy & terms</li>
                </div>
            </footer>
            <div className="nasa-network"><a href="https://www.facebook.com/NASA/"><img src={facebook}></img></a><a href="https://twitter.com/nasa">
          <img src={twitter}></img></a><a href="https://www.instagram.com/nasa/"><img src={instagram}></img></a></div>
        </div>
    );
}

export default Page;