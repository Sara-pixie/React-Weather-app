import React from "react";
import "./GeneralInfo.css";

export default function GeneralInfo(props) {
  return (
    <div className="GeneralInfo">
      <div className="header">
        <h2 className="city">{props.cityData.city}</h2>
      </div>
      <h3 className="date">Tuesday, 14:35</h3>
    </div>
  );
}
