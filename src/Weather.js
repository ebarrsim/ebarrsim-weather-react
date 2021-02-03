import React, { useState } from 'react';
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";

export default function Weather(props) {
    const [data, setData] = useState({ ready: false });

    function handleResponse(response) {
       
    setData({
        ready: true,
        date: new Date(response.data.dt * 1000),
        temp: (Math.round(response.data.main.temp)),
        description: response.data.weather[0].description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/snow.png",
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed, 
    })
   
}

   

    if (data.ready) {
        return (
        <div className="Weather">
            
        <h2>New York</h2>
            <ul>
                <li>
                    <FormattedTime date={data.date} />
                </li>
                <li>
                    <FormattedDate date={data.date} />
                </li>
                <li className="text-capitalize">{data.description}</li>
            </ul>
        <div className="row">
            <div className="col-6">
                   <img src={data.iconUrl}
                   alt="Snow" 
                   className="float-left" 
                   />
                   <span className="temp">{data.temp}</span>
                   <span className="units">°C</span>
            </div> 
            <div className="col-6 preciseData">
               <ul>
                   <li>
                       Humidity: 91%
                   </li>
                   <li>
                       Wind: 20mph
                   </li>
               </ul>
            </div>
        </div>

    <form>
                <div className="row">
                <div className="col-9">
                <input 
                type="search" 
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
    let unit = "metric";
    const apiKey = "def976baf763335dd5c349c4a2e5220b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
    
    }


        
    
}
