import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function Nav() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Quicksand', 'Heebo']
          }
        });
       }, []);

    return(
        <div className="content">
            <header>
                <nav id="navBar">
                <span className="left">←</span>
                    <ul>
                        <li>
                            <NavLink to='/mercury'>Mercury</NavLink>
                        </li>
                        <li>
                            <NavLink to='/venus'>Venus</NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>Mars</NavLink>
                        </li>
                        <li>
                            <NavLink to='/jupiter'>Jupiter</NavLink>
                        </li>
                        <li>
                            <NavLink to='/saturn'>Saturn</NavLink>
                        </li>
                        <li>
                            <NavLink to='/uranus'>Uranus</NavLink>
                        </li>
                        <li>
                            <NavLink to='/neptune'>Neptune</NavLink>
                        </li>
                    </ul>
                    <span className="right">→</span>
                </nav>
            </header>
        </div>
    );
}

export default Nav;