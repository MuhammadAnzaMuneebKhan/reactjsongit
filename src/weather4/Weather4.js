/** @format */

import React, { useState, useEffect } from 'react';

const Weather4 = () => {
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
  useEffect(() => {
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
    };
    MyApi();
  }, [search]);

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setsearch(e.target.value);
        }}
      />
      <div class="container my-5">
        <div class="row mb-2">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Description</h5>
                <p class="card-text">{city.description}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Temp</h5>
                <p class="card-text">{Math.floor(city.temp)}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Temp Min</h5>
                <p class="card-text">{city.temp_min}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Temp Max</h5>
                <p class="card-text">{city.temp_max}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Humidity</h5>
                <p class="card-text">{city.humidity}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Sunrise</h5>
                <p class="card-text">{city.sunrise}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Sunset</h5>
                <p class="card-text">{city.sunset}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Country</h5>
                <p class="card-text">{city.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather4;
