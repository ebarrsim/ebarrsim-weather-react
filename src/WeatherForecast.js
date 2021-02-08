import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function WeatherFunction(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded) {
        console.log(forecast.list[0]);
        return (
            <div className="WeatherForecast row">
                    <WeatherForecastPreview  props={forecast.list[0]}/>
                    <WeatherForecastPreview  props={forecast.list[1]}/>
                    <WeatherForecastPreview  props={forecast.list[2]}/>
                    <WeatherForecastPreview  props={forecast.list[3]}/>
                    <WeatherForecastPreview  props={forecast.list[4]}/>
                    <WeatherForecastPreview  props={forecast.list[5]}/>
            </div>
        );
    } else {
    let apiKey = "def976baf763335dd5c349c4a2e5220b";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleForecastResponse);

    return null;
    }
}