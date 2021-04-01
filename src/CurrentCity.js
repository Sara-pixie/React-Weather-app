import React, {useState} from "react";
import Forecast from "./Forecast";
import "./CurrentCity.css";
import GeneralInfo from "./GeneralInfo";
import CityWeather from "./CityWeather";
import axios from "axios";

export default function CurrentCity() {
  const [cityData, setCityData] = useState({});
  const apiKey = "3bf63f231397bee1a16cfec596591379";
  let city = "New York";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  if (cityData.ready){
    return (
      <div className="CurrentCity">
        <GeneralInfo cityData={cityData}/>
        <hr />
        <CityWeather cityData={cityData}/>
        <Forecast cityData={cityData}/>
      </div>
    );
  } else {
    function handleResponse(response){
      setCityData ({
        ready: true,
        city: response.data.name,
        date: new Date(response.data.dt*1000),
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
    }
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Loading">
        <span className="letter letter-1">L</span>
        <span className="letter letter-2">o</span>
        <span className="letter letter-3">a</span>
        <span className="letter letter-4">d</span>
        <span className="letter letter-5">i</span>
        <span className="letter letter-6">n</span>
        <span className="letter letter-7">g</span>
        <span className="letter letter-8">.</span>
        <span className="letter letter-9">.</span>
        <span className="letter letter-10">.</span>
      </div>
    );
  }
}
