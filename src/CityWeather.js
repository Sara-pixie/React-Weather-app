import React from "react";
import "./CityWeather.css";

export default function CityWeather(props) {
  return (
    <div className="CityWeather">
        <h4 className="temp-description">{props.cityData.description}</h4>
        <div className="WeatherImage">
            <p className="image">
                <img src={props.cityData.iconUrl} alt={props.cityData.description}/>
            </p>
        </div>
        <div className="Temperature">
            <p>
                <string className="temperature">{Math.round(props.cityData.temperature)}</string>
                <string className="unit">
                    <string className="selected">°C</string>|
                    <string className="fahrenheit">°F</string>
                </string>
            </p>
        </div>
        <div className="Details">
            <p>
                Feels like: <string className="feels-like">{props.cityData.feelsLike}</string>°C <br />
                Humidity: <string className="humidity">{props.cityData.humidity}</string>% <br />
                Wind: <string className="wind-speed">{props.cityData.wind*3.6}</string>
                <string className="speed-unit">km/h</string>
            </p>
        </div>
    </div>
  );
}
