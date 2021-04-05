import React from "react";
import "./Hour.css"

export default function Hour(props){
    let date = new Date(props.data.dt*1000);
    let units = props.units;
    let data = {
        hour: date.getHours(),
        minutes: date.getMinutes(),
        iconUrl: `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`,
        temp: props.data.temp,
        description: props.data.weather[0].description
    }
    function renderMinutes(minutes){
        if (minutes < 10){
        return ("0"+minutes);
        }else{
        return (minutes);
        }
    }
    if (units === "metric"){
    return (
    <div className="Hour">
      <p>{data.hour}:{renderMinutes(data.minutes)}</p>
      <img src={data.iconUrl} alt={data.description} className="image" />
      <p>{Math.round(data.temp)}°C</p>
    </div>
  );
  } else{
    function convertToF(tempC){
      return ((tempC*9/5)+32);
    }
    return (
      <div className="Hour">
        <p>{data.hour}:{renderMinutes(data.minutes)}</p>
        <img src={data.iconUrl} alt={data.description} className="image" />
        <p>{Math.round(convertToF(data.temp))}°F</p>
      </div>
    );
  }
}