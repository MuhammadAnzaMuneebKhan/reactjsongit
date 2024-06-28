/** @format */

import React, { useState } from 'react';
import ShowTemp from './ShowTemp';

const Weather1 = () => {
  const [StoreCity, setStoreCity] = useState({
    description: '',
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: '',
  });
  const [SearchCity, setSearchCity] = useState('');
  let handleClick = () => {
    let api = async () => {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${SearchCity}&appid=2fa88380d0550273b193cd99bce79cae`
      );
      let resData = await res.json();
      setStoreCity({
        description: resData.weather[0].description,
        temp: resData.main.temp,
        temp_max: resData.main.temp_max,
        temp_min: resData.main.temp_min,
        humidity: resData.main.humidity,
        sunrise: resData.sys.sunrise,
        sunset: resData.sys.sunset,
        country: resData.sys.country,
      });
    };
    api();
  };
  return (
    <>
      <div className="container text-center my-2">
        <h1>Weather App Using React JS</h1>
        <input
          type="text"
          className="from-control"
          value={SearchCity}
          onChange={(e) => {
            setSearchCity(e.target.value);
          }}
        />
        <button
          className="btn btn-primary mx-2"
          type="submit"
          onClick={handleClick}
        >
          get temp
        </button>
      </div>
      <ShowTemp text={StoreCity}></ShowTemp>
    </>
  );
};

export default Weather1;
