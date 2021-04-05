import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import Day from "./Day";
import Hour from "./Hour";
import Alert from "./Alert";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [section, setSection] = useState("none");
  let [dailyForecast, setDailyForecast] = useState(null);
  let [hourlyForecast, setHourlyForecast] = useState(null);
  let [alerts, setAlerts] = useState(null);
  const apiKey = "3bf63f231397bee1a16cfec596591379";
  let units = props.units;
  let lat = props.lat;
  let lon = props.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=current,minutely&appid=${apiKey}`;
  function handleResponse(response){
    setDailyForecast(response.data.daily);
    setHourlyForecast(response.data.hourly);
    setAlerts(response.data.alerts);
    setReady(true);
  }
  function handleDailyForecast(event){
    event.preventDefault();
    setSection("daily");
  }
  function handleHourlyForecast(event){
    event.preventDefault();
    setSection("hourly");
  }
  function handleAlerts(event){
    event.preventDefault();
    setSection("alerts");
  }
  function closeSections(event){
    event.preventDefault();
    setSection("none");
  }
  if (ready){
    if(alerts !== undefined){
      if(section === "none"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={handleDailyForecast}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={handleHourlyForecast}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
              <button className="alertsBtn" onClick={handleAlerts}><i className="fas fa-exclamation-triangle"></i> Alerts</button>
            </div>
          </div>
        );
      }
      if(section === "daily"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={closeSections}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={handleHourlyForecast}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
              <button className="alertsBtn" onClick={handleAlerts}><i className="fas fa-exclamation-triangle"></i> Alerts</button>
            </div>
            <Day data={dailyForecast[1]} units={units}/>
            <Day data={dailyForecast[2]} units={units}/>
            <Day data={dailyForecast[3]} units={units}/>
            <Day data={dailyForecast[4]} units={units}/>
            <Day data={dailyForecast[5]} units={units}/>
            <Day data={dailyForecast[6]} units={units}/>
          </div>
        );
      }
      if(section === "hourly"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={handleDailyForecast}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={closeSections}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
              <button className="alertsBtn" onClick={handleAlerts}><i className="fas fa-exclamation-triangle"></i> Alerts</button>
            </div>
            <Hour data={hourlyForecast[1]} units={units}/>
            <Hour data={hourlyForecast[2]} units={units}/>
            <Hour data={hourlyForecast[3]} units={units}/>
            <Hour data={hourlyForecast[4]} units={units}/>
            <Hour data={hourlyForecast[5]} units={units}/>
            <Hour data={hourlyForecast[6]} units={units}/>
          </div>
        );
      }
      if(section === "alerts"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={handleDailyForecast}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={handleHourlyForecast}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
              <button className="alertsBtn" onClick={closeSections}><i className="fas fa-exclamation-triangle"></i> Alerts</button>
            </div>
            <Alert data={alerts} />
          </div>
        );
      }
    } else{
      if(section === "none"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={handleDailyForecast}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={handleHourlyForecast}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
              </div>
          </div>
        );
      }
      if(section === "daily"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={closeSections}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={handleHourlyForecast}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
            </div>
            <Day data={dailyForecast[1]} units={units}/>
            <Day data={dailyForecast[2]} units={units}/>
            <Day data={dailyForecast[3]} units={units}/>
            <Day data={dailyForecast[4]} units={units}/>
            <Day data={dailyForecast[5]} units={units}/>
            <Day data={dailyForecast[6]} units={units}/>
          </div>
        );
      }
      if(section === "hourly"){
        return (
          <div className="Forecast"> 
            <div className="forecastBtns">
              <button className="dailyForecastBtn" onClick={handleDailyForecast}><i className="fas fa-calendar-day"></i> Daily Forecast</button>
              <button className="hourlyForecastBtn" onClick={closeSections}><i className="fas fa-hourglass-half"></i> Hourly Forecast</button>
            </div>
            <Hour data={hourlyForecast[1]} units={units}/>
            <Hour data={hourlyForecast[2]} units={units}/>
            <Hour data={hourlyForecast[3]} units={units}/>
            <Hour data={hourlyForecast[4]} units={units}/>
            <Hour data={hourlyForecast[5]} units={units}/>
            <Hour data={hourlyForecast[6]} units={units}/>
          </div>
        );
      }
    }
  } else {
  axios.get(apiUrl).then(handleResponse);
    return (null);
  }
}
