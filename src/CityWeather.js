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
                            <span className="temperature">{Math.round(props.cityData.temperature)}</span>
                            <span className="unit">
                                    <span className="selected">°C</span>|
                                    <span href="#"className="fahrenheit" onClick={convertToF}>°F</span>                        
                            </span>
                        </p>
                    </div>
                    <div className="Details">
                        <p>
                            Feels like: <span className="feels-like">{Math.round(props.cityData.feelsLike)}</span>°C <br />
                            Humidity: <span className="humidity">{props.cityData.humidity}</span>% <br />
                            Wind: <span className="wind-speed">{Math.round(props.cityData.wind*3.6)}</span>
                            <span className="speed-unit">km/h</span>
                        </p>
                    </div>
                </div>
                <Forecast units={units} lon={props.cityData.coordLonditude} lat={props.cityData.coordLatitude} />
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
                            <span className="temperature">{Math.round((props.cityData.temperature*9/5)+32)}</span>
                            <span className="unit">
                                    <span href="#"className="celsius" onClick={convertToC}>°C</span>|
                                    <span className="selected">°F</span>
                            </span>
                        </p>
                    </div>
                    <div className="Details">
                        <p>
                            Feels like: <span className="feels-like">{Math.round((props.cityData.feelsLike*9/5)+32)}</span>°F <br />
                            Humidity: <span className="humidity">{props.cityData.humidity}</span>% <br />
                            Wind: <span className="wind-speed">{Math.round((props.cityData.wind*3.6)/1.609344)}</span>
                            <span className="speed-unit">mph</span>
                        </p>
                    </div>
                </div>
                <Forecast units={units} lon={props.cityData.coordLonditude} lat={props.cityData.coordLatitude} />
            </div>
        );
    }
}
