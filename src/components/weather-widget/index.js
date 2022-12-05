import React, { useEffect, useState } from "react";
import './style.css';
import weatherMockData from './weather.mock.json';
import axios from 'axios';

function WeatherWidget (props) {
 const [data, setData] = useState(weatherMockData);

 useEffect(() => {
  console.log('step 1');
  axios
   .get(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=`)
   .then(response => {
    setData(response.data);
    console.log('step 2');
   });
  console.log('step 3');

 }, [props.city]);

 return (
  <div className="widget-weather">
   City: {props.city}
   <div className="ww-coord">
    <div>Latitude:</div><div>{data.coord.lat}</div>
    <div>Longitude:</div><div>{data.coord.lon}</div>
   </div>
   <div className="ww-weather">
    {data.weather.map(el => (
     <div>
      <img src={`http://openweathermap.org/img/w/${el.icon}.png`} alt='' />
      Description: {el.description}
     </div>
    ))}
   </div>
  </div>
 );
}

export default WeatherWidget;