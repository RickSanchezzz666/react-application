import React from "react";
import './style.css';
import image1 from './imgs/Mercury_in_true_color.jpg';
import image2 from './imgs/gkr6aqotpfgrtfr2uuxrzvwjvy.jpg';
import image3 from './imgs/sn-mercuryhrev.jpg';
import image4 from './imgs/635762717061310892-BREBrd-04-20-2015-Daily-1-A001-2015-04-19-IMG-media-2015-04-16-Br-1-1-E6AHJOE9-L597517799-IMG-media-2015-04-16-Br-1-1-E6AHJOE9.png';
import { useInView } from 'react-intersection-observer';

function Mercury() {
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
                <span ref={ref1}><img className={`${visible1 ? addAnim1 : ''}`} src={image1}></img><br></br><span className="sub-title"><br></br>The planet Mercury</span></span>
                <span ref={ref3} className="sub-title"><img className={`${visible3 ? addAnim3 : ''}`} src={image3}></img><br></br><span className="sub-title"><br></br>Rocky deserts</span></span>
                </div>
                <div className="grid-2">
                <span ref={ref2} className="sub-title"><img className={`${visible2 ? addAnim2 : ''}`} src={image2}></img><br></br><span className="sub-title"><br></br>Closest planet to Sun</span></span>
                <span ref={ref4} className="sub-title"><img className={`${visible4 ? addAnim4 : ''}`} src={image4}></img><br></br><span className="sub-title"><br></br>Spacecrafts on Orbit </span></span>
                </div>
            </div>
            <span className="more"><a className="see-more" href="https://solarsystem.nasa.gov/planets/mercury/overview/">See more</a></span>
        </div>
    );
}

export default Mercury;