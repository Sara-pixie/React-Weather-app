import React from "react";
import "./CityWeather.css";

export default function CityWeather() {
  return (
    <div className="CityWeather row">
      <h3 id="temp-description">Sunny</h3>
      <div>
        <div className="informationElement col-sm">
          <div className="WeatherImage left">
      <div className="left">
        <p className="image">
          <span role="img" aria-label="image">
            🌞
          </span>
        </p>
      </div>
    </div>
        </div>
        <div className="informationElement col-sm">
          <div className="Temperature temp-units">
      <p>
        <string className="temperature">19</string>
        <string className="unit">
          <string className="selected">°C</string>|
          <string className="fahrenheit">°F</string>
        </string>
      </p>
    </div>
        </div>
        <div className="informationElement col-sm">
          <div className="Details right">
      <p>
        Feels like: <string className="feels-like">18</string>°C <br />
        Humidity: <string className="humidity">20</string>% <br />
        Wind: <string className="wind-speed">5</string>
        <string className="speed-unit">km/h</string>
      </p>
    </div>
        </div>
      </div>
    </div>
  );
}
