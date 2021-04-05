import React from "react";
import "./Alert.css";

export default function Alert(props){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    function renderMinutes(minutes){
        if (minutes < 10){
        return ("0"+minutes);
        }else{
        return (minutes);
        }
    }
    let alertName = props.data.event;
    let alertDescription = props.data.description;
    let alertStart = new Date(props.data.start*1000);
    let alertEnd = new Date(props.data.end*1000);
    let alertFromDate = `${days[alertStart.getDay()]} ${alertStart.getHours()}:${renderMinutes(alertStart.getMinutes())}`;
    let alertToDate = `${days[alertEnd.getDay()]} ${alertEnd.getHours()}:${renderMinutes(alertEnd.getMinutes())}`;
    return (
        <div className="Alert">
            <p className="name">{alertName}</p>
            <p>Alert starts: {alertFromDate}</p>
            <p> Alert ends: {alertToDate}</p>
            <p className="description">{alertDescription}</p>
        </div>
    );
}