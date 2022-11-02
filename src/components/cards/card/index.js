import React from "react";
import './style.css';

function Card(props) {
    const tagOnClick = () => {
        props.setSelectedTag(props.tag);
      };
      
    return(
        <div className="card">
            <div className="image" style={{
        backgroundImage: `url(${props.image})`
      }}></div>
      <div className="text">
        <div className="title">{props.title}</div>
        <div className="description">{props.description}<a className="read" href="">Read more...</a></div>
        <div className="date">{props.date} | <span onClick={tagOnClick} className="tag">{props.tag}</span></div>
        </div>
    </div>
    );
}

export default Card;