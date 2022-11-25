import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function Nav () {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Quicksand', 'Heebo']
          }
        });

        let btnContainer = document.getElementById('navBar');
        let buttons = btnContainer.getElementsByClassName('btn');
       for(let i = 0; i < buttons.length; i++) {
           buttons[i].addEventListener('click', function() {
                    let current = document.getElementsByClassName('active');
                    current[0].className = current[0].className.replace('active');
                    this.className += ' active';
           })
       }
    
       }, []);

    return(
        <div className="content">
            <header>
                <nav id="navBar">
                <span className="left">←</span>
                    <ul>
                        <li>
                            <Link to='/mercury' id="mercury-btn " className="btn">Mercury</Link>
                        </li>
                        <li>
                            <Link to='/venus' id="venus-btn" className="btn">Venus</Link>
                        </li>
                        <li>
                            <Link to='/' id="mars-btn" className="btn active">Mars</Link>
                        </li>
                        <li>
                            <Link to='/jupiter' id="jupiter-btn" className="btn">Jupiter</Link>
                        </li>
                        <li>
                            <Link to='/saturn' id="saturn-btn" className="btn">Saturn</Link>
                        </li>
                        <li>
                            <Link to='/uranus' id="uranus-btn" className="btn">Uranus</Link>
                        </li>
                        <li>
                            <Link to='/neptune' id="neptune-btn" className="btn">Neptune</Link>
                        </li>
                    </ul>
                    <span className="right">→</span>
                </nav>
            </header>
        </div>
    );
}

export default Nav;