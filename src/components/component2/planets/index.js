import React from "react";
import './style.css';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function Planet(props) {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Raleway']
          }
        });
       }, []);

       const { ref, inView} = useInView({triggerOnce: true, threshold: 0.2});
       let animation = document.getElementsByClassName('image');
       let addAnim = animation.className = 'planetAnimation';

    return(
    <div ref={ref} className="card">
      <img className={`${inView ? addAnim : 'planet-opacity '}`} src={props.image}></img>
      <div className="cont"><div className="text">{props.text}</div><a href={props.link} className="read">Read more →</a></div>
    </div>
    );
};

export default Planet;