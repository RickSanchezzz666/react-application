import React, { useState } from 'react';
import './App.css';
import WeatherWidget from './components/weather-widget';

function App () {
  const [selectedCity, setSelectedCity] = useState();

  const selectCity = (event) => {
    const value = event.target.value;
    setSelectedCity(value);
  };

  console.log(`selectedCity:${selectedCity}`);
  return (
    <div className="App">
      <div className='input-wrapper'>
        <input
          onBlur={selectCity}
          type="text" class="input-search" id="input-search" />
        <label class="search" for="input-search">
        </label>
      </div>
      <WeatherWidget city={selectedCity} />
    </div>
  );
}

export default App;
