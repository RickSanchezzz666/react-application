import React from "react";
import './style.css';
import image1 from '../imgs/100x100.gif';
import image2 from '../imgs/1200x400.gif';

function Component1() {
    return(
        <div className="page1">
            <div className="container1">
                <div className="item-1">
                    <img src={image1} className="img-square"></img>
                        <div className="paragraph"><span className="title">Headline Text</span>
                        <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br></br><br></br>
                        Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.
                        </p>
                        <a href="">Read More »</a>
                    </div>
                </div>
                <div className="item-2">
                <img src={image1} className="img-square"></img>
                    <div className="paragraph"><span className="title">Headline Text</span>
                    <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br></br><br></br>
                    Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.
                    </p>
                    <a href="">Read More »</a>
                </div>
                </div>
                <div className="item-3">
                <img src={image1} className="img-square"></img>
                    <div className="paragraph"><span className="title">Headline Text</span>
                    <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br></br><br></br>
                    Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.
                    </p>
                    <a href="">Read More »</a>
                </div>
                </div>
                <div className="item-4"><img src={image1} className="img-square"></img>
                    <div className="paragraph"><span className="title">Headline Text</span>
                    <p className="text">Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.<br></br><br></br>
                    Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.
                    </p>
                    <a href="">Read More »</a>
                </div>
            </div>
            <hr></hr><hr></hr>
        </div>
        <div className="container2"></div>
    </div>
    );
}

export default Component1;