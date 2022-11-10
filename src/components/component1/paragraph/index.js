import React from "react";
import './style.css';

function Paragraph(props) {
    return(
        <div className="text-page">
            <img src={props.image}></img>
            <span className="title">{props.title}</span>
            <p className="text1">{props.text1}</p>
            <br></br><br></br>
            <p className="text2">{props.text2}</p>
        </div>
    );
}

export default Paragraph;