import React from "react";
import './style.css';
import Paragraph from "./paragraph";
import image1 from '../imgs/100x100.gif';
import image2 from '../imgs/1200x400.gif';

function Component1() {
    const textik = [
    {
        image: image1,
        title: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
    {
        image: image1,
        title: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
    {
        image: image1,
        title: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
    {
        image: image1,
        title: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
];

    return(
        <div className="page1">
            <div className="container1">
                {textik
                .map(card => <Paragraph
                image={card.image}
                title={card.title}
                text1={card.text1}
                text2={card.text2}
                button={card.button}
                />)}
                <hr></hr><hr></hr>
            </div>
            <div className="container2">
                <div>its ok</div>
            </div>
    </div>
    );
}

export default Component1;