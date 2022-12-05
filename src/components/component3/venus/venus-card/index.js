import React from "react";
import './style.css';
import image1 from './imgs/Venus_from_Mariner_10.jpg';
import image2 from './imgs/erkj8dfxuaesmzh-1024x1024.jpg';
import image3 from './imgs/baltis-vallis2.png';
import image4 from './imgs/post-303978-0-03049300-1581907663.jpg';
import { useInView } from 'react-intersection-observer';

function Venus() {
    const { ref: ref1, inView: visible1} = useInView({triggerOnce: true});
    let animation1 = document.getElementsByClassName('grid');
    let addAnim1 = animation1.className += ' photoAnimation';
    const { ref: ref2, inView: visible2} = useInView({triggerOnce: true});
    let animation2 = document.getElementsByClassName('grid');
    let addAnim2 = animation2.className += ' photoAnimation';
    const { ref: ref3, inView: visible3} = useInView({triggerOnce: true});
    let animation3 = document.getElementsByClassName('grid');
    let addAnim3 = animation3.className += ' photoAnimation';
    const { ref: ref4, inView: visible4} = useInView({triggerOnce: true});
    let animation4 = document.getElementsByClassName('grid');
    let addAnim4 = animation4.className += ' photoAnimation';

    return(
        <div className="page">
            <div className="grid">
                <div className="grid-1">
                <span ref={ref1}><img className={`${visible1 ? addAnim1 : ''}`} src={image1}></img><br></br><span className="sub-title"><br></br>The planet Venus</span></span>
                <span ref={ref3} className="sub-title"><img className={`${visible3 ? addAnim3 : ''}`} src={image3}></img><br></br><span className="sub-title"><br></br>Baltis Vallis Rivers</span></span>
                </div>
                <div className="grid-2">
                <span ref={ref2} className="sub-title"><img className={`${visible2 ? addAnim2 : ''}`} src={image2}></img><br></br><span className="sub-title"><br></br>Hottest surface in Solar System</span></span>
                <span ref={ref4} className="sub-title"><img className={`${visible4 ? addAnim4 : ''}`} src={image4}></img><br></br><span className="sub-title"><br></br>Brightest Luminary in Night sky</span></span>
                </div>
            </div>
            <span className="more"><a className="see-more" href="https://solarsystem.nasa.gov/planets/venus/overview/">See more</a></span>
        </div>
    );
}

export default Venus;