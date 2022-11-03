import React from "react";
import './style.css';

function Card (props) {
  console.log('full page', props.content);
  const tagOnClick = () => {
    props.setSelectedTag(props.tag);
  };

  const onClickSelectedCard = () => {
    const cardProps = { ...props };
    delete cardProps.setCard;
    delete cardProps.setSelectedTag;
    props.setCard(cardProps);
  };

  return (
    <div className="card">
      <div
        onClick={onClickSelectedCard}
        className="card-image" style={{
          backgroundImage: `url(${props.image})`
        }}></div>
      <div className="card-text">
        <div
          onClick={onClickSelectedCard}
          className="card-title"
        >{props.title}</div>
        <div className="card-description">
          {props.description}
          <span onClick={onClickSelectedCard} >Read mode...</span>
        </div>
        <div className="card-meta">
          {props.date} | <span onClick={tagOnClick} className="card-tag">{props.tag}</span></div>
      </div>
    </div>
  );
}

export default Card;