import React from "react";
import "./Day.css";

export default function Day(props) {
  return (
    <div className="Day">
      <p>{props.name}</p>
      <div>{props.img}</div>
      <p>{props.temp}°C</p>
    </div>
  );
}