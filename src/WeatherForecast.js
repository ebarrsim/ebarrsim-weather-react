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

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                    <WeatherForecastPreview  data={forecast.list[0]}/>
                    <WeatherForecastPreview  data={forecast.list[1]}/>
                    <WeatherForecastPreview  data={forecast.list[2]}/>
                    <WeatherForecastPreview  data={forecast.list[3]}/>
                    <WeatherForecastPreview  data={forecast.list[4]}/>
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