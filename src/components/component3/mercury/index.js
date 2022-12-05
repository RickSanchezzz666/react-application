import React from "react";
import meteorite from '../../imgs/meteorite.png';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Navigation from '../navigation bar';
import MercuryCard from '../mercury/mercury-card';
import Help from '../help';

function Page() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Quicksand', 'Heebo', 'Nunito Sans', 'Poppins']
          }
        });
       }, []);

    return(
        <div className="container">
            <br></br><br></br><br></br>
            <table>
                <tr>
                    <td><img className="meteorite" src={meteorite}></img></td>
                    <td><span className="main-title">Browse popular tours</span></td>
                </tr>
            </table>
            <Navigation />
            <MercuryCard />
            <Help />
        </div>
    );
} 

export default Page;