import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
            <h2>{props.data.city}</h2>
        
        <div className="col-6">
            <FormattedDate date={props.data.date} />
            <ul>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
        </div>
        <div className="row">
            <div className="col-6">
                <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
                <WeatherTemperature celsius={props.data.temp} />
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