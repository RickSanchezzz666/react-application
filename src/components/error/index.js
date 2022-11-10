import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Error() {
    return(
        <div className="error">Wrong URl!<br></br>Can't find that card!
        <Link to='/'><button className="nasa-button">Click here to get back</button></Link></div>
    );
}

export default Error;