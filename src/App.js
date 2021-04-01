import React, {useState} from "react";
import './App.css';

import CurrentCity from "./CurrentCity";

export default function App() {
  let [input, setInput] = useState("");
  let [city, setCity] = useState("New York");
  function handleChange(event){
    setInput(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    setCity(input);
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
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
      <CurrentCity searchInput={city} />
      <div className="Footer">
      <a
        href="https://github.com/Sara-pixie/React-Weather-app"
        target="_blank"
        className="sara-git-link"
        rel="noreferrer"
      >
        Open-source Code
      </a>{" "}
      <strong>by Sara Paranuk</strong>
    </div>
    </div>
  );
}