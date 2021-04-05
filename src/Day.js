import React from "react";
import "./Day.css";

export default function Day(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let date = new Date(props.data.dt*1000);
  let units = props.units;
  let data = {
    day: days[date.getDay()],
    iconUrl: `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
    tempMax: props.data.temp.max,
    tempMin: props.data.temp.min,
    description: props.data.weather[0].description
  }
  if (units === "metric"){
    return (
    <div className="Day">
      <p>{data.day}</p>
      <img src={data.iconUrl} alt={data.description} className="image" />
      <p>{Math.round(data.tempMax)}° <span className="minTemp">{Math.round(data.tempMin)}°</span></p>
    </div>
  );
  } else{
    function convertToF(tempC){
      return ((tempC*9/5)+32);
    }
    return (
      <div className="Day">
        <p>{data.day}</p>
        <img src={data.iconUrl} alt={data.description} className="image" />
        <p>{Math.round(convertToF(data.tempMax))}° <span className="minTemp">{Math.round(convertToF(data.tempMin))}°</span></p>
      </div>
    );
  }
}