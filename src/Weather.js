import React from 'react';
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            
        <h1>New York</h1>
            <ul>
                <li>Wednesday 07.00</li>
                <li>Snowing</li>
            </ul>
        <div className="row">
            <div className="col-6">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/snow.png"
                   alt="Snow" 
                   className="float-left" 
                   />
                   <span className="temp">2</span>
                   <span className="units">°C</span>
            </div> 
            <div className="col-6">
               <ul>
                   <li>
                       Precipitation: 100%
                   </li>
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
    )
}
