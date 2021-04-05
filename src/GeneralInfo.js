import React from "react";
import "./GeneralInfo.css";

export default function GeneralInfo(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[props.cityData.date.getDay()];
  let hour = props.cityData.date.getHours();
  let minutes = props.cityData.date.getMinutes();
  let min = minutes;
  if (minutes < 10){
    min = "0"+minutes;
  }
  return (
    <div className="GeneralInfo">
      <div className="header">
        <h2 className="city">{props.cityData.city}</h2>
      </div>
      <h3 className="date">{day}, {hour}:{min}</h3>
    </div>
  );
}
