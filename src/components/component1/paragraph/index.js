import React from "react";

function Paragraph(props) {
    return(
        <div className="text-page">
            <div className="item">
            <img src={props.image}></img>
            <div className="paragraph">
            <span className="title">{props.title}</span>
            <p className="text">{props.text1}</p>
            <br></br>
            <p className="text">{props.text2}</p>
            <a href="">{props.button}</a>
            </div>
            </div>
        </div>
    );
}

export default Paragraph;