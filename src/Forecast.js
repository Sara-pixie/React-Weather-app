import React from "react";
import "./Forecast.css";
import Day from "./Day";

export default function Forecast() {
  return (
    <div className="Forecast row">
      <div className="col-sm-2">
        <Day name="Wednesday" img="🌞" temp="20" />
      </div>
      <div className="col-sm-2">
        <Day name="Thursday" img="🌤" temp="17" />
      </div>
      <div className="col-sm-2">
        <Day name="Friday" img="🌥" temp="16" />
      </div>
      <div className="col-sm-2">
        <Day name="Saturday" img="🌤" temp="18" />
      </div>
      <div className="col-sm-2">
        <Day name="Sunday" img="🌧" temp="15" />
      </div>
      <div className="col-sm-2">
        <Day name="Monday" img="🌞" temp="19" />
      </div>
    </div>
  );
}
