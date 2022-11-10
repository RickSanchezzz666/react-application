import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import image from '../about/5e4b1a8c95e4913ee3265b15_photo-1433588641602-7c1083c4f0e2-bw.jpg'

function About () {

 return (
    <div className="content">
        <div className="about">
            <img src={image}></img>
            <div className="texts">
            <span className="title">About me</span><br></br>
            <span className="desc">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</span>
            <br></br><br></br>
            <span className="desc1">Static and dynamic content editing</span>
            <br></br><br></br>
            <span className="desc">A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</span>
            </div>
            <Link className="link" to='/contact'><div className="touch-button">Get in touch</div></Link>
        </div>
    </div>
 );
}


export default About;