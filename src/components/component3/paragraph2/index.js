import React from "react";

function Paragraph2(props) {
    return(
        <div className="text-page">
            <div className="item-2">
                <div className="item1">
                    <span className="title-2">{props.title2}</span>
                    <p className="text-2">{props.text3}</p>
                    <br></br>
                    <p className="text">{props.text4}</p>
                    <br></br>
                    <p className="text">{props.text5}</p>
                    <img src={props.image2}></img>
                </div>
                <div className="item2">
                    <img src={props.image2}></img>
                    <span className="title-2">{props.title2}</span>
                    <p className="text-2">{props.text3}</p>
                    <br></br>
                    <p className="text">{props.text4}</p>
                    <br></br>
                    <p className="text-3">{props.text5}</p>
                </div>
            </div>
        </div>
    );
}

export default Paragraph2;