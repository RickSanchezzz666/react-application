import React, { useEffect, useState } from "react";
import './style.css';
import weatherMockData from './weather.mock.json';
import axios from 'axios';

function WeatherWidget (props) {
 const [data, setData] = useState(weatherMockData);

 useEffect(() => {
  axios
   .get(`http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=`)
   .then(response => {
    setData(response.data);
   });

 }, [props.city]);

 return (
  <div className="widget-weather">
    <div className="ww-place">
        <b>Country:</b> {data.sys.country}
        <b>City:</b> {props.city}
    </div>
   <div className="ww-coord">
    <div><b>Latitude</b>:</div><div>{data.coord.lat}</div>
    <div><b>Longitude</b>:</div><div>{data.coord.lon}</div>
   </div>
   <div className="ww-weather">
    {data.weather.map(el => (
     <div>
        <img src={`http://openweathermap.org/img/w/${el.icon}.png`} alt='' />
        <b>Description</b>: {el.description}
     </div>
    ))}
     <div>
        <b>Temperature</b>: {data.main.temp}<br></br>
        <b>Pressure</b>: {data.main.pressure}<br></br>
        <b>Humidity</b>: {data.main.humidity}
     </div>
     <div>
        <b>Wind</b>:<br></br>
        <b>Speed</b>: {data.wind.speed}<br></br>
        <b>Degrees</b>: {data.wind.deg}<br></br>
        <b>Gust</b>: {data.wind.gust}
     </div>
     <div>
        <b>Visibility</b>: {data.visibility} km<br></br>
        <b>Clouds</b>: {data.clouds.all}%<br></br>
     </div>
   </div>
  </div>
 );
}

export default WeatherWidget;