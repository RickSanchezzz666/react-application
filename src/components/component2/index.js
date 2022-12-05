import React from "react";
import './style.css';
import Planet from './planets';
import planet1 from '../imgs/earth.png';
import planet2 from '../imgs/orange-planet.png';
import planet3 from '../imgs/saturn.png';


function Page() {
    const planets = [
        {
            image: planet1,
            text: 'International Station',
            link: "https://www.nasa.gov/mission_pages/station/main/index.html",
        },
        {
            image: planet2,
            text: 'Journey to Mars',
            link: "https://www.spacex.com/human-spaceflight/mars/",
        },
        {
            image: planet3,
            text: 'Explore new planets',
            link: "https://solarsystem.nasa.gov/planets/overview/",
        }
    ];

    return(
        <div className="container">
            {planets.map(planet => <Planet
            image={planet.image}
            text={planet.text}
            link={planet.link}
            button={planet.button}
            />
            )}
        </div>
    );
}

export default Page;