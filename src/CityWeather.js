import React from "react";
import "./CityWeather.css";

export default function CityWeather() {
  return (
    <div className="CityWeather">
        <h4 className="temp-description">Sunny</h4>
        <div className="WeatherImage">
            <p className="image">
                <span role="img" aria-label="image">
                    🌞
                </span>
            </p>
        </div>
        <div className="Temperature">
            <p>
                <string className="temperature">19</string>
                <string className="unit">
                    <string className="selected">°C</string>|
                    <string className="fahrenheit">°F</string>
                </string>
            </p>
        </div>
        <div className="Details">
            <p>
                Feels like: <string className="feels-like">18</string>°C <br />
                Humidity: <string className="humidity">20</string>% <br />
                Wind: <string className="wind-speed">5</string>
                <string className="speed-unit">km/h</string>
            </p>
        </div>
    </div>
  );
}
