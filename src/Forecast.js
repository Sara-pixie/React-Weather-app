import React from "react";
import "./Forecast.css";
import Day from "./Day";

export default function Forecast(props) {
  return (
    <div className="Forecast"> Forecast for {props.city} in {props.units} units is comming soon...<br />
      <Day name="Wednesday" img="🌞" temp="20" />
      <Day name="Thursday" img="🌤" temp="17" />
      <Day name="Friday" img="🌥" temp="16" />
      <Day name="Saturday" img="🌤" temp="18" />
      <Day name="Sunday" img="🌧" temp="15" />
      <Day name="Monday" img="🌞" temp="19" />
    </div>
  );
}
