import React, { useState } from "react";
import './style.css';
import Card from './card';
import CardContent from "./card-content";
import mockData from './mock/data.json';

function Content () {
  const cards = mockData;

  const [selectedTag, setSelectedTag] = useState();
  console.log(`selectedTag:${selectedTag}`);

  const [selectedCard, setSelectedCard] = useState();
  console.log(`card:`, selectedCard);

  // let div = <div></div>;
  // if (selectedTag) {
  //   div = <div className="selected-tag">{selectedTag}</div>;
  // }

  return (
    <div className="content-container">
      {selectedTag && <div className="selected-tag">{selectedTag}</div>}
      {/* {div} */}
      {!selectedCard && cards
        .filter(el => selectedTag == null || el.tag === selectedTag)
        .map(card => <Card
          image={card.image}
          title={card.title}
          description={card.description}
          date={card.date}
          tag={card.tag}
          setSelectedTag={setSelectedTag}
          setCard={setSelectedCard}
          fullPage={card.fullPage}
        />)}
      {selectedCard
        && <CardContent
          image={selectedCard.image}
          title={selectedCard.title}
          description={selectedCard.description}
          date={selectedCard.date}
          tag={selectedCard.tag}
          fullPage={selectedCard.fullPage}
        />}
      {
        selectedTag || selectedCard
          ? <div
            className="return-all-posts"
            onClick={() => {
              setSelectedTag(null);
              setSelectedCard(null);
            }}>{"<-"} All posts</div>
          : null
      }
    </div>
  );
}

export default Content;

/**
 * let a = 45 && 78; => 78
 * let b  = false;
 * let c = b && a; => false
 * b = true;
 * let d = b && a; => 78
 */

/**
 * let a = true;
 * let b = !a;  => false
 * let c = !!a; => true
 * let d = 56;
 * b = !!d;     => true
 * b = !d;      => false 
 */