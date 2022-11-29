import React from "react";
import './style.css';
import Paragraph1 from "./paragraph1";
import Paragraph2 from "./paragraph2";
import image1 from '../imgs/100x100.gif';
import image2 from '../imgs/1200x400.gif';

function Component3() {
    const textik1 = [
    {
        image1: image1,
        title1: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
    {
        image1: image1,
        title1: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
    {
        image1: image1,
        title1: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    },
    {
        image1: image1,
        title1: 'Headline Text',
        text1: 'Integer imperdiet vestibulum leo ut tincidunt. In sagittis diam ut leo convallis vel rutrum mauris ullamcorper. Vestibulum adipiscing erat sit amet justo luctus molestie.',
        text2: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
        button: 'Read More »'
    }
];
    const textik2 = [
        {
            image2: image2,
            title2: 'Headline Text',
            text3: 'Aliquatjusto quisque nam consequat doloreet vest orna partur scetur portortis nam. Metadipiscing eget facilis elit sagittis felisi eger id justo maurisus convallicitur.',
            text4: 'Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.',
            text5: 'Namjusto cras urna urnaretra lor urna neque sed quis orci nulla. Laoremut vitae doloreet condimentumst phasellentes dolor ut a ipsum id consectetus.'
        },
    ]

    return(
        <div className="page-3">
            <div className="container-1">
                {textik1
                .map(card => <Paragraph1
                image1={card.image1}
                title1={card.title1}
                text1={card.text1}
                text2={card.text2}
                button={card.button}
                />)}
                <hr></hr><hr></hr>
            </div>
            <div className="container-2">
            {textik2
                .map(card => <Paragraph2
                image2={card.image2}
                title2={card.title2}
                text3={card.text3}
                text4={card.text4}
                text5={card.text5}
                />)}
            </div>
    </div>
    );
}

export default Component3;