import React from "react";
import "./Alert.css";

export default function Alert(props){
    let alertsNumber = props.data.length;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    function renderMinutes(minutes){
        if (minutes < 10){
        return ("0"+minutes);
        }else{
        return (minutes);
        }
    }
    let alert1Name = props.data[0].event;
    let alert1Description = props.data[0].description;
    let alert1Start = new Date(props.data[0].start*1000);
    let alert1End = new Date(props.data[0].end*1000);
    let alert1FromDate = `${days[alert1Start.getDay()]} ${alert1Start.getHours()}:${renderMinutes(alert1Start.getMinutes())}`;
    let alert1ToDate = `${days[alert1End.getDay()]} ${alert1End.getHours()}:${renderMinutes(alert1End.getMinutes())}`;
       
    if(alertsNumber === 1){
        return (
            <div className="Alert">
                <p className="name">{alert1Name}</p>
                <p>Alert starts: {alert1FromDate}</p>
                <p> Alert ends: {alert1ToDate}</p>
                <p className="description">{alert1Description}</p>
            </div>
        );
    }
    if(alertsNumber === 2){
        let alert2Name = props.data[1].event;
        let alert2Description = props.data[1].description;
        let alert2Start = new Date(props.data[1].start*1000);
        let alert2End = new Date(props.data[1].end*1000);
        let alert2FromDate = `${days[alert2Start.getDay()]} ${alert2Start.getHours()}:${renderMinutes(alert2Start.getMinutes())}`;
        let alert2ToDate = `${days[alert2End.getDay()]} ${alert2End.getHours()}:${renderMinutes(alert2End.getMinutes())}`;
        
        return (
            <div>
                <div className="Alert">
                    <p className="name">{alert1Name}</p>
                    <p>Alert starts: {alert1FromDate}</p>
                    <p> Alert ends: {alert1ToDate}</p>
                    <p className="description">{alert1Description}</p>
                </div>
                <div className="Alert">
                    <p className="name">{alert2Name}</p>
                    <p>Alert starts: {alert2FromDate}</p>
                    <p> Alert ends: {alert2ToDate}</p>
                    <p className="description">{alert2Description}</p>
                </div>
            </div>
        );
    }
    if(alertsNumber === 3){
        let alert2Name = props.data[1].event;
        let alert2Description = props.data[1].description;
        let alert2Start = new Date(props.data[1].start*1000);
        let alert2End = new Date(props.data[1].end*1000);
        let alert2FromDate = `${days[alert2Start.getDay()]} ${alert2Start.getHours()}:${renderMinutes(alert2Start.getMinutes())}`;
        let alert2ToDate = `${days[alert2End.getDay()]} ${alert2End.getHours()}:${renderMinutes(alert2End.getMinutes())}`;
        let alert3Name = props.data[2].event;
        let alert3Description = props.data[2].description;
        let alert3Start = new Date(props.data[2].start*1000);
        let alert3End = new Date(props.data[2].end*1000);
        let alert3FromDate = `${days[alert3Start.getDay()]} ${alert3Start.getHours()}:${renderMinutes(alert3Start.getMinutes())}`;
        let alert3ToDate = `${days[alert3End.getDay()]} ${alert3End.getHours()}:${renderMinutes(alert3End.getMinutes())}`;
        
        return (
            <div>
                <div className="Alert">
                    <p className="name">{alert1Name}</p>
                    <p>Alert starts: {alert1FromDate}</p>
                    <p> Alert ends: {alert1ToDate}</p>
                    <p className="description">{alert1Description}</p>
                </div>
                <div className="Alert">
                    <p className="name">{alert2Name}</p>
                    <p>Alert starts: {alert2FromDate}</p>
                    <p> Alert ends: {alert2ToDate}</p>
                    <p className="description">{alert2Description}</p>
                </div>
                <div className="Alert">
                    <p className="name">{alert3Name}</p>
                    <p>Alert starts: {alert3FromDate}</p>
                    <p> Alert ends: {alert3ToDate}</p>
                    <p className="description">{alert3Description}</p>
                </div>
            </div>
        );
    }
    if(alertsNumber > 3){
        let alert2Name = props.data[1].event;
        let alert2Description = props.data[1].description;
        let alert2Start = new Date(props.data[1].start*1000);
        let alert2End = new Date(props.data[1].end*1000);
        let alert2FromDate = `${days[alert2Start.getDay()]} ${alert2Start.getHours()}:${renderMinutes(alert2Start.getMinutes())}`;
        let alert2ToDate = `${days[alert2End.getDay()]} ${alert2End.getHours()}:${renderMinutes(alert2End.getMinutes())}`;
        let alert3Name = props.data[2].event;
        let alert3Description = props.data[2].description;
        let alert3Start = new Date(props.data[2].start*1000);
        let alert3End = new Date(props.data[2].end*1000);
        let alert3FromDate = `${days[alert3Start.getDay()]} ${alert3Start.getHours()}:${renderMinutes(alert3Start.getMinutes())}`;
        let alert3ToDate = `${days[alert3End.getDay()]} ${alert3End.getHours()}:${renderMinutes(alert3End.getMinutes())}`;
        
        return (
            <div>
                <div className="Alert">
                    <p className="name">{alert1Name}</p>
                    <p>Alert starts: {alert1FromDate}</p>
                    <p> Alert ends: {alert1ToDate}</p>
                    <p className="description">{alert1Description}</p>
                </div>
                <div className="Alert">
                    <p className="name">{alert2Name}</p>
                    <p>Alert starts: {alert2FromDate}</p>
                    <p> Alert ends: {alert2ToDate}</p>
                    <p className="description">{alert2Description}</p>
                </div>
                <div className="Alert">
                    <p className="name">{alert3Name}</p>
                    <p>Alert starts: {alert3FromDate}</p>
                    <p> Alert ends: {alert3ToDate}</p>
                    <p className="description">{alert3Description}</p>
                </div>
                And {alertsNumber-3} more...
            </div>
        );
    }
}