import React from "react";
import './style.css';
import telescope from '../../imgs/telescope.png';
import { Link } from 'react-router-dom';

function Help() {

    return(
        <div className="photo">
            <div className="spin"><span className="help-text">Need some help?<img className="telescope" src={telescope}></img></span></div><br></br>
            <span className="helper">
                <button className="help-button">
                    <Link className="button-text" to='/contact'>Get in touch</Link></button>
                </span>
        </div>
    );
}

export default Help;