import React from "react";
import axios from "axios";
import "./Forecast.css";
import Day from "./Day";

export default function Forecast(props) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const apiKey = "3bf63f231397bee1a16cfec596591379";
  let units = props.units;
  let lat = props.lat;
  let lon = props.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely&appid=${apiKey}`;
  function handleResponse(response){
    console.log(response.data);
  }
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast"> 
    Comming soon...<br />
      <Day name="Wednesday" img="🌞" temp="20" />
      <Day name="Thursday" img="🌤" temp="17" />
      <Day name="Friday" img="🌥" temp="16" />
      <Day name="Saturday" img="🌤" temp="18" />
      <Day name="Sunday" img="🌧" temp="15" />
      <Day name="Monday" img="🌞" temp="19" />
    </div>
  );
}
