import React, {useState} from "react";
import "./CurrentCity.css";
import GeneralInfo from "./GeneralInfo";
import CityWeather from "./CityWeather";
import axios from "axios";

export default function CurrentCity() {
  let [input, setInput] = useState("New York");
  const [cityData, setCityData] = useState({});
  function handleResponse(response){
    setCityData ({
      ready: true,
      city: response.data.name,
      coordLonditude: response.data.coord.lon,
      coordLatitude: response.data.coord.lat,
      date: new Date(response.data.dt*1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }
  function searchCity(city){
    const apiKey = "3bf63f231397bee1a16cfec596591379";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event){
    setInput(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    setCityData ({});
    searchCity(input);
  }
  if (cityData.ready){
    return (
      <div className="CurrentCity">
        <div className="Search">
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              onChange={handleChange}
              type="search"
              placeholder="Enter city"
              autoFocus
              autoComplete="off"
              className="searchInput"
            />
            <button className="searchBtn" type="submit">
              <i className="fas fa-search"></i> Search
            </button>
            <button className="myLocationBtn">
              <i className="fas fa-map-marker-alt"></i> My Location
            </button>
          </form>
        </div>
        <GeneralInfo cityData={cityData}/>
        <hr />
        <CityWeather cityData={cityData}/>
      </div>
    );
  } else {
    searchCity(input);
    return (
      <div className="CurrentCity">
        <div className="Search">
          <form onSubmit={handleSubmit} className="searchForm">
            <input
              onChange={handleChange}
              type="search"
              placeholder="Enter city"
              autoFocus
              autoComplete="off"
              className="searchInput"
            />
            <button className="searchBtn" type="submit">
              <i className="fas fa-search"></i> Search
            </button>
            <button className="myLocationBtn">
              <i className="fas fa-map-marker-alt"></i> My Location
            </button>
          </form>
        </div>
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
      </div>
    );
  }
}
