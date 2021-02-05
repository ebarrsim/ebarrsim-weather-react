import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h2>{props.data.city}</h2>
            <FormattedDate date={props.data.date} />
            <ul>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
        <div className="row">
            <div className="col-6">
                <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
                   <span className="temp">{props.data.temp}</span>
                   <span className="units">°C</span>
            </div> 
            <div className="col-6 preciseData">
               <ul>
                   <li>
                       Humidity: {props.data.humidity}%
                   </li>
                   <li>
                       Wind: {props.data.wind}km/ph
                   </li>
               </ul>
            </div>
    </div>
    </div>

    );
}