import React, {useState} from "react";
import "./CityWeather.css";
import Forecast from "./Forecast";

export default function CityWeather(props) {
    let [units, setUnits] = useState("metric");
    function convertToF(event){
        event.preventDefault();
        setUnits("imperial");
    }
    function convertToC(event){
        event.preventDefault();
        setUnits("metric");
    }
    if (units === "metric"){
        return (
            <div>
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
                                    <a href="#"className="fahrenheit" onClick={convertToF}>°F</a>                        
                            </string>
                        </p>
                    </div>
                    <div className="Details">
                        <p>
                            Feels like: <string className="feels-like">{Math.round(props.cityData.feelsLike)}</string>°C <br />
                            Humidity: <string className="humidity">{props.cityData.humidity}</string>% <br />
                            Wind: <string className="wind-speed">{Math.round(props.cityData.wind*3.6)}</string>
                            <string className="speed-unit">km/h</string>
                        </p>
                    </div>
                </div>
                <Forecast units={units} city={props.cityData.city} />
            </div>
        );
    } else {
        return (
            <div>
                <div className="CityWeather">
                    <h4 className="temp-description">{props.cityData.description}</h4>
                    <div className="WeatherImage">
                        <p className="image">
                            <img src={props.cityData.iconUrl} alt={props.cityData.description}/>
                        </p>
                    </div>
                    <div className="Temperature">
                        <p>
                            <string className="temperature">{Math.round((props.cityData.temperature*9/5)+32)}</string>
                            <string className="unit">
                                    <a href="#"className="celsius" onClick={convertToC}>°C</a>|
                                    <string className="selected">°F</string>
                            </string>
                        </p>
                    </div>
                    <div className="Details">
                        <p>
                            Feels like: <string className="feels-like">{Math.round((props.cityData.feelsLike*9/5)+32)}</string>°F <br />
                            Humidity: <string className="humidity">{props.cityData.humidity}</string>% <br />
                            Wind: <string className="wind-speed">{Math.round((props.cityData.wind*3.6)/1.609344)}</string>
                            <string className="speed-unit">mph</string>
                        </p>
                    </div>
                </div>
                <Forecast units={units} city={props.cityData.city} />
            </div>
        );
    }
}
