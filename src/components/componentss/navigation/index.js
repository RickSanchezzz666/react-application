import React from "react";
import './style.css';
import facebook from './imgs/5e4b1a8c95e491addf265a8e_social-03.svg';
import instagram from './imgs/5e4b1a8c95e491834e265b00_social-07.svg';
import twitter from './imgs/5e4b1a8c95e491586a265ad4_social-18.svg';
import linkedin from './imgs/5e4b1a8c95e4914f3a265ae5_social-09.svg';
import email from './imgs/5e4b1a8c95e4912fad265ab9_social-30.svg';

function Navigation () {
 return (
  <nav>
   <div className="menu-title">Milton</div>
   <hr />
   <div className="menu-text-block">
    Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.
   </div>
   <hr />
   <ul className="menu">
    <li>home</li>
    <li>about</li>
    <li>contact</li>
   </ul>
   <hr />
   <div className="media-icons">
    <img src={facebook} alt='' />
    <img src={instagram} alt='' />
    <img src={twitter} alt='' />
    <img src={linkedin} alt='' />
    <img src={email} alt='' />
   </div>
   <span>Built with Webflow</span>
  </nav>
 );
}

export default Navigation;