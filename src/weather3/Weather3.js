/** @format */

import React, { useState } from 'react';

const Weather3 = () => {
  const [search, setsearch] = useState('');
  const [city, setcity] = useState({
    description: '',
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: '',
  });
  let handleSearch = () => {
    let MyApi = async () => {
      let MyRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2fa88380d0550273b193cd99bce79cae`
      );
      let DataRes = await MyRes.json();
      setcity({
        description: DataRes.weather[0].description,
        temp: DataRes.main.temp,
        temp_max: DataRes.main.temp_max,
        temp_min: DataRes.main.temp_min,
        humidity: DataRes.main.humidity,
        sunrise: DataRes.sys.sunrise,
        sunset: DataRes.sys.sunset,
        country: DataRes.sys.country,
      });
      console.log(DataRes.name);
    };
    MyApi();
  };
  return (
    <div className="col-md-12">
      <div className="wetherBg">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input
            type="text"
            className="form-control"
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>

      <div className="col-md-12 text-center mt-5">
        <div className="shadow rounded wetherResultBox">
          <img
            className="weathorIcon"
            src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
          />

          <h5 className="weathorCity">{city.country}</h5>
          <h6 className="weathorTemp">{(city.temp).toFixed(2)}°C</h6>
        </div>
      </div>
    </div>
  );
};

export default Weather3;
