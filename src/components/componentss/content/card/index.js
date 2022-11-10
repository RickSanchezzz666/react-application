import React from "react";
import './style.css';

function Card (props) {

  const tagOnClick = () => {
    props.setSelectedTag(props.tag);
  };

  return (
    <div className="card">
      <div className="card-image" style={{
        backgroundImage: `url(${props.image})`
      }}></div>
      <div className="card-text">
        <div className="card-title">{props.title}</div>
        <div className="card-description">{props.description}</div>
        <div className="card-meta">
          {props.date} | <span onClick={tagOnClick} className="card-tag">{props.tag}</span></div>
      </div>
    </div>
  );
}

export default Card;