import React, { useState } from 'react';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";


export default function Weather(props) {
    const [data, setData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function updateCity(event) {
        event.preventDefault();
        setCity (event.target.value);
    }

    function search() {
      let unit = "metric";
      const apiKey = "def976baf763335dd5c349c4a2e5220b";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
      axios.get(apiUrl).then(handleResponse);
    }
    
 function handleResponse(response) {
       
    setData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        temp: (Math.round(response.data.main.temp)),
        description: response.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed, 
        city: response.data.name,
    });  

 }

if (data.ready) {
    return (
        <div className="Weather">
            <WeatherInfo data={data} />
    <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
                onChange={updateCity}
                placeholder="Enter a city..." 
                className="form-control"
                autoFocus="on" /> 
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
    </form>
</div>
    );

 } else {
   search();
   return "Loading...";
}
}
