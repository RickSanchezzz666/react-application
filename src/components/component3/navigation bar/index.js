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
                            <Link to='/mercury' className="btn">Mercury</Link>
                        </li>
                        <li>
                            <Link to='/venus' id="venus" className="btn">Venus</Link>
                        </li>
                        <li>
                            <Link to='/' className="btn">Mars</Link>
                        </li>
                        <li>
                            <Link to='/jupiter' className="btn">Jupiter</Link>
                        </li>
                        <li>
                            <Link to='/saturn' className="btn">Saturn</Link>
                        </li>
                        <li>
                            <Link to='/uranus' className="btn">Uranus</Link>
                        </li>
                        <li>
                            <Link to='/neptune' className="btn">Neptune</Link>
                        </li>
                    </ul>
                    <span className="right">→</span>
                </nav>
            </header>
        </div>
    );
}

export default Nav;