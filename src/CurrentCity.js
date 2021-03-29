import React from "react";
import Forecast from "./Forecast";
import "./CurrentCity.css";
import GeneralInfo from "./GeneralInfo";
import CityWeather from "./CityWeather";

export default function CurrentCity() {
  return (
    <div className="CurrentCity">
      <GeneralInfo />
      <hr />
      <CityWeather />
      <Forecast />
    </div>
  );
}
