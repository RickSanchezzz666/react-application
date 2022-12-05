import React from "react";

function Paragraph1(props) {
    return(
        <div className="text-page">
            <div className="item-1">
                <img src={props.image1}></img>
                <div className="paragraph">
                <span className="title">{props.title1}</span>
                <p className="text">{props.text1}</p>
                <br></br>
                <p className="text">{props.text2}</p>
                <a href="">{props.button}</a>
                </div>
            </div>
        </div>
    );
}

export default Paragraph1;