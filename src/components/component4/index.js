import React from "react";
import './style.css';
import image1 from '../imgs/100x100.gif'

function Component4() {
    return(
        <div className="page-4">
            <div className="page-4-wrapper">
                <div className="page-4-container">
                <div className="page-4-item page-4-item-1">
                    <span className="title-3">Footer Navigation</span>
                    <hr className="light-hr"></hr>
                    <ul>
                        <li><a href="">Home Page</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Our Services</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Meet the Team</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Blog</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Contact Us</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Gallery</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Portfolio</a></li>
                        <li><hr></hr></li>
                        <li><a href="">Online Shop</a></li>
                    </ul>
                </div>
                <div className="page-4-item page-4-item-2">
                    <span className="title-3">Latest Gallery</span>
                    <hr className="light-hr"></hr>
                    <div className="page-4-grid-1">
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                        <img src={image1}></img>
                    </div>
                </div>
                <div className="page-4-item page-4-item-3">
                    <span className="title-3">From Twitter</span>
                    <hr className="light-hr"></hr>
                    <div className="page-4-item-3-wrap">
                        <span>@<b><a href="">name</a></b> RT @<a href="">name</a> Donec suscipit<br></br>
                        vehicula turpis sed lutpat Quisque vitae<br></br>
                        quam neque. <a className="small-a" href="">about 9 hours ago</a></span>
                    </div>
                    <hr className="wrap-hr"></hr>
                    <div className="page-4-item-3-wrap">
                        <span>@<b><a href="">name</a></b> RT @<a href="">name</a> Donec suscipit<br></br>
                        vehicula turpis sed lutpat Quisque vitae<br></br>
                        quam neque. <a className="small-a" href="">about 9 hours ago</a></span>
                    </div>
                    <hr className="wrap-hr"></hr>
                    <div className="page-4-item-3-wrap">
                        <span>@<b><a href="">name</a></b> RT @<a href="">name</a> Donec suscipit<br></br>
                        vehicula turpis sed lutpat Quisque vitae<br></br>
                        quam neque. <a className="small-a" href="">about 9 hours ago</a></span>
                    </div>
                    <hr className="wrap-hr"></hr>
                    <div className="page-4-item-3-wrap">
                        <span>@<b><a href="">name</a></b> RT @<a href="">name</a> Donec suscipit<br></br>
                        vehicula turpis sed lutpat Quisque vitae<br></br>
                        quam neque. <a className="small-a" href="">about 9 hours ago</a></span>
                    </div>
                </div>
                <div className="page-4-item page-4-item-4">
                    <span className="title-3">Contact Us</span>
                    <hr className="light-hr"></hr>
                    <div className="page-4-item-4-wrap">
                        <span>Name *</span><br></br>
                        <input className="small-input"></input><br></br><br></br>
                        <span>Email *</span><br></br>
                        <input className="small-input"></input><br></br><br></br>
                        <input className="large-input"></input><br></br><br></br>
                        <div className="page-4-item-4-buttons">
                            <button className="yellow-button">SUBMIT</button>
                            <button className="grey-button">RESET</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="page-4-footer">
            <hr></hr>
                <div className="page-4-wrapper-2">
                    <div className="page-4-grid-2">
                        <span className="grid-2-item">Copyright © 2009 - 2022 - All Rights Reserved - Domain Name</span>
                        <span className="grid-2-item-2">Template by OS Templates</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Component4;